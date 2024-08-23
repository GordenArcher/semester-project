const images = document.querySelectorAll('.grid__column_image img');
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const imageIndex = document.getElementById('imageIndex');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openModal();
    });
});

function openModal() {
    modal.style.display = "block";
    updateModalImage();
}

document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
}

prevBtn.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateModalImage();
}

nextBtn.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateModalImage();
}

function updateModalImage() {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
    imageIndex.innerHTML = `${currentIndex + 1} / ${images.length}`; // Update the index display
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
