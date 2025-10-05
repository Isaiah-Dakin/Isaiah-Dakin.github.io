import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import "../style/collapsible.css"

function Collapsible(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    };

    return (
    <div className='parent'>
        <div className='btn-parent'>
            <button onClick={toggleCollapse}>
                {isCollapsed ? '△' : '▽'}
            </button>
        </div>
        <Collapse isOpened={!isCollapsed}>
            {props.children}
        </Collapse>
    </div>
    );
}

export default Collapsible;