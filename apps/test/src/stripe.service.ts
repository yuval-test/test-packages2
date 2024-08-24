import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2020-08-27',
    });
  }

  async createCustomer(email: string, name: string): Promise<Stripe.Customer> {
    return await this.stripe.customers.create({
      email,
      name,
    });
  }

  async createCharge(amount: number, currency: string, customerId: string, description: string): Promise<Stripe.Charge> {
    return await this.stripe.charges.create({
      amount,
      currency,
      customer: customerId,
      description,
    });
  }

  async handleWebhook(event: Stripe.Event): Promise<void> {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        // Handle successful payment here
        break;
      case 'customer.created':
        const customer = event.data.object as Stripe.Customer;
        // Handle new customer creation here
        break;
      // Add more cases as needed
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
