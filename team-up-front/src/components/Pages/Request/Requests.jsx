import { Header } from "../../Main/Header.jsx"
import classes from "../../../modules/Request/Request.module.scss"
import profileImg from '../../../assets/profile-user-darkblue.png'
import { Footer } from "../../Main/Footer.jsx"

export const Requests = () => {
    return (
        <>
            <Header/>
            <div className={classes["requests-container"]}>
                <div className={classes["request"]}>
                    <div className={classes["user-info"]}>
                        <img src={profileImg}/>
                        <h3>User Name</h3>
                    </div>
                    <div className={classes["price-email"]}>
                        <h4>User@email.com</h4>
                        <h4 className={classes["price"]}>$1,445</h4>
                    </div>
                    <p>Project Type</p>
                    <div className={classes["buttons"]}>
                        <button className={classes["cancel"]}>Cancel</button>
                        <button className={classes["accept"]}>Accept</button>
                    </div>
                </div>

                <div className={classes["request"]}>
                    <div className={classes["user-info"]}>
                        <img src={profileImg}/>
                        <h3>User Name</h3>
                    </div>
                    <div className={classes["price-email"]}>
                        <h4>User@email.com</h4>
                        <h4 className={classes["price"]}>$1,445</h4>
                    </div>
                    <p>Project Type</p>
                    <div className={classes["buttons"]}>
                        <button className={classes["cancel"]}>Cancel</button>
                        <button className={classes["accept"]}>Accept</button>
                    </div>
                </div>

                <div className={classes["request"]}>
                    <div className={classes["user-info"]}>
                        <img src={profileImg}/>
                        <h3>User Name</h3>
                    </div>
                    <div className={classes["price-email"]}>
                        <h4>User@email.com</h4>
                        <h4 className={classes["price"]}>$1,445</h4>
                    </div>
                    <p>Project Type</p>
                    <div className={classes["buttons"]}>
                        <button className={classes["cancel"]}>Cancel</button>
                        <button className={classes["accept"]}>Accept</button>
                    </div>
                </div>

                <div className={classes["request"]}>
                    <div className={classes["user-info"]}>
                        <img src={profileImg}/>
                        <h3>User Name</h3>
                    </div>
                    <div className={classes["price-email"]}>
                        <h4>User@email.com</h4>
                        <h4 className={classes["price"]}>$1,445</h4>
                    </div>
                    <p>Project Type</p>
                    <div className={classes["buttons"]}>
                        <button className={classes["cancel"]}>Cancel</button>
                        <button className={classes["accept"]}>Accept</button>
                    </div>
                </div>

                <div className={classes["request"]}>
                    <div className={classes["user-info"]}>
                        <img src={profileImg}/>
                        <h3>User Name</h3>
                    </div>
                    <div className={classes["price-email"]}>
                        <h4>User@email.com</h4>
                        <h4 className={classes["price"]}>$1,445</h4>
                    </div>
                    <p>Project Type</p>
                    <div className={classes["buttons"]}>
                        <button className={classes["cancel"]}>Cancel</button>
                        <button className={classes["accept"]}>Accept</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}