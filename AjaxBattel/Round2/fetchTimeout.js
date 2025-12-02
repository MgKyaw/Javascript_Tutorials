function fetchTimeout(url, init, timeout = 5000) {
  return new Promise((resolve, reject) => {
    fetch(url, init).then(resolve).catch(reject);
    setTimeout(reject, timeout);
  });
}

// Alternatively, you could use Promise.race():

Promise.race([
  fetch("/service", { method: "GET" }),
  new Promise((resolve) => setTimeout(resolve, 5000)),
]).then((res) => console.log(res));
