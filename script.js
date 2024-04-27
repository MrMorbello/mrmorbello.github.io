const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showImage() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function closeNavbar() {
    document.querySelector('.navbar').style.display = 'none';
  }

showImage();