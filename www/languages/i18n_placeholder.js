// Function to load the JSON file for the selected language
function loadTranslations(language) {
    return fetch(`./language/z${language}.json`)
        .then(response => response.json())
        .catch(error => {
            console.error(`Error loading ${language} translations:`, error);
            return null;
        });
}

// Function to change placeholders based on the loaded translations
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

console.log("asdaskjdaksjd");
// Function to change the language and update placeholders
function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    loadTranslations(selectedLanguage).then(translations => {
        changePlaceholder(translations);
    });
}

// Load the default language translations on page load
document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = document.getElementById('languageSelector').value;
    loadTranslations(defaultLanguage).then(translations => {
        changePlaceholder(translations);
    });
});


