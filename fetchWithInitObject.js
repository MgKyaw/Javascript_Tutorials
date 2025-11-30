let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');
let initObject = {
    method: 'GET', headers: reqHeader,
};

fetch('https://api.github.com/users/swapnilbangare', initObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
    