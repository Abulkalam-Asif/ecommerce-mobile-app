import { PaymentMethod } from "./payment_method.types";

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number; // Price at time of order
  discount: number; // Discount applied to this item
  subtotal: number;
}

export type OrderStatus =
  | "pending" // When order is created
  | "confirmed" // When admin confirms the order
  | "shipped" // When order is shipped
  | "delivered" // When order is delivered to customer
  | "cancelled" // When admin or user cancels the order
  | "refunded"; // When order is refunded

export type PaymentStatus =
  | "pending" // Either payment method not selected or cash on delivery selected
  | "awaiting_confirmation" // For online payments, waiting for payment confirmation by admin
  | "confirmed" // Payment confirmed by admin
  | "refunded" // Payment refunded
  | "cancelled"; // Payment cancelled

export interface Order {
  id: string;
  customerId: string;

  // Items
  items: OrderItem[];

  // Pricing
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;

  // Payment
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentStatusHistory: {
    status: PaymentStatus;
    updatedAt: Date;
  }[];
  proofOfPaymentUrl?: string; // For bank transfers

  // Delivery
  deliveryAddress: string;

  // Status
  status:
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";
  statusHistory: {
    status: OrderStatus;
    updatedAt: Date;
  }[];

  riderId?: string;
  createdAt: Date;
  deliveredAt?: Date;
}
