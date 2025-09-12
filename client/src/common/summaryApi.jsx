const backendUrl = import.meta.env.VITE_BACKEND_URL;

const summaryApi = {
  login: {
    url: `${backendUrl}/api/auth/login`,
    method: "POST",
  },
  signup: {
    url: `${backendUrl}/api/auth/signup`,
    method: "POST",
  },
};

export default summaryApi;