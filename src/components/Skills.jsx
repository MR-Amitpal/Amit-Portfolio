function Skills() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Java",
        "JSP",
        "JDBC",
        "MySQL",
        "Spring",
        "Spring Boot"
    ];

    return (
        <section id="skills" className="skills section">

            <div className="section-title">

                <p>What I Know</p>

                <h2>My Skills</h2>

            </div>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <div
                        className="skill-card"
                        key={index}
                    >

                        <h3>{skill}</h3>

                    </div>

                ))}

            </div>

        </section>
        
    );
}

export default Skills;