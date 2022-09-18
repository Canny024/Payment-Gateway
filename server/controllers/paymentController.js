import { instance } from "../server.js";
import crypto from "crypto";
import niceInvoice from "nice-invoice";

// Function to create order

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);

  res.status(200).json({
    success: true,
    order,
  });
};

// Function for verifying and creating recipt

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const data = await instance.payments.fetch(razorpay_payment_id, { "expand[]": "card" });


  // Recipt makeing

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minu = date.getMinutes();
  let sec = date.getSeconds();
  let final = day + "-" + month + "-" + year + " at " + hours + ":" + minu + ":" + sec;
  let cardName;

  if (data.method === "card") {
    cardName = data.card.name;
  }
  else { cardName = "Gaurav"; }

  const invoiceDetail = {
    shipping: {
      name: cardName,
      address: "C3,01,city-side",
      city: "Warangal",
      state: "Telangana",
      country: "IND",
      postal_code: 506004,
      contact: data.contact,
    },
    items: [
      {
        item: "TICKET",
        description: "Tickets to attend the event.",
        quantity: (data.amount) / 50000,
        price: 500.00,
        tax: "0%"
      },
    ],
    subtotal: (data.amount) / 100,
    total: (data.amount) / 100,
    order_number: data.created_at,
    header: {
      company_name: "TEDxNITW",
      company_logo: "logo.png",
      company_address: "TEDxNITW, National Institute of Technology,Warangal,INDIA"
    },
    footer: {
      text: "To be used as ticket also!"
    },
    currency_symbol: "Rs.",
    date: {
      billing_date: final,
      due_date: "Already Paid",
    }
  };

  niceInvoice(invoiceDetail, 'recipt.pdf');


  // Verification

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  console.log("done");
  if (isAuthentic) {






    res.redirect(
      `http://localhost:3000/paymentsuccess`
    );



  } else {
    res.status(400).json({
      success: false,
    });
  }
};





