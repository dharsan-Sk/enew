import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../Section/HeroSection";

import '../CSS/ProjectPage.css'
import ProductSection from '../Section/ProductSection';
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";

function ProjectPage() {
    const { pathname } = useLocation();

    // autoscroll to top
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-white">

<HeroSection option="Products" />

            <ProductSection />
            <ContactPopup />
<Newsletter />
        </div>
    )
}

export default ProjectPage;