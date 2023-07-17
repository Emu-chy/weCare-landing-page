import { BsShieldFillCheck, BsFillPersonFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

import heroImg from "../../assets/Task.png1.png";
import "./heroSection.css";

const HeroSection = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-section">
                    <div className="hero-section-part-1">
                        <div>
                            <h1 className="font-weight-bold">
                                Protect Your Health And Take Care Of Your Health.
                            </h1>
                        </div>

                        <div className="row">
                            <div className="inner-row">
                                <div className="inner-section-1">
                                    <div className="inner-logo">
                                        <FaCalendarAlt size={30} />
                                    </div>
                                    <div>
                                        <h2>Make An Appointment</h2>
                                        <p>Schedule With Your Favorite Doctor Anytime</p>
                                    </div>
                                </div>
                                <div className="inner-section-2">
                                    <div className="inner-logo">
                                        <BsShieldFillCheck size={30} />
                                    </div>
                                    <div>
                                        <h2>Health Guarantee Forever</h2>
                                        <p>We Always Provide The Best Warranty For You</p>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-row">
                                <div className="inner-section-1">
                                    <div className="inner-logo">
                                        <BsFillPersonFill size={30} />
                                    </div>
                                    <div>
                                        <h2>Find Your Best Doctor</h2>
                                        <p>We Always Provide The Best Warranty For You</p>
                                    </div>
                                </div>
                                <div className="inner-section-2">
                                    <div className="inner-logo">
                                        <HiLocationMarker size={30} />
                                    </div>
                                    <div>
                                        <h2>Spread In Various Places</h2>
                                        <p>Now Clinics Are Available in Various Places</p>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-1">Book Now</button>
                        </div>
                    </div>
                    <div className="hero-section-part-2">
                        <img className="hero-section-img" src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
