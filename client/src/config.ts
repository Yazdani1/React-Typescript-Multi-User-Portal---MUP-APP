export const API_URL ="http://localhost:8080/api"


export const headerConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};