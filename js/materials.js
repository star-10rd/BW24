// materials.js

document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const header = category.querySelector('.category-header');
        header.addEventListener('click', () => {
            // Toggle active class
            category.classList.toggle('active');

            // Close other categories
            categories.forEach(otherCategory => {
                if (otherCategory !== category) {
                    otherCategory.classList.remove('active');
                }
            });
        });
    });
});
