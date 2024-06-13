function getUserLanguage() {
    const lang = localStorage.getItem('selectedLanguage') || (navigator.language || navigator.userLanguage || 'en').split('-')[0];
    changeLanguage(lang);
}

function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

<<<<<<< HEAD
    fetch(`./languages/z${lang}.json`)
=======
    fetch(`./languages/${lang}.json`)
>>>>>>> a86eaf0f895aac2e928915ec3965ce1a82d194a6
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
        .catch(error => console.error(`Error: ${error}`));
}

// Chama getUserLanguage quando a página é carregada para aplicar o idioma selecionado
document.addEventListener('DOMContentLoaded', getUserLanguage);
