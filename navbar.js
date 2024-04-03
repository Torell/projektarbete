document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('navbarPlaceholder').innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Telafictus Mercatura</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor04">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="allproducts.html" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="allproducts.html">All Products</a>
            <a class="dropdown-item" href="electronics.html">Electronics</a>
            <a class="dropdown-item" href="jewelery.html">Jewelery</a>
            <a class="dropdown-item" href="mensclothing.html">Mens's Clothing</a>
            <a class="dropdown-item" href="womensclothing.html">Womens's Clothing</a>
            
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contactus.html">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="aboutus.html">About</a>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;
});