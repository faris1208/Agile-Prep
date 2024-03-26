import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './agile.css';
import Lade from "../Img/WhatsApp Image 2024-03-23 at 10.44.52.jpeg";
import PSM from "../Img/PSM_ii.svgz";
import tesh from "../Img/mub.jpeg";
import old from "../Img/Professional-Scrum-Master-II.avif";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";



function Agile() {

    const navigate = useNavigate();


  return (
    <div className='Agile'>
        <div className="Simple-Learn-Container">
        <nav>
            <div className="simpli-nav">
                <div className="First">
                    <div className="Menu-Img">
                    <img src={Lade} alt="" className="Lade-image" width="100%" />
                        {/* <img src="./Img/WhatsApp Image 2024-03-23 at 10.44.52.jpeg" alt="" class="simpli" width="100%"> */}
                    </div>
                </div>
                <div className="second">
                    <div className="Courses">
                        <TbGridDots id="Square" />
                        {/* <i class="fa-solid fa-table-cells" id="Square"></i> */}
                        <p>All Courses</p>
                    </div>
                    <div className="Menu">
                        <RxHamburgerMenu id="hamburger"  />
                        {/* <i class="fa-solid fa-bars" id="hamburger" ></i> */}
                    </div>
                    <button className="Login-btn">Log in</button>
                </div>
            </div>
        </nav>

        <div className="Professional-Container">
            <div></div>
            <div class="Professional-Text">
                <h1>Level Up Your Potential with Our PSM II Certification Training! </h1>
             
                <div className="Discover-Text">
                    <p><span className="diverse-spann">*</span> Discover the application of Scrum in diverse scenarios through PSM II certification</p>
                    <p><span className="diverse-spann">*</span> Enhances your ability to apply the Scrum framework to solve advanced real-world problems</p>
                    <p><span className="diverse-spann">*</span> Ensure success in your PSM II certification exam thorough comprehensive exam support</p>
                    <p><span className="diverse-spann">*</span> Earn 16 SEUs | Exam fee included</p>
                </div>
                <Link to={'#Payment'} style={{textDecoration: 'none'}} smooth>
                    <button className='Enroll-btn'>Eroll</button>
                </Link>
            </div>
        </div>

        <div className='Unlike-Professional'>
            <h2>An Advanced Scrum Master Class</h2>
            <p>Professional Scrum Master™ - Advanced (PSM-A) course is a 2-day* advanced Scrum Master class designed to support Scrum Masters in their professional development.  (This course was previously called Professional Scrum Master II) The PSM-A course is intended for Scrum Masters with at least one year of experience who are looking to grow their knowledge and abilities as a Scrum Master. This course is one step in that journey. The course also includes a free attempt at the globally recognized Professional Scrum Master II (PSM II) certification exam.</p>
            <p>Unlike the Professional Scrum Master (PSM) course which focuses on how to use Scrum, the Scrum framework and the role of the Scrum Master, PSM-A is an advanced course helping students to understand the stances that characterize an effective Scrum Master while diving deep into how they serve the Developers, Product Owner and organization. The course then teaches students about related practices and skills to enable them to have the right types of conversations and how to apply them to become better Scrum Masters.</p>
        </div>

        <div className="Scrum">
            <div className="Scrum-text">
                <h2>Course <span className="Overview">Overview</span></h2>
                <p>The Professional Scrum Master II (PSM II) course is tailored for seasoned Scrum Masters aiming to deepen their understanding of effective Scrum Master stances. Delving into the intricate ways they support Developers, Product Owners, and the organization, this advanced course equips the learners with practices and skills to engage in meaningful conversations and enhance their abilities as Scrum Masters. </p>
                <p>Geared towards individuals with at least one year experience and a solid grasp of the Scrum Framework, PSM II offers a platform for experienced Scrum Masters to expand their expertise and capabilities in their role. </p>
            </div>
            <div className="Accredited">
                <h3>Accredited By</h3>
                <div className="PSM-img">
                    <img src={PSM} alt="" className="Lade-image" width="100%" />
                    {/* <img src="./Img/PSM_ii.svgz" class="PSM" alt=""> */}
                </div>
            </div>
        </div>

        <div className='Teacher'>
            <div className='Facilitator'>
                <h2>Course <span className="Overview">Overview</span></h2>
                <p>Over the 2 days*, students will learn about areas critical to growing as a successful Scrum Master such as how the principles and values of Scrum help guide Scrum Masters in the decisions they make and how the Scrum Master can help change the environment of Scrum Teams, creating an environment for agility to thrive. The Scrum Master role is complex and often, a Scrum Master must be able to apply different stances in order to be effective, such as:</p>
                <ul>
                    <li>The Scrum Master as a Teacher</li>
                    <li>The Scrum Master as a Coach & Mentor</li>
                    <li>The Scrum Master as a Facilitator</li>
                    <li>The Scrum Master as a Change Agent</li>
                </ul>
            </div>
            <div className='PST'>
                <p>As a Scrum Master, being able to identify, and effectively apply, which stance would benefit your team the most depending on the situation or circumstance could prove to be the key to the success of your team.</p>
                <p>As a Scrum Master, part of your role is to help management and other stakeholders across your organization understand the benefits of Scrum and Agile. Therefore, it is imperative that you have the information and background that is needed to gain credibility in order to be an effective change agent.  Throughout the class, your PST will provide stories, exercises, facilitation techniques (such as “Liberating Structures”), resources and more.</p>
                <p>There will also be time in class for the Professional Scrum Trainer (PST) to provide coaching on challenges that you and your classmates may be experiencing today or may in the future.</p>
                <p>View the different Focus Areas covered within this class and others.</p>
                <i>*  When offered in-person, this course is generally delivered over two consecutive days. When offered as a Live Virtual Class, the course may be broken up into more, shorter days.</i>
            </div>
        </div>

        <div className="Curriculum-Container">
            <div className="blur"></div>
            <div className="Curriculum-Container-two">
                <div className="Curriculum-two">
                    <h2>Course <span class="Curriculum-span">Curriculum</span></h2>
                </div>
                <div className="Eligibility">
                    <h3>Who is this course for?</h3>
                    <p>Scrum Masters with extensive experience and a deep understanding of the Scrum Framework. </p>
                    <ul>
                        <li>Project managers </li>
                        <li>Scrum managers </li>
                        <li>Scrum team members </li>
                        <li>Developers </li>
                        <li>Product owners </li>
                        <li>Software development managers</li>
                    </ul>
                </div>
                <div className="requisites">
                    <h3>Course Learning Objectives: </h3>
                    <ul>
                        <li>What practices, tools, skills and stances make an effective Scrum Master</li>
                        <li>How the Scrum principles and values help guide Scrum Masters in the decisions they make</li>
                        <li>How the Scrum Master acts as a servant-leader and improve their ability in this role</li>
                        <li>What the Scrum Master can do to support Developers and Product Owners to become more effective</li>
                        <li>Ways that the Scrum Master can help to change the environment making it more conducive for Scrum Teams to be successful with greater agility</li>
                        <li>Provide tips and techniques for the Scrum Master to work with the rest of the organization in support of their Scrum Teams</li>
                        <li>Improve effects on the organization of a successful Scrum Master</li>
                        <li>Dealing with team conflict</li>
                        <li>Removing impediments</li>
                        <li>Communicating the importance of a "Done" Increment</li>
                        <li>How to support the Scrum Team</li>
                        <li>Understanding the challenges of middle management</li>
                    </ul>
                    {/* <div className="Register">
                        <button className="Register-btn">Register</button>
                    </div> */}
                </div>
                <div className='Who-Should-Attend'>
                    <h2>Who Should Attend this class?</h2>
                    <p>The Professional Scrum Master - Advanced course is an advanced course specifically designed for experienced Scrum Masters who have a thorough understanding of the Scrum framework.  It is particularly beneficial for those people with at least one year of Scrum Master experience.</p>
                </div>

                <div className='Professional-Scrum-Certification'>
                    <h2>Professional Scrum Certification</h2>
                    <p>All participants completing the Professional Scrum Master - Advanced course will receive a password to attempt the Professional Scrum Master II (PSM II) assessment. PSM II class participants who attempt the PSM II assessment within 14 days of receiving their free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.</p>
                    <p>You are also entitled to a 40% discount on the PSM III assessment. These industry-recognized PSM certifications require a minimum passing score.</p>
                </div>

                <div className="Content">
                    <h3>Course Content</h3>
                </div>
                <div className="Professional-Container-two">
                    <div className="Master">
                        <LuMinus id="minus" />
                        {/* <i class="fa-solid fa-minus" id="minus"></i> */}
                        <p>Professional Scrum Master II</p>
                    </div>
                    
                    <div className="Lesson-Container">
                        <div className="Lesson">
                            <GoPlus id="plus" />
                            {/* <i class="fa-solid fa-plus" id="plus"></i> */}
                            <p>Lesson 01:Understanding and Apllying the Scrum Framework</p>
                        </div>
                        <div className="Lesson">
                            <GoPlus id="plus" />
                            {/* <i class="fa-solid fa-plus" id="plus"></i> */}
                            <p>Lesson 02:Developing People and Teams</p>
                        </div>
                        <div className="Lesson">
                            <GoPlus id="plus" />
                            {/* <i class="fa-solid fa-plus" id="plus"></i> */}
                            <p>Lesson 03:Managing Products sith Agility</p>
                        </div>
                        <div className="Lesson">
                            <GoPlus id="plus" />
                            {/* <i class="fa-solid fa-plus" id="plus"></i> */}
                            <p>Lesson 04:Developing and Delivering Products Professionally</p>
                        </div>
                        <div className="Lesson">
                            <GoPlus id="plus" />
                            {/* <i class="fa-solid fa-plus" id="plus"></i> */}
                            <p>Lesson 05:Evolving the Agile Organization</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="Skills-Covered">
            <h3>Skills Covered</h3>
            <div className="Advanced-heading">
                <div className="Advanced">
                    <GoDotFill id="dot" />
                    {/* <i class="fa-solid fa-circle" id="dot"></i> */}
                    <p>Advanced Scrum Principles</p>
                </div>
                <div className="Advanced">
                    <GoDotFill id="dot" />
                    {/* <i class="fa-solid fa-circle" id="dot"></i> */}
                    <p>Servant Leadership</p>
                </div>
                <div className="Advanced">
                    <GoDotFill id="dot" />
                    {/* <i class="fa-solid fa-circle" id="dot"></i> */}
                    <p>Scrum Terminologies</p>
                </div>
                {/* <a href="" className="more-b">VIEW MORE</a> */}
                <div className="Advanced">
                    <GoDotFill id="dot" />
                    {/* <i class="fa-solid fa-circle" id="dot"></i> */}
                    <p>Scrum Events</p>
                </div>
                <div className="Advanced">
                    <GoDotFill id="dot" />
                    {/* <i class="fa-solid fa-circle" id="dot"></i> */}
                    <p>Product Delivery</p>
                </div>
                <div className="Advanced">
                    <GoDotFill id="dot" />
                    {/* <i class="fa-solid fa-circle" id="dot"></i> */}
                    <p>Scrum Framework</p>
                </div>
            </div>
            {/* <a href="" className="more-a">VIEW MORE</a> */}
        </div>

        <div className="Advisor-Container">
            <div className="Advisor-text">
                <h3>Course <span className="Advisor-span">Advisor</span></h3>
            </div>
            <div className="Venkatesh-Container">
                <div className="Venkatesh">
                    <div className="tesh">
                        <img src={tesh} alt="" className="Lade-image" width="100%" />
                        {/* <img src="./Img/mub.jpeg" alt="" class="tesh-img" width="100%"> */}
                    </div>
                    <h3>Sam Adesoga</h3>
                    <h4>Principal Coach and Lead Trainer</h4>
                    <ul>
                        <li>An agnostic Agile Practitioner and Professional Scrum Trainer with Scrum.org</li>
                        <li>Work experience includes Developer, Software Developer in Test, Test and Release Manager, Scrum Master and recently as an Enterprise Agile Coach</li>
                        <li>Using agile frameworks as a foundation, Sam is interested in helping individuals, teams and whole organizations develop the mindset and culture required to succeed in a VUCA world.</li>
                        <li>Total years of Experience working and delivering products using Agile Frameworks - 17 years.</li>
                    </ul>
                    <div className="Twitter">
                        <i class="fa-brands fa-twitter" id="Linkedin" ></i>
                        <i class="fa-brands fa-linkedin-in" id="Linkedin"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="Certification-container">
            <h2>Exam & <span className="Certification-span">Certification</span></h2>
            <div className="Spare-flex">
                <div className="Spare">
                    <img src={old} alt="" className="Lade-image" width="100%" />
                    {/* <img src="./Img/Professional-Scrum-Master-II.avif" alt="" width="100%"> */}
                </div>
                <div className="Scrum-Master-II-Container">
                    <div className="Scrum-Master-II">
                        <div className="How">
                            <p>How do i get certified as Professional Scrum Master II?</p>
                            <IoIosArrowUp id="How-icon" />
                            {/* <i class="fa-solid fa-angle-up" id="How-icon"></i> */}
                        </div>
                        <div className="Attend-Head">
                            <p>Please follow the steps below for the certification process:</p>
                            <ul>
                                <li>Attend the two-day PSM II training conducted by a certified trainer</li>
                                <li>Get the free password to take the PSM II assessment</li>
                                <li>Take the PSM II exam</li>
                                <li>Clear the exam and get PSM II certification with lifetime validity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Scrum-Master-II-two">
                        <div className="What">
                            <p>What does the PSM II certification cost?</p>
                            <IoIosArrowUp id="How-icon" />
                            {/* <i class="fa-solid fa-angle-up" id="How-icon"></i> */}
                        </div>
                        <div className="USD">
                            <p>The cost of PSM II is $250 USD.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="FAQs-Container">
            <div className="grayish">
                <div className="FAQs-heading-one">
                    <h2>FAQs</h2>
                </div>
            </div>
            <div className="FAQs-Container-two">
                <div className="FAQs-heading">
                    <div className="options">
                        <p>What payment options are available?</p>
                        <IoIosArrowUp id="How-icon" />
                        {/* <i class="fa-solid fa-angle-up" id="How-icon"></i> */}
                    </div>
                    <div className="MasterCard-Text">
                        <p>Payments can be made using any of the following options. You will be emailed a receipt after the payment is made.</p>
                        <ul>
                            <li>Visa credit or debit card</li>
                            <li>MasterCard</li>
                            <li>American Express</li>
                            <li>Diner’s Club</li>
                            <li>PayPal</li>
                        </ul>
                    </div>
                </div>
                <div className="training-container">
                    <div className="training">
                        <p>Where will be the training held?</p>
                        <IoIosArrowDown id="down-icon" />
                        {/* <i class="fa-solid fa-chevron-down" id="down-icon"></i> */}
                    </div>
                    <div className="training">
                        <p>Do you provide transportation and refreshments with the training?</p>
                        <IoIosArrowDown id="down-icon" />
                        {/* <i class="fa-solid fa-chevron-down" id="down-icon"></i> */}
                    </div>
                    <div className="training">
                        <p>Can i change the city,location and date after enrolling for any classroom training?</p>
                        <IoIosArrowDown id="down-icon" />
                        {/* <i class="fa-solid fa-chevron-down" id="down-icon"></i> */}
                    </div>
                    <div className="training">
                        <p>Can i cancel my enrollment? Will i get a refund?</p>
                        <IoIosArrowDown id="down-icon" />
                        {/* <i class="fa-solid fa-chevron-down" id="down-icon"></i> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="Related-Programs-container">
            <div className="Related-Programs">
                <h2>Related <span className="Related-Programs-span">Programs</span></h2>
            </div>
            <div></div>
            <div className="ScrumMaster-container">
                <div className="ScrumMaster-contents">
                    <h4>Certified ScrumMaster (CSM)</h4>
                    <div className="Advanced-two">
                        <p>Advanced</p>
                    </div>
                    <div className="Fondational">
                            {/* <i class="fa-solid fa-star" id="color-star"></i> */}
                            <IoMdStar id="color-star" />
                            <p>4.40 (8471 Ratings)</p>
                        <div className="Ratings-Texts-two">
                            <p>39000 Learners</p>
                        </div>
                    </div>
                </div>
                <div className="ScrumMaster-contents">
                    <h4>Professional Scrum Producut Owner</h4>
                    <div className="Advanced-two">
                        <p>Fondational</p>
                    </div>
                    <div className="Fondational">
                            {/* <i class="fa-solid fa-star" id="color-star"></i> */}
                            <IoMdStar id="color-star" />
                            <p>4.40 (8471 Ratings)</p>
                        <div className="Ratings-Texts-two">
                            <p>39000 Learners</p>
                        </div>
                    </div>
                </div>
                <div className="ScrumMaster-contents">
                    <h4>Leading SAFe 6 training with SAFe Agilist Certification</h4>
                    <div className="Advanced-two">
                        <p>Fondational</p>
                    </div>
                    <div className="Fondational">
                            {/* <i class="fa-solid fa-star" id="color-star"></i> */}
                            <IoMdStar id="color-star" />
                            <p>4.40 (8471 Ratings)</p>
                        <div className="Ratings-Texts-two">
                            <p>39000 Learners</p>
                        </div>
                    </div>
                </div>
                <div className="ScrumMaster-contents">
                    <h4>Professional ScrumMaster</h4>
                    <div className="Advanced-two">
                        <p>Advanced</p>
                    </div>
                    <div className="Fondational">
                            {/* <i class="fa-solid fa-star" id="color-star"></i> */}
                            <IoMdStar id="color-star" />
                            <p>4.40 (8471 Ratings)</p>
                        <div className="Ratings-Texts-two">
                            <p>39000 Learners</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='Download-Information-container' id='Payment'>
            <div className='Download-Information'>
                <h3>Download Information</h3>
                <p>You can download the datasheet about the Professional Scrum Master - Advanced course to learn more and share with others.</p>
                <button className='Make-Payment-btn' onClick={() => {navigate("/payment");}}>Make Payment</button>
                <div className='Click-here'>
                    <a href='/'>
                        <p>To know more about the website click here </p>
                        <MdOutlineKeyboardDoubleArrowRight className='here-icon' />
                    </a>
                </div>
                
            </div>
        </div>

        <footer>
            <div className="footer-nav">
                <div className="Simplilearn-Solution">
                    <p>© 2009-2024-Simplilearn Solution. </p>
                    <i class="fa-solid fa-chevron-down" id="fa-down"></i>
                </div>
            </div>

            <div className="Footer-container">
                <div className="Refer-and-Earn-heading">
                    <div className="Refer-and-Earn">
                        <p>Follow us!</p>
                        <button className="Refer-btn">Refer and Earn</button>
                        <div class="location-arrow">
                            {/* <i class="fa-brands fa-facebook-f" id="facebook"></i> */}
                            <CiFacebook id="facebook" />
                            <FaTwitterSquare id="facebook"/>
                            <FaYoutube id="youtube" />
                            <FaLinkedin id="facebook" />
                            <FaLocationArrow id="facebook" />
                            <FaInstagramSquare id="youtube" />
                        </div>
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
                        <p>© 2009-2024 - Simplilearn Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.</p>
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
    </div>
  )
}

export default Agile