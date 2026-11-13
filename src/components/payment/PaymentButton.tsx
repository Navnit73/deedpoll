"use client";

import React, { useEffect, useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { PaymentState } from '@/types/payment';

// Use live Client ID from environment variables, or fallback to 'test' for sandbox
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test';

// Shown when the PayPal SDK fails to load, e.g. an invalid client ID or a blocked script.
function ScriptLoadError() {
  const [{ isRejected }] = usePayPalScriptReducer();
  if (!isRejected) return null;
  return (
    <p className="p-3 border-2 border-red-600 bg-red-50 text-red-800 text-sm font-bold">
      Payment is temporarily unavailable. Please refresh the page or try again later.
    </p>
  );
}

interface PaymentButtonProps {
  amount: number;
  currency?: string;
  description?: string;
  disabled?: boolean;
  onSuccess?: (payment: PaymentState) => void;
}

export function PaymentButton({
  amount,
  currency = 'GBP',
  description = 'Digital Deed Poll PDF',
  disabled = false,
  onSuccess,
}: PaymentButtonProps) {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const expectedValue = (amount / 100).toFixed(2);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    // Clear the previous timer so it can't hide a newer toast early.
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, type });
    toastTimer.current = setTimeout(() => setToast(null), 5000);
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

      {clientId === 'test' && (
        <p className="mb-3 p-3 border-2 border-amber-500 bg-amber-50 text-amber-900 text-sm font-bold">
          PayPal sandbox mode: no real money will be taken. Set NEXT_PUBLIC_PAYPAL_CLIENT_ID to go live.
        </p>
      )}

      <div className="w-full">
        <PayPalScriptProvider options={{ clientId: clientId, currency: currency }}>
          <ScriptLoadError />
          <PayPalButtons
            style={{ layout: "vertical", shape: "rect", color: "blue" }}
            disabled={disabled}
            forceReRender={[amount, currency, disabled]}
            onClick={(data, actions) => {
              // The disabled prop only greys the button out; block the click as well.
              return disabled ? actions.reject() : actions.resolve();
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: expectedValue,
                    },
                    description,
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING",
                },
              });
            }}
            onApprove={async (data, actions) => {
              if (!actions.order) return;
              showToast('Processing payment...', 'info');

              let details;
              try {
                details = await actions.order.capture();
              } catch (err) {
                // PayPal recommends restarting checkout when the card or funding source is declined,
                // so the buyer can pick another way to pay.
                if (String(err).includes('INSTRUMENT_DECLINED')) {
                  showToast('Your payment method was declined. Please try another card or account.', 'error');
                  return actions.restart();
                }
                console.error('PayPal capture error:', err);
                showToast('Payment could not be completed. You have not been charged.', 'error');
                return;
              }

              const capture = details?.purchase_units?.[0]?.payments?.captures?.[0];
              const orderOk = details?.status === 'COMPLETED' || details?.status === 'APPROVED';
              const captureOk = !capture?.status || capture.status === 'COMPLETED' || capture.status === 'PENDING';
              const amountOk =
                !capture?.amount?.value ||
                (Number(capture.amount.value) === Number(expectedValue) &&
                  (!capture.amount.currency_code || capture.amount.currency_code === currency));

              if (!orderOk || !captureOk || !amountOk) {
                console.error('PayPal capture not accepted:', details?.status, capture?.status, capture?.amount);
                showToast('Payment was not completed. Please contact support if you were charged.', 'error');
                return;
              }

              const payerName = details.payer?.name?.given_name
                ? `${details.payer.name.given_name} ${details.payer.name.surname || ''}`.trim()
                : '';

              const paymentState: PaymentState = {
                orderID: details.id || data.orderID,
                payerID: details.payer?.payer_id || '',
                name: payerName,
                email: details.payer?.email_address || '',
              };
              showToast('Payment Successful! Preparing your document...', 'success');
              onSuccess?.(paymentState);
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
