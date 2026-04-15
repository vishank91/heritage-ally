import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  let [settingData, SetSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    map1: import.meta.env.VITE_APP_MAP1,
    address: import.meta.env.VITE_APP_ADDRESS,
    email: import.meta.env.VITE_APP_EMAIL,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    facebook: import.meta.env.VITE_APP_FACEBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    instagram: import.meta.env.VITE_APP_INSTAGRAM,
    youtube: import.meta.env.VITE_APP_YOUTUBE
  })
  return (
    <footer id="footer" className="footer-16 footer position-relative bg-dark">

      <div className="container">

        <div className="footer-main" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-start">

            <div className="col-lg-5">
              <div className="brand-section">
                <Link to="/" className="logo d-flex align-items-center mb-2">
                  <span className="sitename text-light">{settingData.siteName}</span>
                </Link>
                <p className="text-light">Heritage Ally is your trusted destination for quality products that blend tradition with modern style, offering a seamless shopping experience with reliability, authenticity, and customer satisfaction at its core.</p>

                <div className="contact-info mt-2">
                  <div className="contact-item">
                    <Link to={settingData.map1} target='_blank'>
                      <i className="text-light bi bi-geo-alt"></i>
                      <span className='text-light'>{settingData.address}</span>
                    </Link>
                  </div>
                  <div className="contact-item">
                    <Link to={`mailto:${settingData.email}`} target='_blank'>
                      <i className="text-light bi bi-envelope"></i>
                      <span className='text-light'>{settingData.email}</span>
                    </Link>
                  </div>
                  <div className="contact-item">
                    <Link to={`tel:${settingData.phone}`} target='_blank'>
                      <i className="text-light bi bi-telephone"></i>
                      <span className='text-light'>{settingData.phone}</span>
                    </Link>
                  </div>
                  <div className="contact-item">
                    <Link to={`https://wa.me/${settingData.whatsapp}`} target='_blank'>
                      <i className="text-light bi bi-whatsapp"></i>
                      <span className='text-light'>{settingData.whatsapp}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="footer-nav-wrapper">
                <div className="row">

                  <div className="col-md-3 col-12">
                    <div className="nav-column">
                      <h6 className='text-light'>Quick Links</h6>
                      <nav className="footer-nav">
                        <Link to="/" className='text-light'>Home</Link>
                        <Link to="/about" className='text-light'>About</Link>
                        <Link to="/about" className='text-light'>Shop</Link>
                        <Link to="/about" className='text-light'>Features</Link>
                        <Link to="/about" className='text-light'>Faq</Link>
                      </nav>
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="nav-column">
                      <h6 className='text-light'>Important Links</h6>
                      <nav className="footer-nav">
                        <Link to="/about" className='text-light'>Testimonials</Link>
                        <Link to="/about" className='text-light'>ContactUs</Link>
                        <Link to="/about" className='text-light'>Privacy-Policy</Link>
                        <Link to="/about" className='text-light'>Term and Conditions</Link>
                      </nav>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="nav-column">
                      <h6 className='text-light'>Subscribe Our Newsletter Service</h6>
                      <p className='text-light my-3'>Subscribe to the Heritage Ally newsletter to stay updated with the latest arrivals, exclusive offers, and special discounts. Get style inspiration and never miss out on exciting deals delivered straight to your inbox.</p>
                      <div>
                        <form>
                          <div className="btn-group w-100">
                            <input type="email" name="email" placeholder='Enter Your Email Address' className='form-control rounded-0 rounded-start' />
                            <button className='btn btn-dark border '>Subscribe</button>
                          </div>
                        </form>
                      </div>
                      <div className='mt-3'>
                        <div className="social-links d-flex align-items-center">
                        <Link to={settingData.facebook} target="_blank" className="text-light me-3"><i className="bi bi-facebook"></i></Link>
                        <Link to={settingData.twitter} target="_blank" className="text-light me-3"><i className="bi bi-twitter-x"></i></Link>
                        <Link to={settingData.instagram} target="_blank" className="text-light me-3"><i className="bi bi-instagram"></i></Link>
                        <Link to={settingData.linkedin} target="_blank" className="text-light me-3"><i className="bi bi-linkedin"></i></Link>
                        <Link to={settingData.youtube} target="_blank" className="text-light me-3"><i className="bi bi-youtube"></i></Link>
                      </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="footer-bottom border-top" style={{marginTop:-80}}>
        <div className="container">
          <div className="bottom-content" data-aos="fade-up" data-aos-delay="300">
            <div className="row align-items-center">

              <div className="col-lg-6">
                <div className="copyright">
                  <p className='text-light'>© <span className="sitename text-light">{settingData.siteName}</span>. All rights reserved.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="legal-links">
                  <Link to="/" className='text-light'>Home</Link>
                  <Link to="/about" className='text-light'>About</Link>
                  <Link to="/shop" className='text-light'>Shop</Link>
                  <Link to="/feature" className='text-light'>Features</Link>
                  <Link to="/privacy-policy" className='text-light'>Privacy Policy</Link>
                  <Link to="/tc" className='text-light'>Terms of Service</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>

  )
}
