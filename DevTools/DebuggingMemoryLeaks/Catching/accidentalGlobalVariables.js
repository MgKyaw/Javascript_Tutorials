function getWork() {
  this.work = "I am Memory leak";
}
// The this here refers to window object and hence this variable will be created in the window.
getWork();
