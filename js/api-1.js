const displayPersonDetails = () => {
    const container = document.getElementById('container');
    container.classList.add('grid', 'gird-cols-1', 'sm:grid-cols-2', 'p-8', 'gap-4');
    container.innerText = '';
    const foundPersonText = document.getElementById('found-person-text');
    foundPersonText.innerText = person.message;
    person.result.forEach((personSerial) => {
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="h-fit w-full border">
                <div class="w-full border-b bg-gray-100 h-10 px-3 flex items-center">
                    <h1 class="text-base font-bold text-gray-600">Person Name: <span>${personSerial.name.fullName[0]+ ' ' + personSerial.name.fullName[1]}</span></h1>
                </div>
                <div class="p-3">
                    <h1 class="text-sm font-bold text-gray-600">Age: <span>${personSerial.age}</span></h1>
                    <h1 class="text-sm font-bold text-gray-600 mt-1">Street: <span>${personSerial.address.street + ' house ' + personSerial.address.house}</span></h1>
                    <h1 class="text-sm font-bold text-gray-600 mt-1"><span>${personSerial.isMale === false ? 'She is Female.' : 'He is Male.'}</span></h1>
                </div>
            </div>
    `;
    container.appendChild(div);
})
}