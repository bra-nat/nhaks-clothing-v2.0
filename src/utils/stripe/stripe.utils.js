import { loadStripe } from "@stripe/stripe-js";
// import { STRIPE_PUBLISHABLE_KEY } from "../../keys/keys.stripe";

export const stripePromise = loadStripe( process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY );
