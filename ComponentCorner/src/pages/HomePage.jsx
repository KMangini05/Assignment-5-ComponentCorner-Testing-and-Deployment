import Hero from "../components/Hero";

/* AI used to assist with styling and introductory content */
function HomePage() {
    return (
        <div>
            <Hero
                title="Welcome to Component Corner"
                subtitle="Find the latest electronics at great prices."
                cta="Shop Now"
            />

            <section>
                <h2>Why Shop with Us?</h2>
                <p>
                    At ComponentCorner, we make it easy to find quality electronics at affordable prices. Whether you need accessories for school, work, or everyday use, we have something for you.
                </p>
            </section>
        </div>
    );
}

export default HomePage;