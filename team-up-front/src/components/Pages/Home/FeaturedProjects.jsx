import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import profileImg from "../../../assets/profile-user-darkblue.png"
import exampleProject from "../../../assets/exampleProject.png";
import projectsImgOne from "../../../assets/firstProjectImg.png";
import projectsImgTwo from "../../../assets/TwoProjectImg.png";
import projectsImgThree from "../../../assets/ThreeProjectImg.jpg";
import classes from "../../../modules/Home/FeaturedProjects.module.scss"

export const FeaturedProjects = () => {
    const FirstCard = () => (
        <div className={classes["card"]}>
            <img src={exampleProject} className={classes["project-img"]}/>
            <div className={classes["project-info"]}>
                <h3>DevNest</h3>
                <p>DevNest connects developers and clients in one seamless platform.</p>
            </div>

            <div className={classes["user-info"]}>
                <div>
                    <img src={profileImg} className={classes["profile-img"]}/>
                    <h3>Vato Tabatadze</h3>
                </div>
                <h4>$1,275</h4>
            </div>
        </div>
    )

    const SecondCard = () => (
        <div className={classes["card"]}>
            <img src={projectsImgOne} className={classes["project-img"]}/>
            <div className={classes["project-info"]}>
                <h3>LaunchPad Pro</h3>
                <p>LaunchPad Pro empowers startups and freelancers to thrive.</p>
            </div>

            <div className={classes["user-info"]}>
                <div>
                    <img src={profileImg} className={classes["profile-img"]}/>
                    <h3>Hanibal Lecter</h3>
                </div>
                <h4>$1,549</h4>
            </div>
        </div>
    )

    const ThirdCard = () => (
        <div className={classes["card"]}>
            <img src={projectsImgTwo} className={classes["project-img"]}/>
            <div className={classes["project-info"]}>
                <h3>SwiftCollab</h3>
                <p>SwiftCollab streamlines teamwork with powerful collaboration tools.</p>
            </div>

            <div className={classes["user-info"]}>
                <div>
                    <img src={profileImg} className={classes["profile-img"]}/>
                    <h3>Walter White</h3>
                </div>
                <h4>$2,305</h4>
            </div>
        </div>
    )

    const FourthCard = () => (
        <div className={classes["card"]}>
            <img src={projectsImgThree} className={classes["project-img"]}/>
            <div className={classes["project-info"]}>
                <h3>PixelSync</h3>
                <p>PixelSync fuses sleek design with dev power.</p>
            </div>

            <div className={classes["user-info"]}>
                <div>
                    <img src={profileImg} className={classes["profile-img"]}/>
                    <h3>Tony Stark</h3>
                </div>
                <h4>$1,990</h4>
            </div>
        </div>
    )

    return (
        <>
            <div className={classes["card-container"]}>
                {/*Desktop View*/}
                {/* Desktop Grid View */}
                <div className={classes["desktop-view"]}>
                    <div className={classes["projects-grid"]}>
                        <FirstCard />
                        <SecondCard />
                        <ThirdCard />
                        <FourthCard />
                    </div>
                </div>
                {/* Mobile Slider View */}
                <div className={classes["mobile-view"]}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        className={classes["mobile-swiper"]}
                    >
                        <SwiperSlide>
                            <div className={classes["slide-content"]}>
                                <FirstCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes["slide-content"]}>
                                <SecondCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes["slide-content"]}>
                                <ThirdCard/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={classes["slide-content"]}>
                                <FourthCard/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}