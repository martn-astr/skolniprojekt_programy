
function showSection(id) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }
}


