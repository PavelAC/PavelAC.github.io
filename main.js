
// document.addEventListener("DOMContentLoaded", function() {
//     const filters = document.querySelectorAll(".filter");
//     const projectItems = document.querySelectorAll(".project-item");

//     filters.forEach(filter => {
//         filter.addEventListener("click", function(e) {
//             e.preventDefault();
            
//             // Remove active class from all filters
//             filters.forEach(f => f.classList.remove("active"));
//             this.classList.add("active");

//             const category = this.getAttribute("data-category");

//             projectItems.forEach(item => {
//                 const itemCategory = item.getAttribute("data-category");
//                 if (category === "all" || itemCategory === category) {
//                     item.style.display = "block";
//                 } else {
//                     item.style.display = "none";
//                 }
//             });
//         });
//     });
// });

    // Fetch the JSON file and dynamically render the projects
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectContainer = document.getElementById('projectContainer');

            projects.forEach(project => {
                // Create the project container div
                const workContainer = document.createElement('div');
                workContainer.classList.add('work__container');

                // Create the project title
                const title = document.createElement('h3');
                title.classList.add('work__project-title');
                title.textContent = project.title;

                // Create the image wrapper and image
                const imgWrapper = document.createElement('div');
                imgWrapper.classList.add('work__img-wrapper', `work__image${projects.indexOf(project) + 1}`);
                const img = document.createElement('img');
                img.src = project.imgSrc;
                img.alt = project.altText;

                // Append image to the wrapper
                imgWrapper.appendChild(img);

                // Create the project content div
                const content = document.createElement('div');
                content.classList.add('work__project', `work__content${projects.indexOf(project) + 1}`);

                // Create the subtitle
                const subtitle = document.createElement('h3');
                subtitle.classList.add('work__subtitle');
                subtitle.textContent = project.category;

                // Create the project description
                const description = document.createElement('p');
                description.classList.add('work__project-description');
                description.textContent = project.description;

                // Create the buttons
                const githubBtn = document.createElement('a');
                githubBtn.classList.add('btn', 'work__project-btn');
                githubBtn.href = project.githubLink;
                githubBtn.textContent = 'GitHub';

                const websiteBtn = document.createElement('a');
                websiteBtn.classList.add('btn', 'work__project-btn');
                websiteBtn.href = project.websiteLink;
                websiteBtn.target = '_blank';
                websiteBtn.textContent = 'Website';

                // Append all elements to the content div
                content.appendChild(subtitle);
                content.appendChild(description);
                content.appendChild(githubBtn);
                content.appendChild(websiteBtn);

                // Append title, imgWrapper, and content to the project container
                workContainer.appendChild(title);
                workContainer.appendChild(imgWrapper);
                workContainer.appendChild(content);

                // Append the project container to the main container
                projectContainer.appendChild(workContainer);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
