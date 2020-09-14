import React from 'react';

import './Experience.css';
import ExpItem from '../ExpItem/ExpItem';

const exp = [
  {
    expName : 'GITHUB CAMPUS EXPERT',
    expTitle : 'GITHUB',
    expFrom : 'August 2018',
    expTo : 'Present',
    expDesc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo non massa fringilla condimentum. Donec egestas fringilla iaculis. Curabitur pellentesque, elit quis pharetra finibus, eros lacus sollicitudin nisi, eget congue dolor est in nisi.',
  },
  
  {
    expName : 'OPENSOURCE DEVELOPER INTERN',
    expTitle : 'FOSSASIA',
    expFrom : 'June 2019',
    expTo : 'Present',
    expDesc : 'Cras rhoncus consectetur enim sed maximus. Sed ligula lorem, eleifend non enim nec, lobortis porttitor velit. Aenean ut nibh at turpis tempus mattis. Sed rutrum nunc lorem, sit amet malesuada justo facilisis sit amet. Integer mattis ligula eu viverra dignissim. Duis enim mauris, viverra sed bibendum vel, aliquet vel nisi. Duis porttitor vehicula elementum. Praesent sed bibendum odio',
  },

  {
    expName : 'SOFTWARE DEVELOPER INTERN',
    expTitle : 'HASURA',
    expFrom : 'December 2018',
    expTo : 'January 2019',
    expDesc : 'Sed cursus ultrices justo, in lobortis mi efficitur eu. Sed tempor nisi efficitur eros pulvinar ultrices. Fusce ullamcorper neque nec nibh egestas rutrum. Sed bibendum nisl dui, sed mattis nisi pulvinar non.',
  },

  // {
  //   expName : 'REACT BASIC',
  //   expTitle : 'REACT',
  //   expFrom : 'Aug 2020',
  //   expTo : 'Present',
  //   expDesc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo non massa fringilla condimentum. Donec egestas fringilla iaculis. Curabitur pellentesque, elit quis pharetra finibus, eros lacus sollicitudin nisi, eget congue dolor est in nisi. Sed eu tincidunt nisl. Praesent luctus, risus id faucibus luctus, risus massa eleifend est, et blandit quam velit eu ex. In dui quam, porttitor quis tempor posuere, fermentum a turpis. Nam sit amet consectetur erat.',
  // },
]

const Experience = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          
          <div className="title"><h1>EXPERIENCES</h1></div>
          
          <ExpItem item = {exp}/>
          

        </div>
      </div>
    </div>
  );
}

export default Experience;