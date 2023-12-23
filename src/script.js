document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('sliderButton');
    function getRandomPosition() {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const buttonHeight = button.clientHeight;
        const buttonWidth = button.clientWidth;
        const randomTop = Math.floor(Math.random() * (windowHeight - buttonHeight));
        const randomLeft = Math.floor(Math.random() * (windowWidth - buttonWidth));
        return { top: randomTop, left: randomLeft };
    }
    function slideButton() {
        const newPosition = getRandomPosition();
        button.style.top = newPosition.top + 'px';
        button.style.left = newPosition.left + 'px';
    }
    button.addEventListener('mouseover', slideButton);
});