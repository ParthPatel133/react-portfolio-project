import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h1>We work to make</h1>
                    </div>
                    <div className='hide'>
                        <h1>your <span>dreams</span></h1>
                    </div>
                    <div className='hide'>
                        <h1>come true</h1>
                    </div>
                </div>
                <p>Contact us for make your moment special with photography and videography. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="camera man" />
            </div>
        </div>
    )
}

export default AboutSection;