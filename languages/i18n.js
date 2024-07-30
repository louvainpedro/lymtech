// Função para carregar o arquivo JSON para o idioma selecionado
function loadTranslations(language) {
    return fetch(`../languages/${language}.json`)
        .then(response => {
            if (!response.ok) {
                // Se o primeiro fetch falhar, tenta o segundo
                return fetch(`./languages/${language}.json`);
            }
            return response;
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Language file not found');
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error loading ${language} translations:`, error);
            return null;
        });
}

// Função para mudar os placeholders com base nas traduções carregadas
function changePlaceholder(translations) {
    const inputs = [
        { id: 'nameInput', key: 'namePlaceholder' },
        { id: 'emailInput', key: 'emailPlaceholder' },
        { id: 'textarea', key: 'messagePlaceholder' }
    ];

    inputs.forEach(input => {
        const inputElement = document.getElementById(input.id);
        if (translations && translations[input.key]) {
            inputElement.placeholder = translations[input.key];
        } else {
            console.warn(`Translation for ${input.key} not found.`);
        }
    });
}

// Função para aplicar as traduções aos elementos com data-i18n
function applyTranslations(translations) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = translations[key];

        if (element.getAttribute('data-i18n-placeholder') !== null) {
            element.setAttribute('placeholder', value);
        } else {
            element.textContent = value;
        }
    });
}

// Função para mudar o idioma e atualizar os placeholders e elementos com data-i18n
function changeLanguage(language) {
    loadTranslations(language).then(translations => {
        if (translations) {
            changePlaceholder(translations);
            applyTranslations(translations);
            localStorage.setItem('selectedLanguage', language);
        } else {
            console.error(`Failed to load translations for language: ${language}`);
        }
    });
}

// Função para obter o idioma do usuário
function getUserLanguage() {
    const lang = localStorage.getItem('selectedLanguage') || (navigator.language || navigator.userLanguage || 'en').split('-')[0];
    changeLanguage(lang);
}

// Chama getUserLanguage quando a página é carregada para aplicar o idioma selecionado
document.addEventListener('DOMContentLoaded', () => {
    getUserLanguage();

    // Atualiza o idioma quando o usuário seleciona um novo idioma
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', () => {
            const selectedLanguage = languageSelector.value;
            changeLanguage(selectedLanguage);
        });
    }
});
