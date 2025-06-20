import { useState } from "react";
import classes from "../../modules/Main/Header.module.scss"
import profileImg from "../../assets/profile-user.png"
import teamuplogo from "../../assets/team-up-logo.png"
import { useNavigate } from "react-router"

export const Header = () => {
    const [profileMenu, setProfileMenu] = useState(false);
    const navigate = useNavigate();

    const dropDownHandler = () => {
        setProfileMenu(!profileMenu);
    };

    return (
        <>
            <nav className={classes["header"]}>
                    <div className={classes["left-side"]}>
                    <div className={classes["header_logo"]}>
                        <img src={teamuplogo}/>
                    </div>
                    <ul className={classes["li-links"]}>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>Projects</li>
                        <li onClick={() => navigate("/find")}>Find Developer</li>
                    </ul>
                </div>

                <div className={classes["profile-side"]}>
                    <button>Get Start</button>
                    <img src={profileImg} onClick={dropDownHandler}/>
                </div>

                {profileMenu && (
                    <ul className={classes["dropdown-menu"]}>
                        <li className={classes["user-li"]}><a className={classes["user"]}>userName</a></li>
                        <li><a>Messenger</a></li>
                        <li><a onClick={() => navigate("/Requests")}>Requests</a></li>
                    </ul>
                )}
            </nav>
        </>
    )
}