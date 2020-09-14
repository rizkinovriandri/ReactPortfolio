import React from 'react';

import './MainMenu.css';

const MainMenu = ({txtMenu}) => {
    return (
        <div>
            
            
        

            {
                        txtMenu.map((item) => (
                            <p className="mainMenu">{item}</p>
                        ))
                    }

        </div>
    );
}

export default MainMenu;