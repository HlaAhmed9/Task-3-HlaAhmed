
document.addEventListener('DOMContentLoaded', () => {

    initSmoothNavigation();
    initReadingTrackerAndFavorites();
    initDarkThemeToggle();
});


function initSmoothNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a, .cta-button');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            
       
            if (targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}


function initReadingTrackerAndFavorites() {
    const bookCards = document.querySelectorAll('.book-card');
    const goalsCounter = document.getElementById('goals-counter');
    
    let booksReadCount = 0;

    const updateSidebarCounter = () => {
        goalsCounter.textContent = booksReadCount;
    };

    bookCards.forEach((card, index) => {
        const bookInfo = card.querySelector('.book-info');
        
       
        const readBtn = document.createElement('button');
        readBtn.className = 'read-toggle-btn';
        readBtn.style.marginTop = '12px';
        readBtn.style.padding = '8px 14px';
        readBtn.style.borderRadius = '6px';
        readBtn.style.border = '1px solid #6c5ce7';
        readBtn.style.backgroundColor = '#ffffff';
        readBtn.style.color = '#6c5ce7';
        readBtn.style.fontWeight = '600';
        readBtn.style.cursor = 'pointer';
        readBtn.innerHTML = '<i class="fa-solid fa-book-open"></i>Mark as Read';
        
    
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-toggle-btn';
        favoriteBtn.style.marginTop = '8px';
        favoriteBtn.style.padding = '8px 14px';
        favoriteBtn.style.borderRadius = '6px';
        favoriteBtn.style.border = '1px solid #ccc';
        favoriteBtn.style.backgroundColor = '#ffffff';
        favoriteBtn.style.color = '#333333';
        favoriteBtn.style.fontWeight = '600';
        favoriteBtn.style.cursor = 'pointer';
        favoriteBtn.innerHTML = '<i class="fa-regular fa-heart"></i>Favorite';

    
        bookInfo.appendChild(readBtn);
        bookInfo.appendChild(favoriteBtn);

       
        if (index < 2) {
            markBookAsRead(card, readBtn);
        }

        readBtn.addEventListener('click', () => {
            const isRead = card.classList.contains('is-read');
            if (!isRead) {
                markBookAsRead(card, readBtn);
            } else {
                unmarkBookAsRead(card, readBtn);
            }
        });

       
        favoriteBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            const isFavorited = card.classList.contains('is-favorited');
            
            if (!isFavorited) {
                card.classList.add('is-favorited');
                card.style.backgroundColor = '#fef5f7'; 
                favoriteBtn.innerHTML = '<i class="fa-solid fa-heart" style="color: #e74c3c;"></i>Favorited!';
                favoriteBtn.style.borderColor = '#e74c3c';
                favoriteBtn.style.color = '#e74c3c';
            } else {
                card.classList.remove('is-favorited');
                card.style.backgroundColor = card.classList.contains('is-read') ? '#f0eeff' : '';
                favoriteBtn.innerHTML = '<i class="fa-regular fa-heart"></i>Favorite';
                favoriteBtn.style.borderColor = '#ccc';
                favoriteBtn.style.color = '#333333';
            }
        });
    });

    
    function markBookAsRead(card, button) {
        card.classList.add('is-read');
        card.style.borderTop = '4px solid #2ecc71'; 
        
        if (!card.classList.contains('is-favorited')) {
            card.style.backgroundColor = '#f0eeff'; 
        }
        
        button.innerHTML = '<i class="fa-solid fa-circle-check"></i>Read';
        button.style.backgroundColor = '#2ecc71';
        button.style.color = '#ffffff';
        button.style.borderColor = '#2ecc71';
        
        booksReadCount++;
        updateSidebarCounter();
    }

   
    function unmarkBookAsRead(card, button) {
        card.classList.remove('is-read');
        card.style.borderTop = 'none';
        
        if (!card.classList.contains('is-favorited')) {
            card.style.backgroundColor = '';
        }
        
        button.innerHTML = '<i class="fa-solid fa-book-open"></i>Mark as Read';
        button.style.backgroundColor = '#ffffff';
        button.style.color = '#6c5ce7';
        button.style.borderColor = '#6c5ce7';
        
        booksReadCount--;
        updateSidebarCounter();
    }
}


function initDarkThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.className = 'fa-solid fa-sun';
            themeText.textContent = 'Light Mode';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            themeText.textContent = 'Dark Mode';
        }
    });
}