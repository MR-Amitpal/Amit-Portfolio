import Location from "../assets/Location.png";
import Email from "../assets/Email.png";
import Contacts from "../assets/Contacts.png";
function Contact() {

    return (

        <section id="contact" className="contact section">
            <div className="section-title">
                <h2>Contact Me</h2>
            </div>

            <div className="contact-container">
                <div className="contact-text">
                    <h3>Have a project in mind?</h3>
                    <p>
                        I'm always interested in learning,
                        collaborating and working on new projects.
                    </p>

                    <div className="container-contact">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={Location} alt="Location"/>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>
                                    Nalasopara (east), Mumbai, Maharastra, India
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={Email} alt="email" />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:amitpaltajpur@gmail.com">amitpaltajpur@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <img src={Contacts} alt="number" />
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:+8840490664">+91 8840490664</a>
                            </div>
                        </div>         
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email"/>
                    <textarea rows="5" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message →</button>
                </form>
            </div>
        </section>
        /*<section id="contact" className="contact section">
                <div className="section-title">
                    <p>Let's Connect</p>
                    <h2>Contact Me</h2>
                </div>
                
                <div className="contact-container">

                    {/* LEFT SIDE 

                    <div className="contact-left">

                        <h3>
                            Have a project in mind?
                        </h3>

                        <p className="contact-description">
                            I'm always interested in learning,
                            collaborating and working on new
                            projects. Feel free to get in touch
                            with me.
                        </p>


                        /* Contact Information */

                        /*<div className="contact-details">

                            {/* Location */

                            /*<div className="contact-item">

                                <div className="contact-icon">
                                    📍
                                </div>

                                <div>
                                    <h4>Location</h4>

                                    <p>
                                        Your Location
                                    </p>
                                </div>

                            </div>


                            /* Email */

                            /*<div className="contact-item">

                                <div className="contact-icon">
                                    ✉️
                                </div>

                                <div>
                                    <h4>Email</h4>

                                    <p>
                                        your-email@gmail.com
                                    </p>
                                </div>

                            </div>


                            /* Phone */

                            /*<div className="contact-item">

                                <div className="contact-icon">
                                    📞
                                </div>

                                <div>
                                    <h4>Phone</h4>

                                    <p>
                                        +91 XXXXX XXXXX
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
          <form className="contact-form">

                        <div className="form-group">
                            <label htmlFor="name">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="email">
                                Your Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="message">
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            className="send-btn"
                        >
                            Send Message
                            <span>→</span>
                        </button>
                    </form>
                </div>
        </section>*/

    );
}

export default Contact;