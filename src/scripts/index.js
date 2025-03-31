const productsData = [
    {
        image: "src/assets/images/Product.png",
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        price: "R$79,90",
        installment: "10x de R$ 7,90",
        discount: "10% OFF"
    },
    {
        image: "src/assets/images/Product.png",
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        price: "R$79,90",
        installment: "10x de R$ 7,90",
        discount: "10% OFF"
    },
    {
        image: "src/assets/images/Product.png",
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        price: "R$79,90",
        installment: "10x de R$ 7,90",
        discount: "10% OFF"
    },
    {
        image: "src/assets/images/Product.png",
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        price: "R$79,90",
        installment: "10x de R$ 7,90",
        discount: "10% OFF"
    },
    {
        image: "src/assets/images/Product.png",
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        originalPrice: "R$ 100,00",
        price: "R$79,90",
        installment: "10x de R$ 7,90",
        discount: "10% OFF"
    }
]

const productContainer = document.querySelectorAll('[data-product-id]');

function generateProductCard(product) {
    return `
      <div class="flex-1 max-w-60 border border-[#DDDDDD] rounded-[10px]">
        <div class="relative mb-4">
          <div class="absolute top-0 left-0 text-[10px] text-white font-bold rounded-sm px-1 py-[1px] z-10">
            ${product.discount}
          </div>
          <img class="z-0" src="${product.image}" alt="Produto">
        </div>
  
        <div class="p-2">
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
  
          <p class="text-xs mb-4">
            Ou em até <span class="font-bold">${product.installment}</span>
          </p>
  
          <button class="w-full text-sm text-white font-bold bg-blue-primary py-[10px] rounded-lg">Comprar</button>
        </div>
      </div>
    `
}

productContainer.forEach(container => {
    productsData.forEach(product => {
        container.innerHTML += generateProductCard(product);
    })
})

document.getElementById("dropdownButton").addEventListener("click", () => {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
})

