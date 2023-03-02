import React from 'react';
import Case1 from "../Assests/imgs/Case Image 1.jpg";

function Case({dataList}) {
    console.log(dataList.case_section);
    return (
        <>
            <div className="funfacts-area bg-image ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Case Highlights</h2>
                    </div>
                    <div className="row">
                    {dataList.case_section.home_cases.map(({ post_title }) => {
                        return (<>
                        <div className="col-lg-4 col-md-4 col-4 col-sm-12 pb-5">
                            <div className="case-content">
                                <img
                                    src={Case1}
                                    alt="image"
                                />
                                <h3>{post_title}</h3>
                                <p>Seeking Justice for Water Contamination Victims</p>
                            </div>
                        </div>
                        </>)
                    })}
                    </div>
                </div>
            <a className='case-view' href={dataList.case_section.link_url} >{dataList.case_section.link_text}</a>
            </div>
        </>
    )
}

export default Case