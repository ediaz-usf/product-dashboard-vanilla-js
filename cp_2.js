// define function to retrieve data using .then() method
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

// define function to retrieve data using async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');

        const products = await response.json();
    
        displayProducts(products);
    } catch (err) {
        handleError(err);
    }
}

fetchProductsAsync()