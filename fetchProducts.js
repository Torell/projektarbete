let container = document.getElementById('productDisplay');

fetch('https://fakestoreapi.com/products')
.then(response => response.json()) // Corrected: Call .json() on the response object
.then(data => {
    data.forEach(product => {
        const cardHTML = `
            <div class="col-sm-12 col-md-6 col-lg-3 style="width: 18rem;"> 
                <div class="card border-white">
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        ${product.price} €
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
})
.catch(error => console.error('Error:', error));
