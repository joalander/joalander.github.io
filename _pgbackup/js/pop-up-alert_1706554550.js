window.onload = function() {
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-button');

    closeButton.onclick = function() {
        popup.style.display = 'none';
    };

    popup.style.display = 'block';
};