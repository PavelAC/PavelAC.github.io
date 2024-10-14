
document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".filter");
    const projectItems = document.querySelectorAll(".project-item");

    filters.forEach(filter => {
        filter.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            projectItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");
                if (category === "all" || itemCategory === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});