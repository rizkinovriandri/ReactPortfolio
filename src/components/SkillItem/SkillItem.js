import React from 'react';

import './SkillItem.css';

const SkillItem = ({item}) => {
  return (

    <div className="card-body">
      <div className="skillList">
      {
        
        item.map((data) => (
          <>        
              
                
                  <p className="skillListItem"><i class="icon-check"></i>{data}</p>
                
              
                
            </>
          ))
      }
      </div>
    </div>

  );
}

export default SkillItem;