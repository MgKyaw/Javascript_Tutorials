const xhr = new XMLHttpRequest();
xhr.open("GET", "/service");

// state change event
xhr.onreadystatechange = () => {
  // is request complete?
  if (xhr.readyState !== 4) return;

  if (xhr.status === 200) {
    // request successful
    console.log(JSON.parse(xhr.responseText));
  } else {
    // request not successful
    console.log("HTTP error", xhr.status, xhr.statusText);
  }
};

// start request
xhr.send();
