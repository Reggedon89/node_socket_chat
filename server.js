const http = require("http");
let express = require("express");
let app = express();
const hostname = "127.0.0.1";
const port = 3000;
app.use(express.static(__dirname));

let server = app.listen(3000, () => {
  console.log("server is listening to ", server.address().port);
});
