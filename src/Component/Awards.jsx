import React from 'react';

function Awards({ dataList }) {
  console.log(dataList.award_section);

  return (
    <div className='marquee-imgs'>
      <marquee scrollamount="15" direction="Left">
      {dataList.award_section.map(({ select_award }) => {
        return (<>
            <img
              src={select_award.url}
              alt="image"
            />
        </>)
      })}
      </marquee>
    </div>
  )
}

export default Awards;