// script.js

// Get the lightbox elements
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var closeBtn = document.getElementsByClassName('close')[0];

// Function to open the lightbox
function openLightbox(event) {
    var fullSrc = event.target.getAttribute('data-full');
    lightboxImg.src = fullSrc;
    lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Attach click event listeners to thumbnails
var thumbnails = document.getElementsByClassName('thumbnail');
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', openLightbox);
}

// Attach click event listener to the close button
closeBtn.addEventListener('click', closeLightbox);

// Close the lightbox if the user clicks outside the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});
