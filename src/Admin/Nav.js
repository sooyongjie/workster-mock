import Logo from '../img/logo.svg'
// import PlaceholderImage from '../img/placeholder.svg'

function Nav() {
    return (
        <nav>
            <div className="top-section">
                <img className='workster-logo' src={Logo} alt="" />
                <div className="nav-section">
                    <div className='section-title'>Employee Finder</div>
                    <div className="nav-item">
                        <span class="material-symbols-outlined">search</span>
                        <p>Search</p>
                    </div>
                    <div className="nav-item active">
                        <span class="material-symbols-outlined">
                            supervisor_account
                        </span>
                        <p>Employees</p>
                    </div>
                    <div className="nav-item">
                        <span class="material-symbols-outlined">
                            mic
                        </span>
                        <p>Calls</p>
                    </div>
                </div>

                <div className="nav-section">
                    <div className='section-title'>Manage Listings</div>
                    <div className="nav-item">
                        <span class="material-symbols-outlined">
                            inbox
                        </span>
                        <p>Listings</p>
                    </div>
                    <div className="nav-item">
                        <span class="material-symbols-outlined">
                            event_note
                        </span>
                        <p>Calendar</p>
                    </div>
                    <div className="nav-item">
                        <span class="material-symbols-outlined">
                            autorenew
                        </span>
                        <p>Post Updates</p>
                    </div>
                    <div className="nav-item">
                        <span class="material-symbols-outlined">
                            insights
                        </span>
                        <p>Analytics</p>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="nav-item">
                    <span class="material-symbols-outlined">
                        headset_mic
                    </span>
                    <p>Help Center</p>
                </div>
                <div className="nav-item">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    <p>Settings</p>
                </div>
            </div>
        </nav>
    )
}

export default Nav