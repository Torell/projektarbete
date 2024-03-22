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
                <div class="col-sm-12 col-md-6 col-lg-3" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-body">
                        <h5>${product.title}</h5>
                        <p>${product.description}</p>
                        <p class="fw-bold">${product.price} €</p>
                        <button class="btn btn-primary">Purchase It</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += detailsHTML;
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
                <div class="col-sm-12 col-md-6 col-lg-3" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-body">
                        <h5>${product.title}</h5>
                        <p>${product.description}</p>
                        <p class="fw-bold">${product.price} €</p>
                        <button class="btn btn-primary">Purchase It</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += detailsHTML;
    })
    .catch(error => console.error('Error:', error));
}
*/