import classes from "../../../modules/Home/MainContent.module.scss"
import mainPicture from "../../../assets/main.png"

export const MainContent = () => {
    return (
        <>
            <div className={classes["main-content"]}>
                <div className={classes["left-side"]}>
                    <h1 className={classes["main-title"]}>Connect with <mark>top</mark> developers and clients
                        worldwide
                    </h1>

                    <p className={classes["bottom-text"]}>
                        In today's fast-paced digital landscape,
                        building meaningful connections with top developers
                        and clients worldwide is essential for success.
                    </p>

                    <div className={classes["result-side"]}>
                        <div>
                            <h2>55+</h2>
                            <p className={classes["p"]}>Active Developers</p>
                        </div>
                        <div>
                            <h2>10+</h2>
                            <p className={classes["p"]}>Projects Completed</p>
                        </div>
                        <div>
                            <h2>8+</h2>
                            <p className={classes["p"]}>Our Happy Clients</p>
                        </div>
                    </div>
                </div>

                <div className={classes["right-side"]}>
                    <img src={mainPicture}/>
                </div>
            </div>
        </>
    )
}