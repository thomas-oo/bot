let webdriverio = require('webdriverio')
let commandLineArgs = require('command-line-args')
const optionDefinitions = [
  {name: 'url', type: String},
  {name: 'size', type: String},
  {name: 'dataDir', type: String}
]
const options = commandLineArgs(optionDefinitions)

const size = options.size
const url = options.url
const dataDir = options.dataDir

console.log({url: url, size: size})

let webdriverOptions = {
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--user-data-dir='+dataDir]
    }
  }
}
let browser = webdriverio.remote(webdriverOptions)

browser.init()
.url(url)
  .waitUntil(() => {
    return browser.isExisting('.exp-pdp-size-and-quantity-container')
  }, Number.MAX_SAFE_INTEGER)
  .waitUntil(() => {
    return browser.isVisible('.exp-pdp-size-and-quantity-container')
  }, Number.MAX_SAFE_INTEGER)
  .element('.exp-pdp-size-and-quantity-container').click()
  .elements('ul.nsg-form--drop-down--option-container.nsg-form--drop-down.exp-pdp-size-dropdown.exp-pdp-dropdown.two-column-dropdown *')
  .then(items => {
    var texts = []
    for (let item of items.value){
      var text = browser.elementIdText(item.ELEMENT)
      texts.push(text)
    }
    texts = Promise.all(texts)
    return Promise.all([texts, items.value])
  })
  .then(([texts, items]) => {
    let index;
    for(let text of texts){
      if(text.value.includes(size)){
        index = texts.indexOf(text)
      }
    }
    return browser.elementIdClick(items[index].ELEMENT)
  })
  //.click()
  .element('#buyingtools-add-to-cart-button').click()
  .waitUntil(()=> {
    return browser.isExisting('a.checkout-button.nsg-button.nsg-grad--nike-orange')
  }, Number.MAX_SAFE_INTEGER)
  .waitUntil(()=> {
    return browser.isVisible('a.checkout-button.nsg-button.nsg-grad--nike-orange')
  }, Number.MAX_SAFE_INTEGER)
  .element('a.checkout-button.nsg-button.nsg-grad--nike-orange').click()
  .waitUntil(() => {
    return browser.url().then(function(url) {
      return url.indexOf('checkout') > -1;
    });
    }, Number.MAX_SAFE_INTEGER)
  .waitUntil(() => {
    return browser.isExisting('button.orange.lock')
  })
  .element('button.orange.lock').click()
.catch((err) => {
  console.log(err)
})