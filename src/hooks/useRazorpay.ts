import { useState, useCallback } from 'react';


const SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

export function useRazorpay() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadScript = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      // If script is already loaded
      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        resolve(true);
        return;
      }

      // If script is already injecting
      if (document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
        // Wait a bit for it to finish loading
        const checkInterval = setInterval(() => {
          if ((window as any).Razorpay) {
            clearInterval(checkInterval);
            resolve(true);
          }
        }, 100);
        
        // Timeout after 5s
        setTimeout(() => {
          clearInterval(checkInterval);
          resolve(false);
        }, 5000);
        return;
      }

      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const initializePayment = useCallback(async (options: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const isLoaded = await loadScript();

      if (!isLoaded) {
        throw new Error('Failed to load Razorpay SDK. Please check your connection.');
      }

      if (!(window as any).Razorpay) {
        throw new Error('Razorpay SDK is not available.');
      }

      const razorpayInstance = new (window as any).Razorpay(options);
      
      razorpayInstance.on('payment.failed', function (response: any) {
        if (options.onPaymentFailure) {
          options.onPaymentFailure(response.error);
        }
      });

      razorpayInstance.open();
    } catch (err: any) {
      setError(err);
      if (options.onPaymentFailure) {
        options.onPaymentFailure(err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [loadScript]);

  return { isLoading, error, initializePayment };
}
