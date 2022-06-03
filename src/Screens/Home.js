import React from "react";
import Header from "../Header";
import Shop from "../homeComponents/Shop";
import ContactInfo from "../homeComponents/ContactInfo";
import MoredetailSection from "../homeComponents/MoredetailSection";
import Footer from "../Footer";
import {useParams} from "react-router-dom";

const Home =({match}) => {
    window.scrollTo(0, 0);
    const {id} = useParams();
    const keyword = Number(id).keyword;
    return (
        <div>
            <Header />
            <Shop keyword={keyword} />
            <MoredetailSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;