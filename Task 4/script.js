const http = require("http"); // import module
// npm install nunjucks
const url = require("url");
const nunjucks = require("nunjucks");
// I create temp.html file => placeholder file
// I create data.json file => some data Mock Dababase

const fs = require("fs"); // import file system module
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8"); // __dirname => directory path
const posts = JSON.parse(data); // convert json string to JavaScript object
const template = fs.readFileSync("./temp.html", "utf-8");

// server works Async => take callback function
const server = http.createServer((req, res) => {
  console.log(req.url);
  const { query, pathname } = url.parse(req.url, true);

  // Routing
  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const html = posts
      .map((p) => nunjucks.renderString(template, { ...p, isDetail: false }))
      .join("\n");
    res.end(html);
  } else if (pathname === "/posts") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    // a specific post
    // const post = posts[query.id]; // Error

    // Correctly find the post by ID
    const post = posts.find((p) => p.id === Number(query.id));

    const out = nunjucks.renderString(template, { ...post, isDetail: true });
    res.end(out);
    // go to http://localhost:8000/posts?id=5  to see a specific post
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
    res.data(JSON.stringify(posts));
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h2>Page NOT found</h2>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listen to request on port 8000");
});
// go to the browser and search => http://localhost:8000/
// go to Network section and look at the header, body , response
// in Network Section will see many assets resources are downloaded when you make a request
