import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert2";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import PAYMENT_SERVER_URL from "../../constants/server";
import logo from "./log.jpg";

const CURRENCY = "USD";

const fromUsdToCent = amount => parseInt(amount * 100, 10);

const successPayment = data => {
  swal({
    position: "top-end",
    type: "success",
    title: "Your Payment has been received",
    showConfirmButton: false,
    timer: 1600
  });
};

const errorPayment = data => {
  alert("Payment Error");
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUsdToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUsdToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    panelLabel="Pay for Tutor"
    image={logo}
  />
);

export default Checkout;
