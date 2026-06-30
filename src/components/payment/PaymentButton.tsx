"use client";

import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PAYPAL_CLIENT_ID = 'BAAwpoObIPFtmfq5bnouelbk_OGV1Ldhfo7lRpg5QoK6ulzhC73jeq1vDdPWbDaLLd_3Tj1JdvuA5hBYv0';

interface PaymentButtonProps {
  amount: number;
  currency?: string;
  onSuccess?: () => void;
}

export function PaymentButton({
  amount,
  currency = 'GBP',
  onSuccess,
}: PaymentButtonProps) {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
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

      <div className="w-full">
        <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: currency }}>
          <PayPalButtons
            style={{ layout: "vertical", shape: "rect", color: "blue" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: (amount / 100).toFixed(2),
                    },
                    description: 'Digital Deed Poll PDF',
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              showToast('Processing payment...', 'info');
              if (actions.order) {
                return actions.order.capture().then((details) => {
                  const payerName = details.payer?.name?.given_name 
                    ? `${details.payer.name.given_name} ${details.payer.name.surname || ''}`.trim()
                    : '';
                  
                  const paymentState = {
                    orderID: details.id || '',
                    payerID: details.payer?.payer_id || '',
                    name: payerName,
                    email: details.payer?.email_address || '',
                  };
                  console.log('Payment State Stored:', paymentState);
                  showToast('Payment Successful! Preparing your document...', 'success');
                  if (onSuccess) {
                    onSuccess();
                  }
                });
              }
              return Promise.resolve();
            }}
            onError={(err) => {
              console.error("PayPal Error:", err);
              showToast('Payment failed or was cancelled.', 'error');
            }}
            onCancel={() => {
              showToast('Payment was cancelled by user.', 'info');
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
