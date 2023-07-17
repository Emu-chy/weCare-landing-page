import "./counterSection.css";

const CounterSection = () => {
    return (
        <>
            <div className="counter-section">
                <div className="inner-counter-section">
                    <div className="inner-div">
                        <h1>250</h1>
                        <p>Best Doctor</p>
                    </div>
                    <div className="inner-div">
                        <h1>15</h1>
                        <p>Clinic Location</p>
                    </div>

                    <div className="inner-div">
                        <h1>20</h1>
                        <p>Surgery Room</p>
                    </div>

                    <div className="inner-div">
                        <h1>+1500</h1>
                        <p>Patient Capacity</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterSection;
