const randomAdvice = () => {
    const url = 'https://api.adviceslip.com/advice';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAdvice(data))
}
const displayAdvice = (data) => {
    const adviceField = document.getElementById('advice-field');
    const idField = document.getElementById('id-field');
    adviceField.innerText = data.slip.advice;
    idField.innerText = data.slip.id;
}