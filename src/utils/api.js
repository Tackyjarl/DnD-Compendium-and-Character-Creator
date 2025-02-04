// const BASE_URL = "http:localhost:5173";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export { checkResponse };
