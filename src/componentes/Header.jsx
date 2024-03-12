import card from "../assets/card.png"
export const Header = () => {
    return (
        <>
            <header>
                <div className="hreo">
                    <nav>
                        <h1>banquee.</h1>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Compare</a></li>
                            <li><a href="#">Support </a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <div>
                            <a href="#" className="logo-btn">Login</a>
                            <a href="#" className="btn">Open Account</a>
                        </div>
                        <i className="ri-menu-line"></i>
                    </nav>


                    <section id="hero12"  >
                        <div className="content-hero">
                            <div className="hero1">
                                <h1>Banking starts here.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur  adipiscing  <br />elit, sed do eiusmod tempor incididunt ut labore. </p>

                                <div className="saving">
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
                                <div className="buttons">
                                    <button className="open">Open Account</button>
                                    <button>Compare Card <i className="ri-arrow-right-line"></i> </button>
                                </div>

                           </div>
                            <div className="img2">

                                <img src={card} alt="" />
                            </div>

                          </div>  
 
                    </section>
                </div>


            </header>


        </>

    )
}