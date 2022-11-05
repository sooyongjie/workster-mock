import React from 'react'
import Placeholder from '../img/placeholder.svg'

function Employees() {
    return (
        <div>
            <div className="employee-header">
                <div className='employee-details-wrapper'>
                    <img src={Placeholder} alt="" />
                    <div className="employee-details">
                        <div className="employee-name">
                            Tim Cook
                        </div>
                        <div className="employee-company">Google</div>
                        <div className="employee-title">UI/UX Designer</div>
                    </div>
                </div>
                <div className='employee-actions'>
                    <button>
                        <span class="material-symbols-outlined">
                            bookmark
                        </span>
                        <div>Save for later</div>
                    </button>
                    <button>
                        <div>Contact</div>
                    </button>
                </div>
            </div>
            <hr />
            <div className="tabs">
                <button className='active'>
                    <span class="material-symbols-outlined">
                        badge
                    </span>
                    <div>About</div>
                </button>

                <button>
                    <span class="material-symbols-outlined">
                        work
                    </span>
                    <div>Work</div>
                </button>

                <button>
                    <span class="material-symbols-outlined">
                        insert_chart
                    </span>
                    <div>Experience</div>
                </button>

                <button>
                    <span class="material-symbols-outlined">
                        school
                    </span>
                    <div>Save for later</div>
                </button>
            </div>
            <div className="tab about-tab">
                <div className="col">
                    <div>
                        <div className="section-title">Short Bio</div>
                        <div className="bio">Once your resume is on Indeed, you can choose to make it "Public" or "Private." There are benefits to both options. When you make your resume public, is visible to anyone. Visitors to a public resume page can forward, save, or download the resume as a PDF or email you through a secure contact form</div>
                    </div>
                    <div className="experience">
                        <div className="section-title">Work Experience</div>
                        <div className="work">
                            <div className="work-icon">
                                <span class=" material-symbols-outlined">
                                    stadia_controller
                                </span>
                            </div>
                            <div className="work-title">Senior Game Developer</div>
                            <div className="work-subtitle">
                                <div className="work-location">London</div>
                                <div className="work-divider">·</div>
                                <div className="work-company">Google</div>
                            </div>
                            <div className="work-duration">2020 - 2022</div>
                            <div className="work-desc">
                                Minimum 3 shifts a week Monday to firday with the ability to work an 8 to 9 hour time each week between the hours of 7 AM to 7 PM.
                            </div>
                        </div>

                        <div className="work">
                            <div className="work-icon">
                                <span class="material-symbols-outlined">
                                    engineering
                                </span>
                            </div>
                            <div className="work-title">Senior Engineer</div>
                            <div className="work-subtitle">
                                <div className="work-location">London</div>
                                <div className="work-divider">·</div>
                                <div className="work-company">Nest</div>
                            </div>
                            <div className="work-duration">2017 - 2020</div>
                            <div className="work-desc">
                                Offered great benefits package valued at over $0.500 that includes full coverage for employee health
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        <div className="section-title">Education</div>
                        <div className="work">
                            <div className="work-icon">
                                <span class="material-symbols-outlined">
                                    psychology
                                </span>
                            </div>
                            <div className="work-title">Big Brain University</div>
                            <div className="work-subtitle">
                                <div className="work-location">Massachusetts</div>
                                <div className="work-divider">·</div>
                                <div className="work-company">Psychology</div>
                            </div>
                            <div className="work-duration">2020 - 2022</div>
                            <div className="work-desc">
                                Heathcare interest - Become an expert on emerging healthcare programs and excited to speak with providers about the future of healthcare.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className='summary'>
                        <div className="salary">$35,700 - $37,700</div>
                        <div className="">Avg Salary</div>
                        <div className="summary-details">
                            <div className="summary-details-icon">
                                <span class="material-symbols-outlined">
                                    mail
                                </span>
                            </div>
                            <div className="summary-details-value">sooyongjie@gmail.com</div>
                            <div className="summary-details-category">Contact Email</div>
                        </div>
                        <div className="summary-details">
                            <div className="summary-details-icon">
                                <span class="material-symbols-outlined">
                                    headset_mic
                                </span>
                            </div>
                            <div className="summary-details-value">sooyongjie@gmail.com</div>
                            <div className="summary-details-category">Contact Email</div>
                        </div>
                        <div className="summary-details">
                            <div className="summary-details-icon">
                                <span class="material-symbols-outlined">
                                    how_to_reg
                                </span>
                            </div>
                            <div className="summary-details-value">sooyongjie@gmail.com</div>
                            <div className="summary-details-category">Contact Email</div>
                        </div>
                        <div className="summary-text">
                            My new car is sexy. Melbourne Red color, interior is nice. I enjoy changing the ambiance.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees