import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "./footer.css"
export const Footer = () => {
  return (
    <>
      <footer className='footer__section    boxItems  mt-5 pt-4 pb-4 bg-white b-1'>
        <div className='footer__container d-flex align-items-center justify-content-between flex-wrap'>
          <p className="mb-0">E-hospital Pharmacy</p>
          <div className='social '>
            <div className="social__container d-flex justify-content-center column-gap-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <BsFacebook className='icon' />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <RiInstagramFill className='icon' />
    </a>
    <a href="https://twitter.co" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle className='icon' />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className='icon' />
    </a>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
}