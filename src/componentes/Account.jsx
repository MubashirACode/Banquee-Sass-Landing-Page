import pass from '../assets/pass.png'

export const Account = () => {
    return (
        <>
            <div className="perfectcard">
                <div className="accountperfect">
                    <p>Account</p>
                    <h1>Perfect  Card for  your needs</h1>
                    <p id='netus'>Senectus et netus et malesuada fames ac turpis.
                        Sagittis vitae et leo duis ut diam.</p>
                </div>

                <div className="paypass">
                    <div className="banquee1">
                        <h3>Banquee   </h3>
                        <span id='pass'> <img src={pass} alt="" />   </span>


                    </div>
                    <div className="banquee2">
                        <h3>Banquee   </h3>
                        <span id='pass'> <img src={pass} alt="" /></span>
                    </div>
                    <div className="banquee3">
                        <h3>Banquee   </h3>
                        <span id='pass'> <img src={pass} alt="" /></span>

                        <h3 id='cardnumber'>1234  5678 9000 0000 </h3>
                        <div className="name">
                            <div className="jhon">
                                <p>Card Holder</p>
                                <h2>Jhon Doe</h2>

                            </div>
                            <div className="date">
                                <p>Expiry Date</p>
                                <h2>09/28</h2>
                            </div>

                           
                        </div>

                    </div>

                </div>


                <div className="buttonaccount">
                    <div className="privicy">
                        <button>Open Account</button>
                    </div>
                    <div className="dataitem">
                        <button >Compare Cards</button>

                    </div>
                </div>

            </div>

        </>
    )
}