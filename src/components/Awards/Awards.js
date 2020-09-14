import React from 'react';

import './Awards.css';
import AwardItem from '../AwardItem/AwardItem';

const awards = [
  'Nulla vel mollis elit, sed bibendum velit', 
  'Praesent consequat mattis lacus, ac tempor quam feugiat ac', 
  'Cras sit amet ultricies mi, id facilisis arcu', 
  'Orci varius natoque penatibus et magnis dis parturient montes', 
  'Phasellus iaculis rhoncus diam' 
]

const Awards = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          
          <div className="title"><h1>AWARDS & CERTIFICATIONS</h1></div>
          
          <AwardItem item = {awards}/>
          

        </div>
      </div>
    </div>
  );
}

export default Awards;