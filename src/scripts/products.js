import { productsData } from '../assets/data/products.js'

const productContainer = document.querySelectorAll('[data-product-id]')

function generateProductCard(product) {
  return `
    <div class="swiper-slide max-w-60 xl:max-w-72 w-full flex flex-col items-center border border-gray-300 rounded-lg py-1 px-2">
      <div class="relative w-full mb-4">
          <span
              class="absolute top-2 left-0 text-[10px] bg-blue-900 text-white uppercase font-bold rounded-sm px-2 py-1">Novo</span>
          <img class="w-full rounded-lg" src="${product.image}" alt="Produto">
      </div>

      <h3 class="text-sm mb-1">${product.title}</h3>
      <div class="flex items-center gap-2 mb-1">
          <div>
              <p class="text-xs line-through">${product.originalPrice}</p>
              <p class="text-base font-bold">${product.price}</p>
          </div>

          <div>
              <span class="text-white text-xs bg-[#5EC0BE] rounded-sm px-2 py-1">${product.discount}</span>
          </div>
      </div>

      <p class="text-xs mb-4">Ou em até <span class="font-bold">${product.installment}</span></p>
      <button class="w-full text-sm text-white font-bold bg-blue-600 py-2 rounded-lg cursor-pointer">Comprar</button>
    </div>    
  `
}

productContainer.forEach(container => {
  productsData.forEach(product => {
    container.innerHTML += generateProductCard(product)
  })
})



