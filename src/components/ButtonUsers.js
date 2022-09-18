import React from 'react';
import Users from './Users';



const ButtonUsers = () => {

    return (
        <div className='ButtonComponents'>
            <div>
            <button type="button" className="btn" onclick={Users}>
            Users
            </button>
            </div>
        </div>
    );
}

export default ButtonUsers;