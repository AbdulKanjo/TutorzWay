const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://myapidomain.com"
    : process.env.REACT_APP_SERVER;

export default PAYMENT_SERVER_URL;
