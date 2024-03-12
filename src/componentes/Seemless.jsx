import webflow from '../assets/webflow.png'
import shofipy from '../assets/shofipy.png'
import zapir from '../assets/zapir.png'
import master from '../assets/master.png'
import bitcoin from '../assets/bitcoin.png'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import google from '../assets/google.png'
import applepay from '../assets/applepay.png'
import amzon from '../assets/amzon.png'
export const Seemeless = () => {
    return (
        <>
            <div className="socialmidia">

                <div className="socialicon">
                    <div className="ggoleicon">
                        <img src={webflow} alt="" />
                        <img src={shofipy} alt="" />
                        <img src={zapir} alt="" />
                        <img src={bitcoin} alt="" />
                    </div>
                    <img src={paypal} alt="" />
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                    <img src={google} alt="" />
                    <img src={applepay} alt="" />
                    <img src={amzon} alt="" />


                </div>

                <div className="socialicontent">

                    <div className="tools">
                        <p>Tools</p>
                        <h1>Seemless integation</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className="fulltapi">
                        <li><i className="ri-checkbox-circle-line"></i>Malesuada Ipsum</li>
                        <li><i className="ri-checkbox-circle-line"></i>  Vestibulum</li>
                        <li><i className="ri-checkbox-circle-line"></i>Parturient Lorem</li>

                    </div>


                </div>


            </div>
        </>
    )
}