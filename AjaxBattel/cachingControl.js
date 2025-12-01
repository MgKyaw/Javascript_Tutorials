const res = await fetch("/service", {
  method: "GET",
  cache: "default",
});

// cache can be set to:

// 'default' - the browser cache is used if there’s a fresh (unexpired) match. If not, the browser makes a conditional request to check whether the resource has changed and makes a new request if necessary
// 'no-store' - the browser cache is bypassed, and the network response will not update it
// 'reload' - the browser cache is bypassed, but the network response will update it
// 'no-cache' - similar to 'default' except a conditional request is always made
// 'force-cache' - the cached version is used if possible, even when it’s stale
// 'only-if-cached' - identical to force-cache except no network request is made