// Get all artist links
const artistLinks = document.querySelectorAll('.artist-link');

// Function to change background images
function changeBackgroundImages() {
    const scrollPosition = window.scrollY;

    artistLinks.forEach(link => {
        const imageSrc = link.getAttribute('data-image');
        const linkOffset = link.getBoundingClientRect().top;

        if (linkOffset < window.innerHeight / 2) {
            link.style.backgroundImage = `url(${imageSrc})`;
        } else {
            link.style.backgroundImage = 'none';
        }
    });
}

// Add a scroll event listener
window.addEventListener('scroll', changeBackgroundImages);

// Initial call to set background images based on initial scroll position
changeBackgroundImages();
