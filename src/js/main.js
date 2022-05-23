import { defaultValue, keywordsText } from './defaultTexts.js';

const warningModal = document.querySelector('#warning-modal');
const clearInputText = document.querySelector('#clear-text');
const clearInput = document.querySelector('#clear-input');
const keywords = document.querySelector('#keyword-list');
const previewer = document.querySelector('#preview');
const editor = document.querySelector('#editor');
let placeholder;

/**
 * To complete last fcc test that asks the markdown to interprets carriage returns
 * and renders them as br (line break) elements.
 **/
marked.setOptions({
    breaks: true
});

const updateDisplay = (where, what) => where.innerHTML = marked.parse(`${what}`);

const defaultDisplay = () => {
    placeholder = defaultValue;

    updateDisplay(keywords, keywordsText);
    updateDisplay(previewer, defaultValue);
    editor.value = `${defaultValue}`;
}

window.addEventListener('load', defaultDisplay);

const handleChange = (e) => {
    let input = e.target.value;
    updateDisplay(previewer, input);
}

editor.addEventListener('input', handleChange);

warningModal.addEventListener('show.bs.modal', (e) => {
    if (editor.value === placeholder || !editor.value) {
        return e.preventDefault();
    }
});

const resetInput = () => {

    if (editor.value === placeholder) {
        editor.value = '';
        updateDisplay(previewer, '## Start Writing!');
    } else if (!editor.value) {
        defaultDisplay();
    }
    clearInput.addEventListener('click', () => {
        editor.value = '';
        updateDisplay(previewer, '## Start Writing!');
    });
}

clearInputText.addEventListener('click', resetInput);

