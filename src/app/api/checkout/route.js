import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET_KEY);
// Price IDs from Stripe product catalogue
const map = new Map([
    [1, "price_1OH9RrFBmm2hwwc0ESLgWZWr"],
    [2, "price_1OH9ViFBmm2hwwc0WqOeTZFB"],
    [3, "price_1OH9WaFBmm2hwwc0vzsHdK8c"],
    [4, "price_1OH9Y4FBmm2hwwc0Izux1cTL"],
    [5, "price_1OH9Z5FBmm2hwwc0pt8Cb9dJ"],
    [6, "price_1OH9aAFBmm2hwwc0IT624NcV"],
    [7, "price_1OH9bPFBmm2hwwc0H6iMh606"],
    [8, "price_1OH9cKFBmm2hwwc0gwwHXTOr"],
    [9, "price_1OH9dzFBmm2hwwc0yyEYVpUc"],
    [10, "price_1OH9ewFBmm2hwwc0lkE9oU1w"],
    [11, "price_1OH9fqFBmm2hwwc0fw7MsfFf"],
    [12, "price_1OH9gXFBmm2hwwc0MAqAyymX"],
    [13, "price_1OIrgAFBmm2hwwc0Qpp7TiXG"],
    [14, "price_1OH9iUFBmm2hwwc0LjZ9ABjW"],
    [15, "price_1OH9kiFBmm2hwwc0uOKZpBY9"],
    [16, "price_1OH9lOFBmm2hwwc0u8rCnC7O"],
    [17, "price_1OH9mAFBmm2hwwc0AYgcXBJ1"],
    [18, "price_1OH9mrFBmm2hwwc0WD5Bn37G"],
    [19, "price_1OH9nUFBmm2hwwc0UJ5Zr4qM"],
    [20, "price_1OH9oPFBmm2hwwc0wcCnyzjw"],

])

export async function POST(request) {
  const body = await request.json();

  const lineItems = body.map(p => {return{
    price:map.get(p.id),
    quantity:p.qty
  }})

  const domain = "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: `${domain}/success`,
    cancel_url: `${domain}/cancel`,
  });

  return new NextResponse(JSON.stringify(session.url));
}
