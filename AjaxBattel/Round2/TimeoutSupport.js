const xhr = new XMLHttpRequest();
xhr.timeout = 5000; // 5-second maximum
xhr.ontimeout = () => console.log("timeout");
