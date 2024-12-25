document.addEventListener("DOMContentLoaded", function() {
    new WOW().init();
});

function playNumberSound(number) {
    const audio = new Audio(`assets/sounds/number/${number}.mp3`);
    audio.play();
}
function checkAnswer(element, isCorrect) {
    const resultIcon = element.parentElement.querySelector('.result-icon');

    // Reset all result icons
    document.querySelectorAll('.result-icon').forEach(icon => {
        icon.style.display = 'none';
    });

    if (isCorrect) {
        console.log("Correct Answer Selected!");
        resultIcon.innerHTML = '<i class="fas fa-check-circle" style="font-size: 2rem; color: #28a745;"></i>';
        resultIcon.style.display = 'block'; // Show green checkmark
        element.style.border = "5px solid #28a745"; // Green border
        element.style.transform = "scale(1.5)"; // Slight zoom effect
    } else {
        console.log("Wrong Answer Selected!");
        resultIcon.innerHTML = '<i class="fas fa-times-circle" style="font-size: 2rem; color: #dc3545;"></i>';
        resultIcon.style.display = 'block'; // Show red cross
        element.style.border = "5px solid #dc3545"; // Red border
        element.style.transform = "scale(1.5)"; // Slight zoom effect
    }

    // Reset the transform effect after a short delay
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 500);
}
