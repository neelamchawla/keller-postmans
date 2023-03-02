import React from 'react';
import Dot1 from "../Assests/imgs/Ellipse 3.svg";
import Dot2 from "../Assests/imgs/Ellipse 4.svg";
import Dot3 from "../Assests/imgs/Ellipse 5.svg";

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Main({ dataList }) {
    console.log(dataList.home_hero_section);
    console.log(dataList.top_text_slider);
    return (
        <>
            <div className="main container-fluid col-lg-12 col-md-12">
                <div className="sm-banner col-lg-3 col-md-3">
                    <p className='sm-banner-content' >
                    <Carousel axis="horizontal" preventMovementUntilSwipeScrollTolerance="false"
                        // width={1200}
                        infiniteLoop={true}
                        emulateTouch={true}
                        interval="7000"
                        autoPlay="true"
                    >
                        {dataList.top_text_slider.map(({ add_text }) => {
                        return (<>
                                <div dangerouslySetInnerHTML={{__html: add_text}}></div>
                        </>)
                    })}
                    </Carousel>
                    </p>
                    {/* <div>
                        <img
                            src={Dot1}
                            alt="image"
                            style={{ marginRight: "6px" }}
                        />
                        <img
                            src={Dot2}
                            alt="image"
                            style={{ marginRight: "6px" }}
                        />
                        <img
                            src={Dot3}
                            alt="image"
                            style={{ marginRight: "6px" }}
                        />
                    </div> */}
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-9 p-0">
                        <div className="img-gradient">
                            <div className="bigdata-analytics-banner" style={{ backgroundImage: `url(${dataList.home_hero_section.hero_image.url})` }}>
                                <div className="bigdata-analytics-content" >
                                    <h1 dangerouslySetInnerHTML={{__html: dataList.home_hero_section.title}}></h1>
                                    <p>
                                        {dataList.home_hero_section.short_description}
                                    </p>
                                    <p
                                        className="line-hero"
                                    >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 p-0">
                        <div className="bigdata-content">
                            <>{dataList.home_hero_section.hero_stats.map(({ title, subtitle }) => {
                                return (<>
                                    <h2>{title}</h2>
                                    <p>{subtitle}</p>
                                    <hr />
                                </>)
                            })}</>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main