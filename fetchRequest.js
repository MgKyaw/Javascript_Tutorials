fetch('https://api.github.com/users/swapnilbangare')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
    