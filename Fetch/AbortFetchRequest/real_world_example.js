var controller = new AbortController();
var signal = controller.signal;

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
        .then(response => {
            console.log('success!');
        })
        .catch(error => {
            console.log('API failure' + error);
        });

    return () => {
        // Abort if the component is unmounted.
        controller.abort();
    }
}, []);
