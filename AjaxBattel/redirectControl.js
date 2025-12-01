const res = await fetch("/service", {
  method: "GET",
  redirect: "follow",
});

// redirect can be set to:

// 'follow' - follow all redirects (the default)
// 'error' - abort (reject) when a redirect occurs
// 'manual' - return the response for manual handling
