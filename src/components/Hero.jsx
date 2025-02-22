
import heroImg from '../assets/hero.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                    <h1>contentful cms</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="hero-image" className='img'/>
                </div>
            </div>
        </section>
    )
}
export default Hero
