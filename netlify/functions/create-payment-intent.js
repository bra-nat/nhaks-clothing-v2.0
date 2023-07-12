//Attach our secret variable to to stripe
//const STRIPE_SECRET_KEY = "sk_test_51NSk25DzWijCWD50bh2lbrVxWBTedHShD6p0NbqT03OQJm5LW8cnPHg4FikLXOKrdn0vShQg9tSkMEhM5OA0El9500yj24r7RP" 

require("dotenv").config();
 const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

 console.log(stripe)
 //Handler to create the paymentIntent to stripe
 exports.handler = async (event) => {
    /**********
    try {
        //Receives an amount value from the user
        const { amount } = JSON.parse(event.body);

        //Creating the paymentIntent by passing the amount value to stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"]
        });
// Extracting / returning the response; If successfull we update the UI with a status code
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        console.log({ error });
//Extracting / returning the response; If unsuccessfull we update the UI with the error
        return {
            status: 400,
            body: JSON.stringify({ error })
        }
    }
 */

    try {
        const { amount } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"]
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error })        
        };
    }
 };