// instanciar clases
const quoting = new Quoting();
const ui = new Ui();
const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form enviado');

  const currency = document.getElementById('moneda');
  const selectedCurrency = currency.options[currency.selectedIndex].value;
  const cryptoCurrency = document.getElementById('criptomoneda');
  const selectedCryptoCurrency = cryptoCurrency.options[cryptoCurrency.selectedIndex].value;
  console.log(selectedCurrency);
  console.log(selectedCryptoCurrency);

  if (selectedCurrency === '' || selectedCryptoCurrency === '') {
    ui.showMessage('Ambos campos son obligatorios', 'deep-orange darken-4 card-panel');
  } else {
    //tomar valores del select y ejecutar la cotizacion
    quoting.getValues(selectedCurrency, selectedCryptoCurrency)
      .then(data => {
        ui.showResult(data.result[0], selectedCurrency.toLowerCase());
      })
  }

})
