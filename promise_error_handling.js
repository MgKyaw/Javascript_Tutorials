function Promise(executor) {
    // invoke the executor function
    try { executor(); }
    catch(e) { reject(e); }
}

var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Sorry");
    }, 3000);
});