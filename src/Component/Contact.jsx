import React, { useState } from 'react';
import FinalCTA from "../Assests/imgs/FinalCTAImage.jpg";

function Contact({ dataList }) {
    console.log(dataList);

    return (
        <div className='contact'>
            <h2>Start Your Case Today</h2>
            <div className="contact-container container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                        <img
                            className="contact-banner"
                            src={FinalCTA}
                            alt="image"
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 p-0">
                        <div className="contact-form">
                            <form>
                                <fieldset className="row align-items-center g-3" >
                                    <label className="col-lg-12 col-md-12">
                                        <span className='full-name'>Full Name</span>
                                        <input value="Jimmy McGill" />
                                    </label>
                                </fieldset>
                                <fieldset className="row align-items-center g-3" >
                                    <label className="col-lg-6 col-md-12">
                                        <input placeholder="Email Address" />
                                    </label>
                                    <label className="col-lg-6 col-md-12">
                                        <input placeholder="Phone Number" />
                                    </label>
                                </fieldset>
                                <fieldset className="row align-items-center g-3" >
                                    <label className="col-lg-6 col-md-12">
                                        <input placeholder="Zip Code" />
                                    </label>
                                    <label className="col-lg-6 col-md-12">
                                        <select>
                                            <option value="">--Select Case--</option>
                                            <option value="1">Camp Lejeune Litigation</option>
                                            <option value="2">NEC/Infant Formula Litigation</option>
                                            <option value="3">3M Combat Arms Earplugs Litigation</option>
                                            <option value="4">Acetaminophen Litigation</option>
                                            <option value="5">Zantac Litigation</option>
                                            <option value="6">Other</option>
                                        </select>
                                    </label>
                                </fieldset>
                                <fieldset className="row align-items-center g-3" >
                                    <label className="col-lg-12 col-md-12">
                                        <input placeholder="Describe Your Issue" />
                                    </label>
                                </fieldset>
                                <button type="submit" className='submit-form'>Submit free case evaluation</button>
                            </form>
                            <p className='mb-5' style={{ color: "#49545F" }}>By submitting, you agree to our <span className='terms'>Terms & Privacy Policy.</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact