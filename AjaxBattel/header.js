// set request headers
const headers = new Headers();
headers.set("X-Requested-With", "ajax");
headers.append("Content-Type", "text/xml");

const request = new Request("/service", {
  method: "POST",
  headers,
});

const res = await fetch(request);

// examine response headers
console.log(res.headers.get("Content-Type"));
