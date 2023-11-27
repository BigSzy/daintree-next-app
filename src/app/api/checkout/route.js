import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY);

export async function POST(request) {
  const body = await request.json();

  //     try {
  //       console.log(body);

  //       const stripeResponse = await fetch(
  //         `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${body.token}`,
  //         { method: "POST" }
  //       );
  //       const recaptchaPayload = await racaptchaResponse.json();

  //       if (recaptchaPayload.success) {
  //         console.log("Recaptcha successful");
  //         const response = await sesClient.send(sendEmailCommand);
  //         const data = { message: "Message Sent" };
  //         return NextResponse.json(data);
  //       } else {
  //         console.log(recaptchaPayload);
  //         const data = { message: "Recaptcha failed" };
  //         return NextResponse.json(data);
  //       }
  //     } catch (e) {
  //       console.error("Failed to send email.");
  //       console.log(e);
  //       return e;
  //     }

  const YOUR_DOMAIN = "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1OH9oPFBmm2hwwc0wcCnyzjw",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });

  console.log(session.url)

  return new NextResponse(JSON.stringify(session.url));
}
