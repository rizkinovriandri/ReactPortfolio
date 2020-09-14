import React from 'react';

import './Skills.css';
import SkillItem from '../SkillItem/SkillItem';

const skills = [
  'HTML5', 'CSS3', 'Javascript', 'React', 'Python' 
]

const Skills = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          
          <div className="title"><h1>SKILLS</h1></div>
          <p className="h5 text-muted">Programming Languages & Tools</p>
          <SkillItem item = {skills}/>
          

        </div>
      </div>
    </div>
  );
}

export default Skills;