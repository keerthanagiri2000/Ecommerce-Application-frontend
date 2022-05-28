import React from "react";
import Header from "../Header";
import Shop from "../homeComponents/Shop";
import ContactInfo from "../homeComponents/ContactInfo";
import MoredetailSection from "../homeComponents/MoredetailSection";
import Footer from "../Footer";


const Home =() => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <Shop />
            <MoredetailSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;