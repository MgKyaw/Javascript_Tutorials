const request = new Request("/service", { method: "POST" });

console.log(request.url);
console.log(request.method);
console.log(request.credentials);

// FormData representation of body
const fd = await request.formData();

// clone request
const req2 = request.clone();

const res = await fetch(request);
