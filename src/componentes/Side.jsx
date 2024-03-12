import laptop from "../assets/laptop.png"
import cycle from "../assets/cycle.png"
import plane from "../assets/plane.png"
import camera from "../assets/camera.png"

export const Side = () => {
    return (
        <>
            <div className="organize">
                <div className="right">
                    <div className="oraniza">
                    <p>Saving Account</p>
                    <h1>Organize your money the right way </h1>
                    <p id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="butt">
                    <button>All Feature <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>

                <div className="laptopes">
                    <div className="container">
                        <div className="lapimg">
                            <img src={laptop} alt="" />
                        </div>
                        <div className="contentext">
                            <h5>New Laptop</h5>
                            <p>400$</p>
                        </div>
                    </div>


                    <div className="container">
                        <div className="cycleimg">
                            <img src={cycle} alt="" />
                        </div>
                        <div className="contentext">
                            <h5>Dream bike</h5>
                            <p>200$</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="planeimg">
                            <img src={plane} alt="" />
                        </div>
                        <div className="contentext">
                            <h5>Holiday</h5>
                            <p>14000$</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="camerimg">
                            <img src={camera} alt="" />
                        </div>
                        <div className="contentext">
                            <h5>Camera</h5>
                            <p>100$</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="plusimg">
                        <i className="ri-add-line"></i>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}