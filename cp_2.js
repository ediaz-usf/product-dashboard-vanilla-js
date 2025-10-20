// define displayProducts function
function displayProducts(products) {
    const productContainer = document.querySelector('#product-container');

    for (let i = 0; i < 5; i++) {
        const product = products[i];
        const item = document.createElement('div');
        item.className = 'product-card';
        item.innerHTML = `
            <h2>${product.fields.name}</h2>
            <img src="${product.fields.image[0].url}" width="100"/>
            <p>${(product.fields.price / 100)}</p>
        `;
        productContainer.appendChild(item);
    }
}

// define error handling function
function handleError(err) {
    console.log('An error occurred:');
    console.log(err);
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

// call the functions
fetchProductsThen();
fetchProductsAsync();