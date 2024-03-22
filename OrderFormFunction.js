


function submitOrder(event) {
    event.preventDefault(); 
  
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    
    
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        address: address
      })
    })
    .then(response => {
      if (response.ok) {
       
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
  