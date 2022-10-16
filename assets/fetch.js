const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
const img = document.getElementById('huge-image');
const loadButton = document.getElementById('load');
const stopButton = document.getElementById('stop');
let controller

function startLoading() {
    loadButton.disabled = true;
    loadButton.innerText = 'Loading...';
    stopButton.disabled = false;
}
function stopLoading() {
    loadButton.disabled = false;
    loadButton.innerText = 'Load HUGE Image';
    stopButton.disabled = true;
}

loadButton.onclick = async function () {
    startLoading();
    controller = new AbortController(); // Manipular peticion

    try {
        // const res = await fetch(url);
        const res = await fetch(url, { signal: controller.signal });
        const blob = await res.blob();  // Obtiene binario de la imagen
        const imgUrl = URL.createObjectURL(blob); // Genera url para renderizar img
        img.src = imgUrl;
        
    } catch (error) {
        console.log(error)
    }

    stopLoading();
};

stopButton.onclick = function () {
    controller.abort();
    stopLoading();
};