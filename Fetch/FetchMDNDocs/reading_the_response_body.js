// The Response interface provides a number of methods to retrieve the entire body contents in a variety of different formats:

// Response.arrayBuffer()
// Response.blob()
// Response.formData()
// Response.json()
// Response.text()
// These are all asynchronous methods, returning a Promise which will be fulfilled with the body content.

// In this example, we fetch an image and read it as a Blob, which we can then use to create an object URL:

const image = document.querySelector("img");

const url = "flowers.jpg";

async function setImage() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  } catch (e) {
    console.error(e);
  }
}
