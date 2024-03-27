import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './agile.css';
import PSM from "../Img/PSM_ii.svgz";
import tesh from "../Img/mub.jpeg";
import old from "../Img/Professional-Scrum-Master-II.avif";
import { LuMinus } from "react-icons/lu";
// import { GoPlus } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
// import { RxDotFilled } from "react-icons/rx";



export const accordionInfo = [
    {
        title: "Lesson 01:Understanding and Apllying the Scrum Framework",
        text: "Empiricism",
        category: "Scrum Values",
        last: "Scrum Team",
        properties: "Events",
        brand: "Artifacts",
        carrier: "Done Increment",
        
    },
    {
        title: "Lesson 02:Developing People and Teams",
        text: "Self-Managing Teams",
        category: "Facilitation",
        last: "Leadership Styles",
        properties: "Coaching",
        brand: "Mentoring",
    },

    {
        title: "Lesson 03:Managing Products sith Agility",
        text: "Product Backlog Management",
        category: "Stakeholders",
        last: "Customers",
    },
    {
        title: "Lesson 04:Developing and Delivering Products Professionally",
        text: "Managing Technical Risk",
    },
    {
        title: "Lesson 05:Evolving the Agile Organization",
        text: "Organizational Design & Culture.",
    },
 
];




function Agile() {

    const [selected, setSelected] = useState(null);

    const toggle = (id) => {
        if (selected === id) {
          return setSelected(null);
        }
        setSelected(id);
      };

    // const toggleMenu = () => {
    //     setActive((open) => !open)
      
    // }
  
    const navigate = useNavigate();


  return (
    <div className='Agile'>

{/* <div className=" maximum">
            {accordionInfo.map((acc, i) => (
              <div
                key={i}
                className="line-border"
              >
                <label
                  className={`red-hot ${
                    selected === i ? "text-blue" : ""
                  } `}
                  onClick={() => toggle(i)}
                >
                  <span className="text-lg">{selected === i ? "-" : "+"}</span>
                  <i className="not-italic">{acc.title}</i>
                  
                </label>
                <p
                  className={`pt-4 ${
                    selected === i ? "content show" : "content"
                  }`}
                >
                  {acc.text}
                  <ul>
                    <li>
                        <div className='New-Empiricism'>
                            <RxDotFilled className='new-red' />
                            <p>Empiricism</p>
                        </div>
                    </li>
                  </ul>
                </p>
              </div>
            ))}
          </div> */}


        <div className="Simple-Learn-Container">
        <div className="Professional-Container">
            <div></div>
            <div class="Professional-Text">
                <h1>Professional Scrum Master™ - Advanced Training</h1>
             
                <div className="Discover-Text">
                    <p><span className="diverse-spann">*</span> Discover the application of Scrum in diverse scenarios through PSM-A certification</p>
                    <p><span className="diverse-spann">*</span> Enhances your ability to apply the Scrum framework to solve advanced real-world problems</p>
                    <p><span className="diverse-spann">*</span> Ensure success in your PSM-A certification exam thorough comprehensive exam support</p>
                    <p><span className="diverse-spann">*</span> Earn 16 SEUs | Exam fee included</p>
                </div>
                <Link to={'#Payment'} style={{textDecoration: 'none'}} smooth>
                    <button className='Enroll-btn'>Enroll</button>
                </Link>
            </div>
        </div>

        <div className='Unlike-Professional'>
            <h2>An Advanced Scrum Master Class</h2>
            <p>Professional Scrum Master™ - Advanced (PSM-A) course is a 2-day* advanced Scrum Master class designed to support Scrum Masters in their professional development.  (This course was previously called Professional Scrum Master™ - Advanced) The PSM-A course is intended for Scrum Masters with at least one year of experience who are looking to grow their knowledge and abilities as a Scrum Master. This course is one step in that journey. The course also includes a free attempt at the globally recognized Professional Scrum Master™ - Advanced (PSM-A) certification exam.</p>
            <p>Unlike the Professional Scrum Master (PSM) course which focuses on how to use Scrum, the Scrum framework and the role of the Scrum Master, PSM-A is an advanced course helping students to understand the stances that characterize an effective Scrum Master while diving deep into how they serve the Developers, Product Owner and organization. The course then teaches students about related practices and skills to enable them to have the right types of conversations and how to apply them to become better Scrum Masters.</p>
        </div>

        <div className="Scrum">
            <div className="Scrum-text">
                <h2>Course <span className="Overview">Overview</span></h2>
                <p>The Professional Scrum Master™ - Advanced (PSM_A) course is tailored for seasoned Scrum Masters aiming to deepen their understanding of effective Scrum Master stances. Delving into the intricate ways they support Developers, Product Owners, and the organization, this advanced course equips the learners with practices and skills to engage in meaningful conversations and enhance their abilities as Scrum Masters. </p>
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
                {/* <p>View the different Focus Areas covered within this class and others.</p> */}
                {/* <i>*  When offered in-person, this course is generally delivered over two consecutive days. When offered as a Live Virtual Class, the course may be broken up into more, shorter days.</i> */}
            </div>
        </div>

        <div className="Curriculum-Container">
            <div className="blur"></div>
            <div className="Curriculum-Container-two">
                <div className="Curriculum-two">
                    {/* <h2>Course <span class="Curriculum-span">Curriculum</span></h2> */}
                </div>
                <div className='Who-Should-Attend'>
                    <h2>Who Should Attend this class?</h2>
                    <p>The Professional Scrum Master - Advanced course is an advanced course specifically designed for experienced Scrum Masters who have a thorough understanding of the Scrum framework.  It is particularly beneficial for those people with at least one year of Scrum Master experience.</p>
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
                    <h2>Course Learning Objectives: </h2>
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
                

                <div className='Professional-Scrum-Certification'>
                    <h2>Professional Scrum Certification</h2>
                    <p>All participants completing the Professional Scrum Master - Advanced course will receive a password to attempt the Professional Scrum Master™ - Advanced (PSM-A) assessment. PSM-A class participants who attempt the PSM-A assessment within 14 days of receiving their free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.</p>
                    <p>You are also entitled to a 40% discount on the PSM-A assessment. These industry-recognized PSM certifications require a minimum passing score.</p>
                </div>

                <div className="Content">
                    <h2>Course Content</h2>
                </div>
                <div className="Professional-Container-two">
                    
                    <div className="Master" >
                        <LuMinus id="minus" />
                        {/* <i class="fa-solid fa-minus" id="minus"></i> */}
                        <p>Professional Scrum Master™ - Advanced</p>
                    </div>

                    
<div className=" maximum">
            {accordionInfo.map((acc, i) => (
              <div
                key={i}
                className="line-border"
              >
                <label
                  className={`red-hot ${
                    selected === i ? "text-blue" : ""
                  } `}
                  onClick={() => toggle(i)}
                >
                  <span className="text-lg">{selected === i ? "-" : "+"}</span>
                  <i className="not-italic">{acc.title}</i>
                  
                </label>
                <p
                  className={`pt-4 ${
                    selected === i ? "content show" : "content"
                  }`}
                >
                  <div className='green-blue'>{acc.text}</div>
                  <div className='green-blue'>{acc.category}</div>
                  <div className='green-blue'>{acc.last}</div>
                  <div className='green-blue'>{acc.properties}</div>
                  <div className='green-blue'>{acc.brand}</div>
                  <div className='green-blue'>{acc.carrier}</div>
                </p>

              </div>
            ))}
          </div>
                    
                    {/* <div className="Lesson-Container">
                        <div className='Target'>
                            <div className="Lesson">
                                <GoPlus id="plus" />
                                <p>Lesson 01:Understanding and Apllying the Scrum Framework</p>
                            </div>
                          
                        </div>
                        <div className='Target'>
                            <div className="Lesson">
                                <GoPlus id="plus" />
                                <p>Lesson 02:Developing People and Teams</p>
                            </div>
                        </div>
                        <div className='Target'>
                            <div className="Lesson">
                                <GoPlus id="plus" />
                                <p>Lesson 03:Managing Products sith Agility</p>
                            </div>
                        </div>
                        <div className='Target'>
                            <div className="Lesson">
                                <GoPlus id="plus" />
                                <p>Lesson 04:Developing and Delivering Products Professionally</p>
                            </div>
                        </div>
                        <div className='Target'>
                            <div className="Lesson">
                                <GoPlus id="plus" />
                                <p>Lesson 05:Evolving the Agile Organization</p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>

        <div className="Skills-Covered">
            <h2>Skills Covered</h2>
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
                <h3>Course <span className="Advisor-span">Trainer</span></h3>
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
                            <p>How do i get certified as Professional Scrum Master™ - Advanced?</p>
                            <IoIosArrowUp id="How-icon" />
                            {/* <i class="fa-solid fa-angle-up" id="How-icon"></i> */}
                        </div>
                        <div className="Attend-Head">
                            <p>Please follow the steps below for the certification process:</p>
                            <ul>
                                <li>Attend the two-day PSM-A training conducted by a certified trainer</li>
                                <li>Get the free password to take the PSM-A assessment</li>
                                <li>Take the PSM-A exam</li>
                                <li>Clear the exam and get PSM-A certification with lifetime validity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Scrum-Master-II-two">
                        <div className="What">
                            <p>What does the PSM-AI certification cost?</p>
                            <IoIosArrowUp id="How-icon" />
                            {/* <i class="fa-solid fa-angle-up" id="How-icon"></i> */}
                        </div>
                        <div className="USD">
                            <p>The cost of PSM-A is $250 USD.</p>
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
                {/* <h3>Download Information</h3> */}
                {/* <p>You can download the datasheet about the Professional Scrum Master - Advanced course to learn more and share with others.</p> */}
                <button className='Make-Payment-btn' onClick={() => {navigate("/payment");}}>Enroll For This Course $1,000  <FaArrowRightLong className='long-icon' /></button>
                <div className='Click-here'>
                <Link to="https://agilepreppro.com/">
                        <p>To know more about the website click here </p>
                        <MdOutlineKeyboardDoubleArrowRight className='here-icon' />
                </Link>
                </div>
                
            </div>
        </div>

        

    </div>
    </div>
  )
}

export default Agile