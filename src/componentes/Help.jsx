import rephone from '../assets/riphone.png'
import mail from '../assets/mail.png'
export const Help = () => {
    return (
        <>
            <div className="need">
                <div className="help">
                    <h1>Need help</h1>

                    <div className="phonenumber">
                        <img src={rephone} alt="" />
                        <b> +49 176 123 456</b>
                        <p>Support Hotline</p>


                    </div>
                    <div className="mail">
                        <img src={mail} alt="" />
                        <b>mubashirali@gmail.com</b>
                        <p>Support Email</p>
                    </div>
                    <button>Support <i className="ri-arrow-right-line"></i></button>
                </div>

                <div className="premium" >

                    <div className='bankoaccountwork'>
                        <div className="paragerapg">
                            <p>How do I open an Banko account?  </p>
                        </div>
                        <div className="plusicon">
                            <i className="ri-add-line"></i>
                        </div>
                    </div>
                    <div className='odernewcard'>
                        <div className="paragerapg">
                            <p>How do I order a new card?  </p>
                        </div>
                        <div className="plusicon">
                            <i className="ri-add-line"></i>
                        </div>
                    </div>
                    <div className='changemyaccount'>
                        <div className="paragerapg">
                            <p>How to change my account limits?  </p>
                        </div>
                        <div className="plusicon">
                            <i className="ri-add-line"></i>
                        </div>
                    </div>
                    <div className='bankopremiumaccount' >
                        <div className="paragerapg">
                            <p>How does Banko premium works? </p>
                            <p id='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                        </div>
                        <div className="plusicon">
                            <h3>&#215;</h3>
                        </div>
                    </div>
                    <div className='twobanko' >
                        <div className="paragerapg">
                            <p>Can I have two Banko accounts? </p>
                        </div>
                        <div className="plusicon">
                            <i className="ri-add-line"></i>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}