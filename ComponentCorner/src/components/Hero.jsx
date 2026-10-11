import './Hero.css'

function Hero({ title, subtitle, ctaText }) {
    return (
        <section className="hero">
            <img
                scr="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics"
                alt="Shop Electronics"
            />

            <div className="hero-content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button>{ctaText}</button>
            </div>
        </section>
    );
}

export default Hero;