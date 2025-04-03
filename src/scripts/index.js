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

const productContainer = document.querySelectorAll('[data-product-id]')

function generateProductCard(product) {
  return `
      <div class="max-w-60 border border-[#DDDDDD] rounded-[10px]">
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
    container.innerHTML += generateProductCard(product)
  })
})


// ------------------------------------------

const departments = [
  {
    name: "Departamento1",
    categories: ["Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1",
      "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1",
      "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1", "Categoria1"
    ]
  },
  {
    name: "Departamento2",
    categories: ["Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2",
      "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2",
      "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2", "Categoria2"
    ]
  },
  {
    name: "Departamento3",
    categories: ["Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3",
      "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3",
      "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3", "Categoria3"
    ]
  },
  {
    name: "Departamento4",
    categories: ["Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4",
      "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4",
      "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4", "Categoria4"
    ]
  },
  {
    name: "Departamento5",
    categories: ["Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5",
      "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5",
      "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5", "Categoria5"
    ]
  },
  {
    name: "Departamento6",
    categories: ["Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6",
                "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6",
                "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6", "Categoria6"
    ]
  },
  {
    name: "Departamento7",
    categories: ["Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7",
                "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7",
                "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7", "Categoria7"  
    ]
  },
  {
    name: "Departamento8",
    categories: ["Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8",
                "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8",
                "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8", "Categoria8"
    ]
  },
  {
    name: "Departamento9",
    categories: ["Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9",
                "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9",
                "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9", "Categoria9"
    ]
  },
  {
    name: "Departamento10",
    categories: ["Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10",
                "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10",
                "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10", "Categoria10"
    ]
  }
]
// Verifica se a tela está no modo mobile
function isMobileScreen() {
  return window.innerWidth < 1024;
}

// Adiciona um listener para detectar a mudança de tamanho da tela
window.addEventListener("resize", () => {
  populateDepartments();
});

// Seleciona os elementos
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const departmentsList = document.getElementById("departmentsList");
const categoriesContainer = document.getElementById("categoriesContainer");
const listCategories = document.getElementById("listCategories");

const dropDownButtonMobile = document.getElementById("dropDownButtonMobile");
const dropDownMenuMobile = document.getElementById("dropDownMenuMobile");
const categoriesContainerMobile = document.getElementById("categoriesContainerMobile");
const listCategoriesMobile = document.getElementById("listCategoriesMobile");
const departmentsListMobile = document.getElementById("departmentsListMobile");

// Popula os departamentos de forma dinâmica
function populateDepartments() {
  departmentsList.innerHTML = "";
  departmentsListMobile.innerHTML = "";

  departments.forEach((dept) => {
    const departmentItem = document.createElement("li");
    departmentItem.className =
      "w-full flex justify-between items-center cursor-pointer px-1 py-1 sm:py-2 sm:px-4";
    departmentItem.innerHTML = `
        <span>${dept.name}</span>
        <i class="fa-solid fa-chevron-right text-[7px] sm:text-[10px]"></i>
    `;

    if (isMobileScreen()) {
      departmentItem.addEventListener("touchstart", () => {
        showCategories(dept.categories, true);
        highlightSelectedDepartment(departmentItem, "departmentsListMobile");
      })

      departmentsListMobile.appendChild(departmentItem);
    } else {
      departmentItem.addEventListener("mouseenter", () => {
        showCategories(dept.categories, false);
        highlightSelectedDepartment(departmentItem, "departmentsList");
      })

      departmentsList.appendChild(departmentItem);
    }
  });
}
// Função para exibir categorias
function showCategories(categories, isMobile) {
  const container = isMobile ? categoriesContainerMobile : categoriesContainer;
  const list = isMobile ? listCategoriesMobile : listCategories;

  list.innerHTML = "";
  container.classList.remove("hidden");

  // Cria 3 colunas para exibir as categorias
  const columns = [document.createElement("ul"), document.createElement("ul"), document.createElement("ul")];

  columns.forEach((column) => {
    column.className = "flex flex-col gap-2";
  });

  categories.forEach((category, index) => {
    const listItem = document.createElement("li");
    const categoryItem = document.createElement("button");

    categoryItem.className = "block text-[9px] px-2 py-2 cursor-pointer sm:px-4 sm:text-xs md:text-sm hover:text-blue-primary hover:font-bold";
    categoryItem.textContent = category;

    listItem.appendChild(categoryItem);
    columns[index % 3].appendChild(listItem);
  });

  columns.forEach((column) => {
    list.appendChild(column);
  });
}

// Função para destacar o departamento selecionado
function highlightSelectedDepartment(departmentItem, listId) {
  document.querySelectorAll(`#${listId} li`).forEach((item) => {
    item.classList.remove("text-blue-primary", "font-bold");
  })

  departmentItem.classList.add("text-blue-primary", "font-bold");  
}

// Eventos para abrir e fechar o dropdown no desktop
dropdownButton.addEventListener("mouseenter", () => {
  dropdownMenu.classList.remove("hidden");
  populateDepartments();
});

dropdownMenu.addEventListener("mouseleave", () => {
  dropdownMenu.classList.add("hidden");
  categoriesContainer.classList.add("hidden");
});

// Eventos para abrir e fechar o dropdown no mobile
dropDownButtonMobile.addEventListener("click", () => {
  dropDownMenuMobile.classList.remove("hidden");
  populateDepartments();
});




// ----------- footer
const faqContainer = document.querySelectorAll("[data-faq-footer-container]")
const faqFooterResponse = document.querySelectorAll("[data-faq-footer-response]")


faqContainer.forEach((container, index) => {
  container.addEventListener("click", () => {
    faqFooterResponse[index].classList.toggle("hidden")
  })
})


