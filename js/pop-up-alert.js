window.onload = function() {
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-button');

    closeButton.onclick = function() {
        popup.style.display = 'none';
        localStorage.setItem('popupShown', 'true');
    };

    var popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
        popup.style.display = 'block';
    }
};