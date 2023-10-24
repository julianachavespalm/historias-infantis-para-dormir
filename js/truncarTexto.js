document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.text-info');
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (content.style.overflow === 'hidden') {
                content.style.overflow = 'visible';
                button.textContent = 'Mostrar menos';
            } else {
                content.style.overflow = 'hidden';
                button.textContent = 'Leia mais';
            }
        });
    });
});
