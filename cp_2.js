// define displayProducts function
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    for (let product of products) {

    }
}

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
        if (!response.ok) {
            throw new Error('ERROR!');
        }
        const products = await response.json();
    
        displayProducts(products);
    } catch (err) {
        handleError(err);
    }
}

fetchProductsAsync()