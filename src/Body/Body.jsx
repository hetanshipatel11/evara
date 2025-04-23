import react from "react";
import Product from "../Props/Product";
import Showcase from "../Props/Showcase";
import Banner from "./Banner";
import Categories from "./Categories";
import Popularitem from "./Popularitem";
import Offer from "./Offer ";
import Arrivals from "./Arrivals";
import Releases from "./Releases";
import Newsletter from "./Newsletter";
const Body = () => {
    return (
        <>
            <main className="main">
                <Banner />
                <Categories />
                 <Popularitem/>
                 <Offer/>
                <Arrivals/>
               <Releases/>
              <Newsletter/>
               
            </main >

        </>
    );
}

export default Body;