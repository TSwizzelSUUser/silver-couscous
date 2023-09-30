import Stripe from 'stripe';


export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string; //optional
  avatar_url?: string; // optional
  billing_address?: Stripe.Address; //optional
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type]; //optional
}

export interface Product {
  id: string;
  active?: boolean;//optional
  name?: string;//optional
  description?: string;//optional
  image?: string;//optional
  metadata?: Stripe.Metadata;//optional
}

export interface Price {
  id: string;
  product_id?: string;//optional
  active?: boolean;//optional
  description?: string;//optional
  unit_amount?: number;//optional
  currency?: string;//optional
  type?: Stripe.Price.Type;//optional
  interval?: Stripe.Price.Recurring.Interval;//optional
  interval_count?: number;//optional
  trial_period_days?: number | null;//optional
  metadata?: Stripe.Metadata;//optional
  products?: Product;//optional
}

export interface Subscription { //stripe specific fields
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;//optional
  metadata?: Stripe.Metadata;//optional
  price_id?: string;//optional
  quantity?: number;//optional, needs to be a number
  cancel_at_period_end?: boolean;//optional
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;//optional
  cancel_at?: string;//optional
  canceled_at?: string;//optional
  trial_start?: string;//optional
  trial_end?: string;//optional
  prices?: Price;//optional
}


export interface Song {
  id: string;
  user_id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
}

export interface Customer {
  id: string;
  stripe_customer_id?: string;
}


export interface ProductWithPrice extends Product {
  prices?: Price[];
}