const searchGroups = document.querySelectorAll('.search-group');

searchGroups.forEach(group => {
    const input = group.querySelector('[data-search-input]');
    const result = group.querySelector('[data-search-result]');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const value = input.value.trim()

            if (value === '') {
                result.textContent = '';
            } else {
                result.textContent = `Você buscou por: ${value}`; 
            }
        }
    });
});


