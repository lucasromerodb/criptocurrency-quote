class Ui {
  constructor() {
    this.init();
  }

  init() {
    this.buildSelect();
  }

  buildSelect() {
    quoting.getCurrencyAPI()
      .then(data => {
        const currencyArray = data.currency;
        const selecTag = document.getElementById('criptomoneda');

        currencyArray.forEach(currencyItem => {
          const optionTag = document.createElement('option');
          optionTag.value = currencyItem.id;
          optionTag.appendChild(document.createTextNode(currencyItem.name))
          selecTag.appendChild(optionTag);
        });


      })
      .catch(error => console.log(error));
  }

  showMessage(msg, classes) {
    const div = document.createElement('div');
    div.className = classes;
    div. appendChild(document.createTextNode(msg));
    const divMsg = document.querySelector('.mensajes');
    divMsg.appendChild(div);
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 2000);
  }

  showResult(conversion, selectedCurrency) {


    const prevConversion = document.querySelector('#resultado > div');
    
    if (prevConversion) {
      prevConversion.remove();
    }

    this.showSpinner();

    const tagCurrency = `price_${selectedCurrency}`;
    const tagValue = conversion[tagCurrency];
    const hour = new Date(conversion.last_updated * 1000);
    const updatedHour = `${hour.getHours()}:${hour.getMinutes()}`;

    let templateHTML = '';
    templateHTML += `
      <div class="card cyan darken-3">
        <div class="card-content white-texw">
          <span class="card-title">Resultado:</span>
          <p>El precio de ${conversion.name} a moneda ${selectedCurrency.toUpperCase()} es de ${tagValue}</p>
          <p>Actualización en la última hora: ${conversion.percent_change_1h}%<p>
          <p>Actualización en la último día: ${conversion.percent_change_24h}%<p>
          <p>Actualización en la última semana: ${conversion.percent_change_7d}%<p>
          <p>Última actualización: ${updatedHour}<p>

        </div>
      </div>
    `

    setTimeout(function () {
      document.getElementById('resultado').innerHTML = templateHTML;
      document.querySelector('.spinner img').remove();
    }, 2000);
  }

  showSpinner() {
    const spinnerGif = document.createElement('img');
    spinnerGif.src = 'img/spinner.gif';
    document.querySelector('.spinner').appendChild(spinnerGif);
  }
}
