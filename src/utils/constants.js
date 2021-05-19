const HASURA_GRAPHQL_ENGINE_HOSTNAME = "hasurasetup.herokuapp.com";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = "https://hasurasetup.herokuapp.com/v1/graphql";

export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const authClientId = "8wObeNBmpRjP3COxaZeWfdcS2O9WtzbW";
export const authDomain = "newone123.us.auth0.com";
export const callbackUrl = `http://localhost:3000/callback`;
//https://auth0-hasura-demo.herokuapp.com/console/data/schema/public/tables/article_tag/browse