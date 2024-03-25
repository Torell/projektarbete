


function submitOrder(event) {
    event.preventDefault(); 
  
    
    if (!validateOrderForm()) {
      return; 
    }
  
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postal-code').value;
    const city = document.getElementById('city').value;
  
    
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        address: address,
        postalCode: postalCode,
        city: city
      })
    })
    .then(response => {
      if (response.ok) {
        window.location.href = "confirmation.html";
        
        alert('Tack för din beställning!');
      } else {
        
        alert('Det uppstod ett fel. Försök igen senare.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Det uppstod ett fel. Försök igen senare.');
    });
    
  }
  