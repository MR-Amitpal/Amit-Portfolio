function Projects() {

    const projects = [

        {
            title: "Swiggy Clone",
            description:
                "A responsive food delivery website built using React, JavaScript, HTML and CSS.",
            technology:
                "React • JavaScript • HTML • CSS"
        },

        {
            title: "All In One Converter",
            description:
                "A GUI application containing currency, weight, area, length and temperature converters.",
            technology:
                "Python • Tkinter • API"
        },

        {
            title: "Weather Application",
            description:
                "A responsive weather application that retrieves weather information using an API.",
            technology:
                "JavaScript • API • HTML • CSS"
        }

    ];

    return (

        <section id="projects" className="projects section">

            <div className="section-title">

                <p>My Recent Work</p>

                <h2>Projects</h2>

            </div>

            <div className="projects-container">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        <div className="project-number">
                            0{index + 1}
                        </div>

                        <h3>
                            {project.title}
                        </h3>

                        <p>
                            {project.description}
                        </p>

                        <span>
                            {project.technology}
                        </span>

                        <button>
                            View Project →
                        </button>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default Projects;