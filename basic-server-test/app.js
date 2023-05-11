const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greetings my dude</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input name='username' type='text'><button type='submit'>Create User</button></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "users") {
    res.write("<html>");
    res.write("<head><title>Greetings my dudes</title></head>");
    res.write("<body><ul><li>User Juan</li><li>User Toi</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000);
