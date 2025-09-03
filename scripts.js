const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonsumAll = document.querySelector('.sum-all')
const buttonfilterAll = document.querySelector('.filter-all')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',
         { style: 'currency',
         currency: 'BRL' });

         return newValue
}


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {

        myLi += `
  <li>
   <img class="x-salada" src=${product.src} alt="X-salada">
   <p>${product.name}</p>
   <p class="item-price">R$ ${formatCurrency(product.price)}</p>
  </li>

`
    })

    list.innerHTML = myLi

}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrices)

    console.log(newPrices)

}

function sumAll() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
    <p>Ovalor total dos itens é R$ ${totalValue} </p>
    </li>
    `

    console.log(totalValue)

}
function filterAll() {
    const veganfilter = menuOptions.filter((product) => product.vegan === true)
    showAll(veganfilter)

}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonsumAll.addEventListener('click', sumAll)
buttonfilterAll.addEventListener('click', filterAll)
