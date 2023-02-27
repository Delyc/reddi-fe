import Navbar from "../layouts/Navbar";
import PageWrapper from "../wrappers/PageWrapper";
import Footer from "../layouts/Footer";
import Hero from "./Hero";
import Stats from "./Stats";
import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";
import HomePosts from "./HomePosts";
import Partners from "./Partners";

const Landing = () => {
    return (
        <>
           <PageWrapper>
                <Navbar />
                <Hero />
                <Stats />
                <WhatWeDo />
                <AboutUs />
                <HomePosts />
                <Partners />
            </PageWrapper>
            <Footer />
        </>

    );
}

export default Landing;