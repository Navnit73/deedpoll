export interface PaymentDetails {
  name: string;
  email: string;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface PaymentState extends RazorpayResponse, PaymentDetails {}
