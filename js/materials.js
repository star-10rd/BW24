// materials.js - FINAL: Bug fix + smoothest animation

document.addEventListener('DOMContentLoaded', () => {
  const categories = Array.from(document.querySelectorAll('.category'));
  const search = document.getElementById('materials-search');
  const expandAll = document.getElementById('expand-all');
  const collapseAll = document.getElementById('collapse-all');
  const noResultsMessage = document.getElementById('no-results-message');

  // Initialize collapsed state
  categories.forEach(cat => {
    const content = cat.querySelector('.category-content');
    const header = cat.querySelector('.category-header');
    header.setAttribute('tabindex','0');
    header.setAttribute('role','button');
    header.setAttribute('aria-expanded','false');
    content.style.display = 'none';
    content.style.maxHeight = '0px';
  });

  // FINAL FIX: Smoothest expansion using single rAF with CSS transition
  function setExpanded(category, expanded) {
    const header = category.querySelector('.category-header');
    const content = category.querySelector('.category-content');
    header.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    
    if (expanded) {
      content.style.display = 'block';
      
      // Single rAF for smooth animation without jump
      requestAnimationFrame(() => {
        const full = content.scrollHeight + 'px';
        content.style.maxHeight = full;
      });
      
      category.classList.add('active');
    } else {
      content.style.maxHeight = '0px';
      category.classList.remove('active');
      
      // Hide after transition completes
      setTimeout(() => {
        if (content.style.maxHeight === '0px') {
          content.style.display = 'none';
        }
      }, 350); // Match CSS transition duration
    }
  }

  // Category click handlers
  categories.forEach(cat => {
    const header = cat.querySelector('.category-header');
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      categories.forEach(c => { if (c !== cat) setExpanded(c, false); });
      setExpanded(cat, !expanded);
    });

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });

    // Copy links button
    const copyBtn = cat.querySelector('.copy-links');
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const links = Array.from(cat.querySelectorAll('a'))
          .map(a => `${a.textContent.trim()}: ${a.href}`)
          .join('\n');
        navigator.clipboard?.writeText(links).then(()=> {
          copyBtn.textContent = '✓';
          setTimeout(()=> copyBtn.textContent = '🔗', 1200);
        }).catch(()=> alert('Copy failed.'));
      });
    }
  });

  // Expand/Collapse all
  if (expandAll) expandAll.addEventListener('click', ()=> categories.forEach(c => setExpanded(c, true)));
  if (collapseAll) collapseAll.addEventListener('click', ()=> categories.forEach(c => setExpanded(c, false)));

  // BUG FIX + Advanced filtering
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      let totalVisibleItems = 0;
      
      if (!q) {
        // Clear search: Show all, close all sections
        categories.forEach(cat => {
          cat.style.display = '';
          const listItems = cat.querySelectorAll('.category-content li');
          listItems.forEach(li => {
            li.classList.remove('filtered-hidden');
            li.style.display = '';
          });
          setExpanded(cat, false);
        });
        if (noResultsMessage) noResultsMessage.style.display = 'none';
        return;
      }
      
      // Active search: Filter items within each section
      categories.forEach(cat => {
        const header = cat.querySelector('.category-header');
        const listItems = cat.querySelectorAll('.category-content li');
        
        let visibleItemsInSection = 0;
        
        // Check each list item
        listItems.forEach(li => {
          const itemText = li.textContent.toLowerCase();
          const matches = itemText.includes(q);
          
          if (matches) {
            li.classList.remove('filtered-hidden');
            li.style.display = '';
            visibleItemsInSection++;
          } else {
            li.classList.add('filtered-hidden');
            li.style.display = 'none';
          }
        });
        
        // BUG FIX: Only show section if it has visible items
        // Removed: headerMatches check (was causing empty sections to show)
        if (visibleItemsInSection > 0) {
          cat.style.display = '';
          totalVisibleItems += visibleItemsInSection;
          
          // Auto-expand sections with matches
          if (header.getAttribute('aria-expanded') !== 'true') {
            setExpanded(cat, true);
          } else {
            // Already expanded, update height for filtered items
            const content = cat.querySelector('.category-content');
            requestAnimationFrame(() => {
              const full = content.scrollHeight + 'px';
              content.style.maxHeight = full;
            });
          }
        } else {
          // No matching items: hide entire section
          cat.style.display = 'none';
        }
      });

      // Show/hide empty state
      if (noResultsMessage) {
        if (totalVisibleItems === 0) {
          noResultsMessage.style.display = 'block';
        } else {
          noResultsMessage.style.display = 'none';
        }
      }
    });

    // Clear button functionality
    search.addEventListener('search', () => {
      if (search.value === '') {
        search.dispatchEvent(new Event('input'));
      }
    });
  }
});
