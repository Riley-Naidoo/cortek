// Function to show the spinner and navigate
function navigateWithSpinner(event, href) {
    event.preventDefault();
    document.getElementById('loading-spinner').style.display = 'flex';
    setTimeout(() => {
        window.location.href = href;
    }, 1000);
}

// Apply this to links, buttons, and divs
document.querySelectorAll('a, button, div').forEach(element => {
    element.addEventListener('click', function(event) {
        const href = this.getAttribute('href') || this.dataset.href;
        if (href) {
            navigateWithSpinner(event, href);
        }
    });
});
