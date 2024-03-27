import React from 'react'
// import { CiFacebook } from "react-icons/ci";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaLocationArrow } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa6";
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-nav">
                <div className="Simplilearn-Solution">
                    <p>© 2009-2024-Agilepreppro Solution. </p>
                    <i class="fa-solid fa-chevron-down" id="fa-down"></i>
                </div>
            </div>

            <div className="Footer-container">
                <div className="Refer-and-Earn-heading">
                    <div className="Refer-and-Earn">
                        {/* <p>Follow us!</p> */}
                        {/* <button className="Refer-btn">Refer and Earn</button> */}
                        <div id="calendly-inline-widget" >
                        <Link to="https://calendly.com/agilepreppro/courseadvisor" style={{textDecoration: 'none'}}>
                            <p>Click here to speak to a course advisor</p>
                        </Link>
                        </div>
                        {/* <div class="location-arrow">
                            <CiFacebook id="facebook" />
                            <FaTwitterSquare id="facebook"/>
                            <FaYoutube id="youtube" />
                            <FaLinkedin id="facebook" />
                            <FaLocationArrow id="facebook" />
                            <FaInstagramSquare id="youtube" />
                        </div> */}
                    </div>
                    <div className="Alumni-speak">
                        <div className="Newsroom">
                            <h3>Company</h3>
                            <p>About us</p>
                            <p>Careers</p>
                            <p>Newsroom</p>
                            <p>Alumni speak</p>
                            <p>Grievance redressal</p>
                            <p>Contact us</p>
                        </div>

                        <div className="Newsroom">
                            <h3>Work with us</h3>
                            <p>Become an instructor</p>
                            <p>Blog as guest</p>
                        </div>

                        <div className="Newsroom">
                            <h3>Discover</h3>
                            <p>Skillups</p>
                            <p>Skillup Sitemap</p>
                            <p>Resources</p>
                            <p>RSS feed</p>
                            <p>City Sitemap</p>
                        </div>

                        <div className="Newsroom">
                            <h3>For Businesses</h3>
                            <p>Corporate training</p>
                            <p>Partners</p>
                            <p>Digital Transformation</p>
                        </div>
                    </div>
                    <div className="Android-App">
                        <h3>Learn On the Go!</h3>
                        <div className="Android-Heading">
                            <div className="Android">
                                <IoLogoAndroid id="Android-icon" />
                                <p>Get the Android App</p>
                            </div>
                            <div className="Android2">
                                {/* <i class="fa-brands fa-apple" id="Android-icon2"></i> */}
                                <FaApple id="Android-icon2" />
                                <p>Get the iOS App</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Trending-Post-Container">
                    <div className="Trending-Post">
                        <h3>Trending Post Graduate Programs</h3>
                        <p>Artificial Intelligence Course | Cloud Computing Certification Course | Full Stack Web Development Course | PG in Data Science | MS in Artificial Intelligence | Product Management Certification Course | Blockchain Course | Project Management Certification Course | Lean Six Sigma Certification Course | Data Analytics Program | AI and ML Course | Business Analysis Certification Course | Data Engineering Certification Courses | Digital Marketing Certification Program | DevOps Certification Course</p>
                    </div>
                    <div className="Trending-Post">
                        <h3>Trending Master Programs</h3>
                        <p>PMP Plus Certification Training Course | Data Science Certifiation Course | Data Analyst Course | Masters in Artificial Intelligence | Cloud Architect Certification Training Course | DevOps Engineer Certification Training Course | Digital Marketing Course | Cyber Security Expert Course | Business Analyst Course</p>
                    </div>
                    <div className="Trending-Post">
                        <h3>Trending Courses</h3>
                        <p>PMP Certification Training Course | CSM Certification Course | Data Science with Python Course | Tableau Certification Course | Power BI Certification Course | TOGAF Certification Course | ITIL 4 Foundation Certification Training Course | CISSP Certification Training | Java Certification Course | Python Certification Training Course | Big Data Hadoop Course | Leading SAFe ® 6 training with SAFe Agilist Certification | CEH (v12)- Certified Ethical Hacker | AWS Solutions Architect</p>
                    </div>
                    <div className="Trending-Post">
                        <h3>Trending Categories</h3>
                        <p>Project Management Courses | IT Service and Architecture | Digital Marketing | Cyber Security Certification Courses | DevOps | AI & Machine Learning | Big Data | Business and Leadership | Software Engineering Certifications | Job Oriented Courses | MBA Courses | Technical Courses | Computer Courses | Web Development Courses | Online Certifications | Software Engineering Bootcamps | Generative AI Courses | Quality Management Courses | Agile Certifications | Cloud Computing Courses</p>
                    </div>
                    <div className="Trending-Post">
                        <h3>Trending Resources</h3>
                        <p>Python Tutorial | JavaScript Tutorial | Java Tutorial | Angular Tutorial | Node.js Tutorial | Docker Tutorial | Git Tutorial | Kubernetes Tutorial | Power BI Tutorial | CSS Tutorial</p>
                    </div>
                </div>

                <div className="Terms-Conditions-container">
                    <div className="Terms-Conditions">
                        <ul>
                            <li>Terms and Conditions Privacy Policy Refund Policy Country</li>
                        </ul>
                    </div>
                    <div className="Twenty-four">
                        <p>© 2009-2024 - Agilepreppro Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.</p>
                    </div>
                </div>

                <div className="Disclaimer">
                    <h3>Disclaimer</h3>
                    <ul>
                        <li>PMP, PMI, PMBOK, CAPM, PgMP, PfMP, ACP, PBA, RMP, SP, and OPM3 are registered marks of the Project Management Institute, Inc.</li>
                    </ul>
                </div>

            </div>

        </footer>
    </div>
  )
}

export default Footer