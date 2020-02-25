import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data:{
      amount: 0,
      conversionRates: {},
      currency: "",
      convertedCurrency: "",
      converted: 0
    },
    mounted(){
      this.fetchConversionRates()
    },
    methods:{
      fetchConversionRates: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.conversionRates = data.rates)
      },
      convertCurrency: function () {
        this.converted = Math.floor(this.amount * this.conversionRates[this.currency])
        this.convertedCurrency = this.currency
      }

    }

  })

})
