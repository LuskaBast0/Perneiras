
            //JavaScript para interatividade 

        document.addEventListener('DOMContentLoaded', function () {
            // Alternância do menu móvel
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const openIcon = document.getElementById('open-icon');
            const closeIcon = document.getElementById('close-icon');

            menuButton.addEventListener('click', () => {
                const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
                menuButton.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });

            // Definir o ano atual no rodapé
            document.getElementById('current-year').textContent = new Date().getFullYear();
        });