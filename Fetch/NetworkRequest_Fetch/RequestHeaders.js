let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
