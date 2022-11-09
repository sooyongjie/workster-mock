import Placeholder from '../img/placeholder.svg'

function Header() {
    window.addEventListener('click', function (e) {
        if (!document.querySelector('.nav-btn').contains(e.target) & !document.querySelector('nav').contains(e.target)) {
            document.querySelector('nav').className = "hidden"
        }
    });
    return (
        <div className='header-container'>
            <div className='header-left'>
                <button className="nav-btn" onClick={() => { document.querySelector('nav').className = "active" }}>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
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