import React from 'react';

import './AwardItem.css';

const AwardItem = ({item}) => {
  return (

    <div className="card-body">
      <div className="awardList">
      {
        
        item.map((data) => (
          <>        
              
                  <p className="awardListItem"><i class="icon-check"></i>{data}</p>
            </>
          ))
      }
      </div>
    </div>

  );
}

export default AwardItem;