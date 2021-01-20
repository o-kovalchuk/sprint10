import React from 'react';
import './menu.css';

function MenuItem(props) {
    const classActive = props.isActive ? 'active' : '';
    return (
        <button
            type="button"
            onClick={() => props.onClick()}
            className={`Menu-button ${classActive}`}>{props.name}</button>
    );
}

export default MenuItem;
