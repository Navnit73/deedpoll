export interface PaymentDetails {
  name: string;
  email: string;
}

export interface PayPalResponse {
  orderID: string;
  payerID?: string;
  paymentID?: string;
}

export interface PaymentState extends PayPalResponse, PaymentDetails {}
