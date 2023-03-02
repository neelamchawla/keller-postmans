import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="footer-container">
          <h1>Call us at <span>872-264-6677</span></h1>
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="single-footer-widget pl-5">
                <h3>SITEMAP</h3>
                <ul className="list">
                  <li>
                    <a href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Cases
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Practice Areas
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      News & Insights
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Contact
                    </a>
                  </li>
                </ul>

                <h3 className='follow'>Follow us</h3>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>FEATURED CASES</h3>
                <ul className="list">
                  <li>
                    <a href="#">Camp Lejeune Litigation</a>
                  </li>
                  <li>
                    <a href="#">
                    NEC/Infant Formula Litigation
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    Acetaminophen/Tylenol Litigation
                    </a>
                  </li>
                  <li>
                    <a href="#">Zantac Litigation</a>
                  </li>
                  <li>
                    <a href="#">
                    3M Combat Arms Earplugs Litigation
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    View All Cases
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-footer-widget">
                <h3 style={{ marginLeft: "-7px" }}>OFFICES</h3>
                <ul style={{ marginLeft: "-2em" }} className="footer-contact-info">
                  <li>
                    <p>Chicago, IL</p>
                    <span className='add-span'>
                      150 N. Riverside Plaza, Suite 4100
                    <br /> Chicago, IL 60606
                      </span>
                  </li>
                  <li>
                    <p>Washington, D.C.</p>
                    <span className='add-span'>
                      1100 Vermont Avenue, N.W., 12th Floor
                    <br /> Washington, D.C. 20005
                      </span>
                  </li>
                  <li>
                    <p>Austin, TX</p>
                    <span className='add-span'>
                      111 Congress Avenue, Suite 500
                    <br /> Austin, TX 78701
                      </span>
                  </li>
                  <li>
                    <p>Miami, FL</p>
                    <span className='add-span'>
                      111 Congress Avenue, Suite 500
                    <br /> Austin, TX 78701
                      </span>
                  </li>
                  
                </ul>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  © 2022 Keller Postman LLC. All rights reserved.
                  <span className='p-3'>Design by SPINX Digital</span>
                  <span className='p-3'>Terms</span>
                  <span className='p-3'>Privacy</span>
                  <span className='p-3'>Legal Disclaimer</span>
                </p>
                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer