const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
const img = document.getElementById('huge-image');
const loadButton = document.getElementById('load');
const stopButton = document.getElementById('stop');


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
    stopLoading();
};

stopButton.onclick = function () {
    stopLoading();
};