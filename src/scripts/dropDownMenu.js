import { departments } from "../assets/data/departments.js"

const dropdownButton = document.getElementById("dropdownButton")
const dropdownMenu = document.getElementById("dropdownMenu")
const departmentsList = document.getElementById("departmentsList")
const categoriesContainer = document.getElementById("categoriesContainer")
const listCategories = document.getElementById("listCategories")

const dropDownButtonMobile = document.getElementById("dropDownButtonMobile")
const dropDownMenuMobile = document.getElementById("dropDownMenuMobile")
const categoriesContainerMobile = document.getElementById("categoriesContainerMobile")
const listCategoriesMobile = document.getElementById("listCategoriesMobile")
const departmentsListMobile = document.getElementById("departmentsListMobile")

// Verifica se a tela está no modo mobile
function isMobileScreen() {
    return window.innerWidth < 1024
}

// Adiciona um listener para detectar a mudança de tamanho da tela
window.addEventListener("resize", () => {
    populateDepartments()
})


// Popula os departamentos de forma dinâmica
function populateDepartments() {
    departmentsList.innerHTML = ""
    departmentsListMobile.innerHTML = ""

    departments.forEach((dept) => {
        const departmentItem = document.createElement("li")
        departmentItem.className =
            "w-full flex justify-between items-center cursor-pointer px-1 py-1 sm:py-2 sm:px-4"
        departmentItem.innerHTML = `
          <span>${dept.name}</span>
          <i class="fa-solid fa-chevron-right text-[7px] sm:text-[10px]"></i>
      `

        if (isMobileScreen()) {
            departmentItem.addEventListener("touchstart", (event) => {
                event.stopPropagation()
                showCategories(dept.categories, true)
                highlightSelectedDepartment(departmentItem, "departmentsListMobile")
            })

            departmentsListMobile.appendChild(departmentItem)
        } else {
            departmentItem.addEventListener("mouseenter", () => {
                showCategories(dept.categories, false)
                highlightSelectedDepartment(departmentItem, "departmentsList")
            })

            departmentsList.appendChild(departmentItem)
        }
    })
}

// Função para exibir categorias
function showCategories(categories, isMobile) {
    const container = isMobile ? categoriesContainerMobile : categoriesContainer
    const list = isMobile ? listCategoriesMobile : listCategories

    list.innerHTML = ""
    container.classList.remove("hidden")

    // Cria 3 colunas para exibir as categorias
    const columns = [document.createElement("ul"), document.createElement("ul"), document.createElement("ul")]

    columns.forEach((column) => {
        column.className = "flex flex-col gap-1"
    })

    categories.forEach((category, index) => {
        const listItem = document.createElement("li")
        const categoryItem = document.createElement("button")

        categoryItem.className = "block text-[9px] px-2 py-2 cursor-pointer sm:px-4 sm:text-xs md:text-sm hover:text-blue-primary hover:font-bold"
        categoryItem.textContent = category

        listItem.appendChild(categoryItem)
        columns[index % 3].appendChild(listItem)
    })

    columns.forEach((column) => {
        list.appendChild(column)
    })
}

// Função para destacar o departamento selecionado
function highlightSelectedDepartment(departmentItem, listId) {
    document.querySelectorAll(`#${listId} li`).forEach((item) => {
        item.classList.remove("text-blue-primary", "font-bold")
    })

    departmentItem.classList.add("text-blue-primary", "font-bold")
}

// Eventos para abrir e fechar o dropdown no desktop
dropdownButton.addEventListener("mouseenter", () => {
    dropdownMenu.classList.remove("hidden")
    populateDepartments()
})

dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.classList.add("hidden")
    categoriesContainer.classList.add("hidden")
})

// Eventos para abrir e fechar o dropdown no mobile
dropDownButtonMobile.addEventListener("touchstart", () => {
    const icon = dropDownButtonMobile.querySelector([".icon-menu-mobile"])
    
    // Alterna a visibilidade do dropdown
    dropDownMenuMobile.classList.toggle("hidden")

    // Alterna o ícone entre 'fa-bars' e 'fa-xmark'
    if (dropDownMenuMobile.classList.contains("hidden")) {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    } else {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    }
})


