import request from "superagent";

const serverURL = "http://localhost:3000/api/v1";

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body);
}
// ***   ***   ***

export function getCat() {
  return request
    .get("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.body);
}

export function getNasa() {
  return request.get("/api/v1/nasa").then((response) => response.body);
}
