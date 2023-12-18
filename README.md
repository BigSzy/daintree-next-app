# E-Commerce Portfolio Project

Sample Next.js e-commerce website integrating Fake Store API, Stripe API, Sass, and Font Awesome icons. Deployed with AWS Amplify. View the live demo [here](insert working link). For checkout use fake credit card No *4242 4242 4242 4242*. (pick expiry date in the future and use any CCV code). The project use Static Site Generation to create product and category pages.

## Technologies Used

- **Next.js:** React framework with SSR.
- **Fake Store API:** Sample product data.
- **Stripe API:** Secure and efficient payment processing.
- **Sass:** Flexible and organized styling.
- **Font Awesome Icons:** Sleek and modern design elements.

## Setup

1. **Stripe Account:**
   Create a Stripe account and obtain test keys for API integration.

2. **Environment Variables:**
   In the root directory, create a `.env.local` file with your Stripe test keys.
```plaintext
STRIPE_PUBLIC_KEY=your_public_key
STRIPE_SECRET_KEY=your_secret_key
```

3. **Running the project** 
```
npm install && npm run dev
```
