import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { TbLetterXSmall } from "react-icons/tb";


const Payment = () => {
  return (
    <div className='Simple-Learn-Container-payment'>
      <div className='Select-Course-container'>
        <div className='Select-Course'>
          <div className='one-span-container'>
            <p><span className='one-span'>1</span></p>
          </div>
          <p>Select Course</p>
        </div>
        
        <div>
          <form>
            <div className='form-name'>
              <label className='Label-first-name'>Name<span className='firstnmae-span'>*</span></label>
              <div className='form-name-faris'>
                <div className='form-label'>
                  <input type='text' className='Firstnmae' />
                  <label className='first-name'>First</label>
                </div>
                <div className='form-input'>
                  <input type='text' className='Firstnmae' />
                  <label className='first-name'>Last</label>
                </div>
              </div>
            </div>
            <div className='email-lab'>
              <label className='Label-first-name'>Email<span className='firstnmae-span'>*</span></label>
              <input type='email' className='email' />
            </div>
            <div className='SAFe-container'>
              <h4>Course Applying For<span className='Applying-span'>*</span></h4>
              <div className='SAFe'>
                <p>PSM-A - $1,000.00</p>
                <div className='cancel-down'>
                  <TbLetterXSmall className='caret-down-x' />
                  <FaCaretDown className='caret-down' />
                </div>
              </div>
              <div className='last-anchor'>
                <a href='/'>Proceed To Payment</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment