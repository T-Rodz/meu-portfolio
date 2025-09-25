document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme'); // Verifica se já há um tema salvo

    // Se houver um tema salvo, aplica-o
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            darkModeToggle.textContent = 'Desativar Modo Escuro';
        }
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Adiciona ou remove a classe 'dark-mode' do body

        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Desativar Modo Escuro';
            localStorage.setItem('theme', 'dark-mode'); // Salva a preferência
        } else {
            darkModeToggle.textContent = 'Ativar Modo Escuro';
            localStorage.setItem('theme', 'light-mode'); // Salva a preferência
        }
    });
});