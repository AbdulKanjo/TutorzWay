const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_YJbP03aSX1CBvSeRIWVkkQ15"
    : "pk_test_YJbP03aSX1CBvSeRIWVkkQ15";

export default STRIPE_PUBLISHABLE;
