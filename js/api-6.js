const inputField = document.getElementById('input-field');
const inputValue = () => {
    const value = inputField.value.toLowerCase();
    wordDataLoad(value);
}
const wordDataLoad = (input) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = (data) => {
    inputField.value = '';
    const showKeyword = document.getElementById('show-keyword');
    showKeyword.innerText = data[0].word;
    const wordType = document.getElementById('word-type');
    wordType.innerText = data[0].meanings[0].partOfSpeech;
    try{
        const firstLi = document.getElementById('li-1');
    firstLi.innerText = data[0].meanings[0].definitions[0].definition;
    const secondLi = document.getElementById('li-2');
    secondLi.innerText = data[0].meanings[0].definitions[1].definition;
    const thirdLi = document.getElementById('li-3');
    thirdLi.innerText = data[0].meanings[0].definitions[2].definition;
    } catch(error){
        console.log(error);
    } finally{
        const synonyms = document.getElementById('synonyms');
        synonyms.innerText = data[0].meanings[0].synonyms[0];
        const source = document.getElementById('source');
        source.innerText = data[0].sourceUrls[0];
        /* const audio = document.getElementById('audio');
        audio.setAttribute('src',data[0].phonetics[2].audio) */
    }
}