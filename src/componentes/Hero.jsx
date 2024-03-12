import light from '../assets/light.jpg'
import saveing from '../assets/safe.jpg'
import mobileaccount from '../assets/phone.jpg'
import chartgraph from '../assets/chart.jpg'
import bank from '../assets/bank.jpg'
import wifi from '../assets/wifi.jpg'
import app from '../assets/app.jpg'


export const Hero = () => {
    return (
        <>
            <main>

                <div className="openapp">

                    <div className="heromaincontent">
                        <h1>One app <br /> One banking</h1>
                        <div className="banking1">

                            <div className="instant">
                                <img src={light} alt="" />
                                <h3>Instant
                                    transactions</h3>
                                <p>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>

                            </div>
                            <div className="instant">
                                <img src={saveing} alt="" />
                                <h3>Saving account</h3>
                                <p>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>

                            </div>




                            <div className="instant">
                                <img src={mobileaccount} alt="" />
                                <h3>Mobile
                                    banking</h3>
                                <p>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>

                            </div>
                            <div className="instant">
                                <img src={chartgraph} alt="" />
                                <h3>Advanced
                                    statistics</h3>
                                <p>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>

                            </div>





                            <div className="instant">
                                <img src={bank} alt="" />
                                <h3>Virtual
                                    cards</h3>
                                <p>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>

                            </div>
                            <div className="instant">
                                <img src={wifi} alt="" />
                                <h3>Contactless
                                    payments</h3>
                                <p>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>

                            </div>
                        </div>





                    </div>
                    <div className="openimg">
                        <img src={app} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}