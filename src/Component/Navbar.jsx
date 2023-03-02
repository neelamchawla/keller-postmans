import React from 'react';
import LogoWhite from "../Assests/imgs/Keller Postman Logo.svg";

function Navbar() {

    const toggleNav = () => {
        var updateElement = document.getElementById("menu-bar");
        //toggle adds a class if it's not there or removes it if it is.
        updateElement.classList.toggle("open");
    }

    return (
        <header
            id="header"
            className="headroom col-lg-12 col-md-12"
        >
            <nav className="navbar col-lg-12 col-md-12">
                <a
                    className="navbar-brand"
                    href="/"
                >
                    <img
                        src={LogoWhite}
                        alt="logo"
                    />
                </a>
                <ul className="navbar-content">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                        >
                            TEAM
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                        >
                            CASES{" "}
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
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </a>
                        <ul className="dropdown-menu">
                            <div className='navList'>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        Camp Lejeune Litigation
                                    </a>
                                    <p>Seeking Justice for Water Contamination Victims</p>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        NEC/Infant-Formula Litigation
                                    </a>
                                    <p>Representing Parents of Infants Diagnosed with Necrotizing Enterocolitis</p>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        Zantac (Ranitidine) Litigation
                                    </a>
                                    <p>Seeking Justice for Carcinogens Found in Heartburn Medication</p>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        Acetaminophen Litigation
                                    </a>
                                    <p>Seeking Justice for Children Diagnosed with Autism and/or ADHD</p>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        3M Combat Arms Litigation
                                    </a>
                                    <p>Representing Servicemembers with Hearing Loss/Damage Caused by 3M Earplugs</p>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        Paragard IUD Litigation
                                    </a>
                                    <p>Seeking Justice for Pain & Infertility Caused by the Paragard IUD</p>
                                </li>
                            </div>
                            <div>
                                <hr />
                                <li>
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        View All Cases
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </li>
                </ul>
                <div className="nav-item-others-option">
                    <p>
                        FREE CASE EVALUATION
                    </p>
                </div>

                <div className="menu-bar" id="menu-bar">
                    <div className="menu-icon" onClick={() => toggleNav()}>
                        <span></span>
                    </div>
                    <h3 className="menu-list">
                        <a href="#">Team</a><hr className='line-hr' />
                        <a href="#">Cases</a><hr className='line-hr' />
                        <a href="#">Practices</a><hr className='line-hr' />
                        <a href="#">About</a><hr className='line-hr' />
                        <a href="#">News & Insights</a><hr className='line-hr' />
                        <a href="#">Careers</a><hr className='line-hr' />
                        <a href="#">Contact</a><hr className='line-hr' />
                    </h3>
                </div>
            </nav>
        </header>
    )
}

export default Navbar