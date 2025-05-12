fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectContainer = document.getElementById('projectContainer');
        const filterButtons = document.querySelectorAll('.work__filter-btn');
        
        // Function to render all projects
        function renderProjects(projectsToRender) {
            // Clear the container first
            projectContainer.innerHTML = '';
            
            projectsToRender.forEach((project, index) => {
                const workContainer = document.createElement('div');
                workContainer.classList.add('work__container');
                
                // Add odd/even class for alternating layout
                if (index % 2 === 0) {
                    workContainer.classList.add('odd-project');
                } else {
                    workContainer.classList.add('even-project');
                }
                
                workContainer.setAttribute('data-category', project.category);

                const title = document.createElement('h3');
                title.classList.add('work__project-title');
                title.textContent = project.title;

                const imgWrapper = document.createElement('div');
                imgWrapper.classList.add('work__img-wrapper');
                const img = document.createElement('img');
                img.src = project.imgSrc;
                img.alt = project.altText;

                imgWrapper.appendChild(img);

                const content = document.createElement('div');
                content.classList.add('work__project');

                const subtitle = document.createElement('h3');
                subtitle.classList.add('work__subtitle');
                subtitle.textContent = project.category;

                const description = document.createElement('p');
                description.classList.add('work__project-description');
                description.textContent = project.description;

                const githubBtn = document.createElement('a');
                githubBtn.classList.add('btn', 'work__project-btn');
                githubBtn.href = project.githubLink;
                githubBtn.textContent = 'GitHub';

                const websiteBtn = document.createElement('a');
                websiteBtn.classList.add('btn', 'work__project-btn');
                websiteBtn.href = project.websiteLink;
                websiteBtn.target = '_blank';
                websiteBtn.textContent = 'Website';

                content.appendChild(subtitle);
                content.appendChild(description);
                content.appendChild(githubBtn);
                content.appendChild(websiteBtn);

                workContainer.appendChild(title);
                workContainer.appendChild(imgWrapper);
                workContainer.appendChild(content);

                projectContainer.appendChild(workContainer);
            });
        }
        
        // Initial render of all projects
        renderProjects(projects);
        
        // Add click event listeners to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const selectedCategory = button.getAttribute('data-category');
                
                // Filter projects based on selected category
                if (selectedCategory === 'all') {
                    renderProjects(projects);
                } else {
                    const filteredProjects = projects.filter(project => 
                        project.category === selectedCategory
                    );
                    renderProjects(filteredProjects);
                }
            });
        });
    })
    .catch(error => console.error('Error loading projects:', error));