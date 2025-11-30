fetch("/service", { method: "GET" })
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:", err));

try {
  const res = await fetch("/service", { method: "GET" }),
    json = await res.json();

  console.log(json);
} catch (err) {
  console.error("error:", err);
}
