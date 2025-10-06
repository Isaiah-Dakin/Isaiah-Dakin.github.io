import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import "../style/collapsible.css"

function Collapsible(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    };

    const btnStyle = {
        transition: 'all 0.25s ease',
        transform: isCollapsed ? 'rotateZ(0deg)' : 'rotateZ(90deg)',
    }

    return (
    <div className='parent'>
        <div className='btn-parent' title='collapse this panel.'>
            <div className="btn" style={btnStyle} onClick={toggleCollapse} />
        </div>
        <Collapse isOpened={!isCollapsed}>
            {props.children}
        </Collapse>
    </div>
    );
}

export default Collapsible;