let container = document.getElementById('specificProductDisplay');

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    fetchSpecificProduct(productId);
});

function fetchSpecificProduct(productId) {
    let APIlink = `https://fakestoreapi.com/products/${productId}`;
    fetch(APIlink)
    .then(response => response.json())
    .then(product => {
        const detailsHTML = `
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <img src="${product.image}" class="img-fluid" alt="Product Image">
                        </div>
                        <div class="col-12 col-md-6 col-lg-8 product-details-container">
                            <div class="product-details">
                                <h5 class="title-details-container">${product.title}</h5>
                                <div class="description-details">
                                    <p>${product.description}</p>
                                </div>
                                <div class="price-details">
                                    <p class="fw-bold">${product.price} €</p>
                                </div>
                                <div class="purchase-button-details">
                                    <button class="btn btn-primary" id="purchase-btn">Purchase It</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = detailsHTML;

        document.getElementById('purchase-btn').addEventListener('click', function(){
            window.location.href = "OrderForm.html";

            const productDetails = {
                title: product.title,
                description: product.description,
                price: product.price
            };
            localStorage.setItem('productDetails', JSON.stringify(productDetails));
        })
    })
    .catch(error => console.error('Error:', error));
}

//////version 1(Tamerlan)//////////
/*
let container = document.getElementById('specificProductDisplay');

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    fetchSpecificProduct(productId);
});

function fetchSpecificProduct(productId) {
    let APIlink = `https://fakestoreapi.com/products/${productId}`;
    fetch(APIlink)
    .then(response => response.json())
    .then(product => {
        const detailsHTML = `
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <img src="${product.image}" class="img-fluid" alt="Product Image">
                        </div>
                        <div class="col-12 col-md-6 col-lg-8 product-details-container">
                            <div class="product-details">
                                <h5>${product.title}</h5>
                                <p class="description-padding"${product.description}</p>
                                <p class="fw-bold">${product.price} €</p>
                                <button class="btn btn-primary">Purchase It</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = detailsHTML;
    })
    .catch(error => console.error('Error:', error));
}


<h5 class="title-details-container">${product.title}</h5>
                                <div class="description-details">
                                    <p>${product.description}</p>
                                </div>
                                <div class="price-details">
                                    <p class="fw-bold">${product.price} €</p>
                                </div>
                                <div class="purchase-button-details">
                                    <button class="btn btn-primary">Purchase It</button>
                                </div>
*/