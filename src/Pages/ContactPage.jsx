import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactSection from '../Section/ContactSection';
import Myhelmet from "./Myhelmet";
import HeroSection from "../Section/HeroSection";

function ContactPage() {
    const { pathname } = useLocation();

    // autoscroll to top
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    let metas={
        title : "Best Web Development Company in Coimbatore",
    describe: "Looking for the best web development company in Coimbatore? We deliver innovative, custom web solutions with a focus on quality and client satisfaction."
      }
    return (
        <div className="bg-white">
            <Myhelmet mymeta={metas} />
            <HeroSection option="Contact" />

            <ContactSection />
        </div>
    )
}

export default ContactPage;