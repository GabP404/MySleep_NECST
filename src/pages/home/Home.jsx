import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import ClippedDrawer from "../../components/clippedDrawer/ClippedDrawer";
const Home = () => {
    return (
        <div className="home">
            {/* <Sidebar />
            <div className="homeContainer">container</div> */}
            <ClippedDrawer />
        </div>
    );
};

export default Home;
