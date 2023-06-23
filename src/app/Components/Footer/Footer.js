import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <img src='about.webp' className='footerimg'></img>

      <div className='footer_text_upper'>
            <div className='footer_text_under'>
                <div className='footer_logo'>
                    <img src='footer_logo.svg' className='footer_logo_img'></img>
                </div>

                <div className='footer_bottom_1'>
                    <div className='footer_bottom_2'>
                        <div className='company'>
                            <p className='company_p'>COMPANY</p>
                            <a>About Us</a>
                            <a>Partner with us</a>
                            <a>Blog</a>
                        </div>
                        <div className='company'>
                            <p className='company_p'>LEGAL</p>
                            <a>Privacy Policy</a>
                            <a>Terms of Use</a>
                        </div>
                        <div className='company'>
                            <p className='company_p'>CONTACT</p>
                            <a><img src='EmailIcon.webp' style={{width: 20, paddingRight: 10}}></img>hi@zetapp.in</a>
                            <a><img src='PhoneIcon.webp' style={{width: 20, paddingRight: 10}}></img>+91-7417274072</a>
                        </div>
                        <div className='company'>
                            <p className='company_p'>SOCIALS</p>
                            <a>
                                <img src='lkin.svg' style={{paddingRight:16, cursor: "pointer"}}></img>
                                <img src='insta.svg' style={{paddingRight:16, cursor: "pointer"}}></img>
                                <img src='face.svg' style={{paddingRight:16, cursor: "pointer"}}></img>
                                <img src='tele.svg' style={{paddingRight:16, cursor: "pointer"}}></img>
                                <img src='what.svg' style={{paddingRight:16, cursor: "pointer"}}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Footer
