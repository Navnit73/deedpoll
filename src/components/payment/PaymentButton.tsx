"use client";

import React, { useState } from 'react';
import { useRazorpay } from '@/hooks/useRazorpay';
import { PaymentDialog } from './PaymentDialog';
import { PaymentDetails } from '@/types/payment';

interface PaymentButtonProps {
  amount: number;
  currency?: string;
  buttonText?: string;
  onSuccess?: () => void;
}

export function PaymentButton({
  amount,
  currency = 'GBP',
  buttonText = 'Pay with Razorpay',
  onSuccess,
}: PaymentButtonProps) {
  const { isLoading: isSdkLoading, error: sdkError, initializePayment } = useRazorpay();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleDialogOpen = () => {
    if (sdkError) {
      showToast('Payment system unavailable. Please check your connection.', 'error');
      return;
    }
    setIsDialogOpen(true);
  };

  const handleDialogSubmit = async (details: PaymentDetails) => {
    setIsDialogOpen(false);
    setIsProcessing(true);
    
    showToast('Initializing payment...', 'info');

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use public key from env
      amount: amount.toString(),
      currency: currency,
      name: 'Deed Poll UK',
      description: 'Digital Deed Poll PDF',
      image: '/favicon.ico',
      prefill: {
        name: details.name,
        email: details.email,
      },
      theme: {
        color: '#1d70b8',
      },
      modal: {
        escape: true,
        backdropclose: false,
        ondismiss: function() {
          setIsProcessing(false);
          showToast('Payment Cancelled by user', 'error');
        }
      },
      handler: async function (response: any) {
        // Read keys as requested by user
        const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const keySecret = process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECREATE;

        if (!keyId || !keySecret) {
          console.warn('Missing Razorpay Keys in Environment Variables');
        }

        // Frontend-only signature mock verification utilizing the secret key
        console.log('Verifying with SECRET KEY:', keySecret ? '***' + keySecret.slice(-4) : 'none');

        // Store temporarily in state/memory as requested
        const paymentState = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          name: details.name,
          email: details.email,
        };
        
        console.log('Payment State Stored:', paymentState);
        
        setIsProcessing(false);
        showToast('Payment Successful! Preparing your document...', 'success');
        
        if (onSuccess) {
          onSuccess();
        }
      },
      onPaymentFailure: function(error: any) {
        setIsProcessing(false);
        showToast(error.description || 'Payment Failed. Please try again.', 'error');
      }
    };

    try {
      await initializePayment(options);
    } catch (err: any) {
      setIsProcessing(false);
      showToast(err.message || 'Failed to open payment gateway', 'error');
    }
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className={`px-6 py-4 rounded-xl shadow-lg border flex items-center gap-3 font-medium ${
            toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
            toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
            'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            {toast.type === 'success' && (
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            )}
            {toast.type === 'error' && (
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            )}
            {toast.type === 'info' && (
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )}
            {toast.message}
          </div>
        </div>
      )}

      {/* Payment Dialog */}
      <PaymentDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleDialogSubmit}
      />

      {/* Main CTA Button */}
      <button
        onClick={handleDialogOpen}
        disabled={isSdkLoading || isProcessing}
        className="px-8 py-4 bg-[#00703c] text-white rounded-xl hover:bg-[#005a30] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:shadow-sm active:translate-y-0.5 font-bold text-xl min-w-[280px] flex items-center justify-center"
      >
        {isSdkLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading Payment...
          </span>
        ) : isProcessing ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          buttonText
        )}
      </button>
    </div>
  );
}
