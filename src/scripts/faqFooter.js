const faqContainer = document.querySelectorAll("[data-faq-footer-container]")
const faqFooterResponse = document.querySelectorAll("[data-faq-footer-response]")


faqContainer.forEach((container, index) => {
  container.addEventListener("click", () => {
    faqFooterResponse[index].classList.toggle("hidden")
  })
})
