const server = require("./server");
const path = require("path");

const port = process.env.PORT || 3000;

const envPath = path.join(__dirname, ".env");
require("dotenv").config({ path: envPath });

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Listening on port", port);
});
