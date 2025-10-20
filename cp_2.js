function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}