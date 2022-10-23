import React from 'react'
import Placeholder from '../img/placeholder.svg'

function Header() {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <button>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                    <div>Back to results</div>
                </button>
            </div>
            <div className='header-right'>
                <button className='job-btn'>
                    <div>Post Job</div>
                </button>
                <button className="notification-btn">
                    <span class="material-symbols-outlined">
                        notifications
                    </span>
                    <div className="notification-dot"></div>
                </button>
                <img src={Placeholder} alt="" />
            </div>
        </div>
    )
}

export default Header