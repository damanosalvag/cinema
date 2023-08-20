const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


const resolveUrl = (data) => {
    const { page, endpoint } = data;
    const url = `${
      BASE_URL + endpoint
    }?api_key=${API_KEY}&language=en-US&page=${page}`;
    return url
}

export const fetchData = async (data) => {
    const url = resolveUrl(data);
    const response = await fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    return response;
}
