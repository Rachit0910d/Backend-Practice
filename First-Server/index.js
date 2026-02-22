const http = require("http");
const fs = require("fs");
const url = require("url");

const serverHandler = (req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()}: ${req.url}: ${req.method}  New request : \n`;

  const myUrl = url.parse(req.url, true);

  //   console.log(myUrl);

  fs.appendFile("text.txt", log, (err, data) => {
    if (err) throw err;
    console.log(log);
  });

  switch (myUrl.pathname) {
    case "/":
      if (req.method === "GET") res.end("Home page");
      break;

    case "/about":
      const userName = myUrl.query.myName;
      res.end(`hi ${userName}`);
      break;

    case "/search":
      const search = myUrl.query.search_query;
      res.end("Here are your result for: " + search);
      break;

    case "/signup":
      if (req.method === "GET") res.end("This is a signup form");
      else if (req.method === "POST") {
        //DB query
        res.end("Successful");
      }
      break;

    default:
      res.end("404 error found");
  }
};

const myServer = http.createServer(serverHandler);

// it will take a port and a call back function and that call back function will tell you that if everything is fine then console the msg
myServer.listen(8001, () => {
  console.log("Server started");
});
