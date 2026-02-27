const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require('path'); // to work with file paths


// nginX servers are used to serve static files and they are very fast and efficient in doing that. They are also used as a reverse proxy server to forward requests to other servers. They are also used as a load balancer to distribute the load among multiple servers. They are also used as a caching server to cache the responses from the backend servers. They are also used as a security server to protect the backend servers from attacks. They are also used as a SSL termination server to terminate the SSL connections from the clients and forward the requests to the backend servers in plain HTTP. They are also used as a WebSocket server to handle WebSocket connections from the clients and forward the requests to the backend servers. They are also used as a HTTP/2 server to handle HTTP/2 connections from the clients and forward the requests to the backend servers.
const serverHandler = (req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  console.log(__dirname);

  const extName = String(path.extname(filePath).toLowerCase());

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
  };

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // means file not found
        res.writeHead(404, { "Content-Type": "text/html" }); // means file not found
        res.end("<h1>404 Not Found</h1>", "utf-8");
      }
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(data, "utf-8");
    }
  });

  // if (req.url === "/favicon.ico") return res.end();

  // const log = `${Date.now()}: ${req.url}: ${req.method}  New request : \n`;

  // const myUrl = url.parse(req.url, true);

  // //   console.log(myUrl);

  // fs.appendFile("text.txt", log, (err, data) => {
  //   if (err) throw err;
  //   console.log(log);
  // });

  // switch (myUrl.pathname) {
  //   case "/":
  //     if (req.method === "GET") res.end("Home page");
  //     break;

  //   case "/about":
  //     const userName = myUrl.query.myName;
  //     res.end(`hi ${userName}`);
  //     break;

  //   case "/search":
  //     const search = myUrl.query.search_query;
  //     res.end("Here are your result for: " + search);
  //     break;

  //   case "/signup":
  //     if (req.method === "GET") res.end("This is a signup form");
  //     else if (req.method === "POST") {
  //       //DB query
  //       res.end("Successful");
  //     }
  //     break;

  //   default:
  //     res.end("404 error found");
  // }
};

const myServer = http.createServer(serverHandler);

// it will take a port and a call back function and that call back function will tell you that if everything is fine then console the msg
myServer.listen(9001, () => {
  console.log(`Server started at: http://localhost:9001`);
});
