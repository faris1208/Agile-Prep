import React from 'react'
import Lade from "../Img/WhatsApp Image 2024-03-23 at 10.44.52.jpeg";
// import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
// import { TbGridDots } from "react-icons/tb";

function Navbar() {
    const navigate = useNavigate();

  return (
    <div className='Simple-Learn-Container'>
        <nav>
            <div className="simpli-nav">
                <div className="First">
                    <div className="Menu-Img">
                    <img src={Lade} alt="" className="Lade-image" width="100%"  onClick={() => {navigate("/");}} />
                    </div>
                </div>
                <div className="second">
                    {/* <div className="Courses">
                        <TbGridDots id="Square" />
                        <p>All Courses</p>
                    </div> */}
                    {/* <div className="Menu">
                        <RxHamburgerMenu id="hamburger"  />
                    </div> */}
                    {/* <button className="Login-btn">Log in</button> */}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar