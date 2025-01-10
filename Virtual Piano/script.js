document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', playSound);
    });

    function playSound(event) {
        const key = event.target;
        const keyData = key.getAttribute('data-key');
        console.log(`Key pressed: ${keyData}`); 
        if (keyData) {
            const audio = new Audio(`Sounds/${keyData}.mp3`);
            audio.play();
        }
    }
    
});
