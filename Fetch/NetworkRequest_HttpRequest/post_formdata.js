let formData = new FormData([form]); // creates an object, optionally fill from <form>
formData.append(name, value); // appends a field

// We create it, optionally fill from a form, append more fields if needed, and then:

// xhr.open('POST', ...) – use POST method.
// xhr.send(formData) to submit the form to the server.
