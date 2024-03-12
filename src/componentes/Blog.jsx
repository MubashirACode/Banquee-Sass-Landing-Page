import dusan from '../assets/dusan.png'
import clay from '../assets/clay.png'
import brabui from '../assets/brabhui.png'
export const Blog = () => {
    return (
        <>
            <div className="blog">
                <div className="articals">
                    <div className="blog23">
                        <h1>Blog</h1>
                    </div>
                    <div className="allarticals">
                        <button>All Articales <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>


                <div className="cards">
                    <div className="card">
                        <img src={clay} alt="" />
                        <h3>How To Start Using Banko For Your Startup</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.</p>
                        <div className="product">
                            <div className="tech">
                                <button>Product</button>

                            </div>
                            <div className="knowldge">
                                <button>Technology</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={dusan} alt="" />
                        <h3>10 Things Nobody Told You About Banko</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.</p>
                        <div className="product">
                            <div className="tech">
                                <button>Product</button>

                            </div>
                            <div className="knowldge">
                                <button>Technology</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={brabui} alt="" />
                        <h3>7 Ways To Improve You Saving Habits</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.</p>
                        <div className="product">
                            <div className="tech">
                                <button>Product</button>

                            </div>
                            <div className="knowldge">
                                <button>Technology</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}