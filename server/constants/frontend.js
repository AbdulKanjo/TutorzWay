const FRONTEND_DEV_URLS = [process.env.REACT_APP_CLIENT];

const FRONTEND_PROD_URLS = [
  "https://www.bugstuff.online",
  "https://bugstuff.online"
];

module.exports =
  process.env.NODE_ENV === "production"
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;
