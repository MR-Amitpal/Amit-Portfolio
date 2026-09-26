import ProfileImage from "../assets/profile.jpg";

function Home() {
    return (
        <section id="home" className="home">

            <div className="home-content">

                <p className="intro">
                    Hello, I'm
                </p>

                <h1>
                    Amit Pal
                </h1>

                <h2>
                    Java Full Stack Developer
                </h2>

                <p className="hero-description">
                    I build modern, responsive and user-friendly
                    web applications using React, Java and Spring Boot.
                </p>

                <div className="home-buttons">

                    <a href="#projects" className="btn primary">
                        View Projects
                    </a>

                    <a href="#contact" className="btn secondary">
                        Contact Me
                    </a>

                    <a href="/Amit-Pal-Resume.pdf" download="Amit-Pal-Resume.pdf" className="btn third">
                        Download Resume
                    </a>

                </div>

                <div className="social-links">

                    <a href="https://github.com/MR-Amitpal" target="_blank">
                        GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/amit-pal7526/" target="_blank">
                        LinkedIn
                    </a>

                </div>

            </div>

            <div className="hero-image">

                <div className="circle">

                    <div className="profile">
                        <img src={ProfileImage} alt="Amit Pal"/>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Home;