const request = new Request("/service", { method: "POST" });

console.log(request.url);
console.log(request.method);
console.log(request.credentials);

// // FormData representation of body
// const fd = await request.formData();

// clone request
const req2 = request.clone();

const res = await fetch(request);

console.log(res.ok); // true/false
console.log(res.status); // HTTP status
console.log(res.url);

const json = await res.json(); // parses body as JSON
const text = await res.text(); // parses body as text
const fd = await res.formData(); // FormData representation of body
