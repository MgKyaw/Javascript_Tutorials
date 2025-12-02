const xhr = new XMLHttpRequest();

// progress event
xhr.upload.onprogress = (p) => {
  console.log(Math.round((p.loaded / p.total) * 100) + "%");
};

// The event handler is passed an object with three properties:

// lengthComputable - set true if the progress can be calculated
// total - the total amount of work - or Content-Length - of the message body
// loaded - the amount of work - or content - completed so far
// The Fetch API does not offer any way to monitor upload progress.
