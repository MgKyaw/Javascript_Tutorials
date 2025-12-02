const xhr = new XMLHttpRequest();

// progress event
xhr.upload.onprogress = (p) => {
  console.log(Math.round((p.loaded / p.total) * 100) + "%");
};
