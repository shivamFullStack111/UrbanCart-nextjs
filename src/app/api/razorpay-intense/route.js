import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZ_KEYID,
  key_secret: process.env.RAZ_KEYSECRET,
});

export async function POST(req) {
  try {
    const { amount } = await req.json();

    var options = {
      amount: amount,
      currency: "INR",
      receipt: "rcp1",
    };
    let order;
    console.log(
      process.env.RAZ_KEYID,
      "------------",
      process.env.RAZ_KEYSECRET
    );
    try {
      order = await razorpay.orders.create(options);
    } catch (error) {
      console.log(error.message);
    }
    console.log("order:-", order);
    return new Response(
      JSON.stringify({ success: true, orderId: order.id, order })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
