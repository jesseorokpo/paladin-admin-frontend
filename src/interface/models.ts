export type CartItem = {
  product_id: any;
  name?: string;
  image?: string;
  price: number;
  quantity: number;
};

export interface TUser {
  id?: string;
  email?: string;
  fullname?: string;
  username?: string;
  bio?: string;
  phone?: string;
  photo?: string;
  address?: string;
  state?: string;
  lga?: string;
  created_at?: number;
  updated_at?: number;
  roles?: string[];
  levels?: string[];
}

export interface TProduct {
  id: number;
  title: "iPhone 9";
  description: "An apple mobile which is nothing like apple";
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface TCollection {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  parent_id?: string;
}

export type TransactionModel = {
  authorization_url: string;
  access_code: string;
  reference: string;
  status?: string;
};

export type SubscriptionTransactionModel = {
  plan: string;
  quantity: number;
  amount: number;
  subscription_code: string;
  email_token: string;
  id: number;
};

export type OrderCollectionItem = {} & CartItem;

export type TOrderModel = {
  id?: string;
  created_at?: any;
  updated_at?: any;
  customer_email?: string;
  items: OrderCollectionItem[];
  total: number;
  balance?: number;
  payment_status?: string;
  payment_type?: string;
  status: string;
  paystack_trans?: TransactionModel;
  subscription_trans?: SubscriptionTransactionModel;
  subscription_status?: string;
  history: any[];
};
