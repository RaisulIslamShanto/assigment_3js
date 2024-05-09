const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  //   res.setHeader("content-type", "text/plain");
  res.setHeader("content-type", "text/html");

  res.write("hello , raisul");
  res.write("<p>hello , raisul</p>");
  res.write("<p>hello , mahmud</p>");
  res.end();
});

server.listen(5000, "localhost", () => {
  console.log("listening for requests on port 5000");
});
