import appstore from '../assets/appstore.png'
import googlestore from '../assets/googlestore.png'

import phone from '../assets/phone.png'


export const Appstore = () => {
    return (
        <>

            <div className="backgroungimg">
                <div className="gridbank">
                    <div className="gridcontent">

                        <h1>One app One banking</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                        <div className="checkmarks">
                            <div className="saving1">
                                <div className="transfer">
                                    <i className="ri-checkbox-fill">Instant Transfer</i>


                                </div>
                                <div className="pay">
                                    <i className="ri-checkbox-fill">Payments worldwide</i>
                                </div>
                                <div className="account">
                                    <i className="ri-checkbox-fill">Saving accounts</i>


                                </div>
                                <div className="banking">
                                    <i className="ri-checkbox-fill">100% mobile banking</i>
                                </div>

                            </div>
                            <div className="get">
                            <div className="googleimages">
                                <img src={appstore} alt="" />
                               
                                
                           </div>
                           <div className="googleimg">
                           <img src={googlestore} alt="" />
                           </div>
                           </div>
                        </div>



                    </div>
                    <div className="gridimg">
                        <img src={phone} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}