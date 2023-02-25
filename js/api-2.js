const displayCarDetails = () => {
    const container = document.getElementById('body-container');
    container.classList.add('grid', 'gird-cols-1', 'sm:grid-cols-2', 'p-8', 'gap-4');
    const dataLength = data.length;
    const title = document.getElementById('found-car-text');
    title.innerText = dataLength;
    container.innerText = '';
    data.forEach((carSerial) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 glass">
        <figure><img src=${carSerial.imageURL}/></figure>
        <div class="card-body">
          <h2 class="card-title font-bold">Car Name: <span>${carSerial.name}</span></h2>
          <p class="font-semibold">Details: <span>${carSerial.description}</span></p>
          <div class="w-fit h-8 bg-gray-300 rounded flex gap-2 items-center p-2 font-semibold text-base">
            Price: <span>${carSerial.price}</span> Lacs
          </div>
        </div>
      </div>
        `;
        container.appendChild(div);
    })
}