import React from 'react';

import './Education.css';
import EduItem from '../EduItem/EduItem';

const edu = [
  {
    Instituion : 'UNIVERSITAS SUMATERA UTARA',
    Title : 'Sarjana Komputer',
  },

  {
    Instituion : 'LOREM IPSUM UNIVERSITY',
    Title : 'Bachelor of Science',
  },
  
  

  // {
  //   expName : 'REACT BASIC',
  //   expTitle : 'REACT',
  //   expFrom : 'Aug 2020',
  //   expTo : 'Present',
  //   expDesc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo non massa fringilla condimentum. Donec egestas fringilla iaculis. Curabitur pellentesque, elit quis pharetra finibus, eros lacus sollicitudin nisi, eget congue dolor est in nisi. Sed eu tincidunt nisl. Praesent luctus, risus id faucibus luctus, risus massa eleifend est, et blandit quam velit eu ex. In dui quam, porttitor quis tempor posuere, fermentum a turpis. Nam sit amet consectetur erat.',
  // },
]

const Education = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          
          <div className="title"><h1>EDUCATION</h1></div>
          
          <EduItem item = {edu}/>
          

        </div>
      </div>
    </div>
  );
}

export default Education;