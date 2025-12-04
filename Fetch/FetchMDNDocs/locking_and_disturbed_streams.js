async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result1 = await response.json();
    const result2 = await response.json(); // will throw
  } catch (error) {
    console.error(error.message);
  }
}
