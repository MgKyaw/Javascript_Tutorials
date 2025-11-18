function getRequest(url, callback) {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(e) {
      if (this.state === 4 && this.status === 200) {
         callback(this.responseText);
      }
   }
   xhr.open('GET', url, false);
   xhr.send();
}

function getJSON(url, callback, errorCallback) {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(e) {
      if (this.state === 4 && this.status === 200) {
         try {
            var json = JSON.parse(this.responseText);
            callback(json);
         }
         catch (e) {
            errorCallback(e);
         }
      }
   }
   xhr.open('GET', url, false);
   xhr.send();
}
