function getUserLanguage() {
    const lang = localStorage.getItem('selectedLanguage') || (navigator.language || navigator.userLanguage || 'en').split('-')[0];
    changeLanguage(lang);
}
 
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    fetch(`./languages/z${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const value = translations[key];
 
                if (element.getAttribute('data-i18n-placeholder') !== null) {
                    element.setAttribute('placeholder', value);
                } else {
                    element.textContent = value;
                }
            });
        })
        .catch(error => {
            console.error(`Error fetching from first path: ${error}`);
            fetch(`../languages/z${lang}.json`)
                .then(response => response.json())
                .then(translations => {
                    document.querySelectorAll('[data-i18n]').forEach(element => {
                        const key = element.getAttribute('data-i18n');
                        const value = translations[key];

                        if (element.getAttribute('data-i18n-placeholder') !== null) {
                            element.setAttribute('placeholder', value);
                        } else {
                            element.textContent = value;
                        }
                    });
                })
                .catch(secondError => console.error(`Error fetching from second path: ${secondError}`));
        });
}
 
// Chama getUserLanguage quando a página é carregada para aplicar o idioma selecionado
document.addEventListener('DOMContentLoaded', getUserLanguage);