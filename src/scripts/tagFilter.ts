  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.historie-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTag = button.getAttribute('data-tag');
        
        // Prüfen, ob das Tag exisitiert
        if (!selectedTag) return;
        // 1. Button-Styling aktualisieren
        filterButtons.forEach(btn => btn.classList.remove('active', 'bg-bonjwa-orange', 'text-white', 'shadow-orange-glow'));
        filterButtons.forEach(btn => btn.classList.add('bg-white/5', 'text-gray-400'));
        
        button.classList.add('active', 'bg-bonjwa-orange', 'text-white', 'shadow-orange-glow');
        button.classList.remove('bg-white/5', 'text-gray-400');

        // 2. Filtern
        items.forEach(item => {
            const itemTags = item.getAttribute('data-tags') || '';
            
            if (selectedTag === 'all' || itemTags.includes(selectedTag)) {
            (item as HTMLElement).style.display = 'block';
            // Optional: Animation triggern
            item.classList.add('animate-in', 'fade-in', 'duration-500');
            } else {
            (item as HTMLElement).style.display = 'none';
            }
        });
    });
  });
