function validateOrderForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postal-code').value;
    const city = document.getElementById('city').value;
  
    let isValid = true;
    const errorMessages = [];
  
    if (name.length < 2 || name.length > 50) {
      isValid = false;
      errorMessages.push('Namnet måste vara mellan 2 och 50 tecken långt.');
    }
  
    if (!email.includes('@') || email.length > 50) {
      isValid = false;
      errorMessages.push('E-postadressen måste innehålla "@" och vara högst 50 tecken lång.');
    }
  
    if (!/^[0-9()+-]{1,50}$/.test(phone)) {
      isValid = false;
      errorMessages.push('Telefonnummer får innehålla siffror, bindestreck och parenteser, och vara högst 50 tecken långt.');
    }
  
    if (address.length < 2 || address.length > 50) {
      isValid = false;
      errorMessages.push('Gatuadressen måste vara mellan 2 och 50 tecken lång.');
    }
  
    if (!/^\d{5}$/.test(postalCode)) {
      isValid = false;
      errorMessages.push('Postnumret måste bestå av 5 siffror.');
    }
  
    if (city.length < 2 || city.length > 50) {
      isValid = false;
      errorMessages.push('Orten måste vara mellan 2 och 50 tecken lång.');
    }
  
    if (!isValid) {
      alert('Det uppstod följande fel:\n\n' + errorMessages.join('\n'));
    }
  
    return isValid;
  }