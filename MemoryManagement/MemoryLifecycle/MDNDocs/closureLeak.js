let myVar = null;

function replaceMyVar() {
  let previousVar = myVar;
  
  const uselessFunc = function() {
    if (previousVar) {
      console.log('hello!');
    }
  };
  myVar = {
    largeString: new Array(10000).join(),
    uselessMethod() {
      console.log('hello again!');
    }
  };
};

setInterval(replaceMyVar, 1000);
