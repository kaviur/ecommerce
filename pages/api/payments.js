const paypal = require('@paypal/checkout-server-sdk');
import { useSelector } from 'react-redux';
  
// Creating an environment
let clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

//const {items} = useSelector(state=>state.cart)


export default async function pay(req,res){
    if(req.method === 'POST'){
        const request = new paypal.orders.OrdersCreateRequest()
        request.requestBody({
            intent: "CAPTURE",
            purchase_units:[
                {
                    amount: {
                        currency_code: "USD",
                        value: "1",
                    },
                },
            ],
        });
        const response = await client.execute(request);

        return res.json({ id: response.result.id});
    }
}