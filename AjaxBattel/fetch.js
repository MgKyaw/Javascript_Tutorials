fetch("/service", { method: "GET" })
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:", err));

