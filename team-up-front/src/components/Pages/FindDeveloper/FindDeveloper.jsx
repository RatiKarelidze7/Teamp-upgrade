import classes from "../../../modules/FindDeveloper/FindDeveloper.module.scss"
import { Header } from "../../../components/Main/Header.jsx"
import {RangeSlider} from '../../Main/PriceRangeSlider.jsx';
import profileImg from "../../../assets/profile-user-darkblue.png"

export const FindDeveloper = () => {


    return (
        <>
            <Header/>
            <div className={classes["findDeveloper"]}>
                <div className={classes["filter-container"]}>
                    <h2>Find Options</h2>
                    <div className={classes["filter-options"]}>
                        <p>Front-End</p>
                        <p>Back-End</p>
                        <p>Full-Stack</p>
                        <p>UI/UX-Designer</p>
                        <p>Graphic-Designer</p>
                        <p>QA-Engineer</p>
                    </div>
                    <h2>Price Range</h2>
                    <RangeSlider/>

                    <button>Press to Filter</button>
                </div>

                <div className={classes["filtered-devs"]}>
                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>

                    <div className={classes["devs"]}>
                        <div className={classes["dev-flex"]}>
                            <img src={profileImg}/>
                            <div className={classes["flex-option"]}>
                                <h3>Dev Name</h3>
                                <h4>$1,445</h4>
                            </div>
                        </div>
                        <h4>Email@gmail.com</h4>
                        <div className={classes["skills"]}>
                            <p>Front-end</p>
                            <p>Back-end</p>
                            <p>UI Design</p>
                            <p>Enginer</p>
                            <p>Fullstack</p>
                        </div>
                        <button>Request</button>
                    </div>
                </div>
            </div>
        </>
    )
}