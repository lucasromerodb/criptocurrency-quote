class Quoting {
  async getCurrencyAPI() {
    const urlGetCurrency = await fetch('https://api.coinmarketcap.com/v1/ticker/');
    const currency = await urlGetCurrency.json();
    return {currency};
  }

  async getValues(selectedCurrency, selectedCryptoCurrency) {
    const urlConverter = await fetch(`https://api.coinmarketcap.com/v1/ticker/${selectedCryptoCurrency}/?convert=${selectedCurrency}`);
    const result = await urlConverter.json();
    return {
      result
    }
  }
}
