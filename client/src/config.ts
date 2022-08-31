// export const API_URL ="http://localhost:8080/api"

export const API_URL ="https://node-js-multi-user-portal-mup-aws-s3-aws-ses.vercel.app/api";

export const headerConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};
