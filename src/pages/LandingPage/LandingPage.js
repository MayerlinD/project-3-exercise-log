import React from "react";
import VideoWO from "../../assets/VideoWO.mp4";
import NavBar from "../../components/NavBar/NavBar";

export default function Landing() {
    return (
        <div>
            <NavBar />
        <div className="landing">
            <div className="overlay" />
                < video src={VideoWO} autoPlay loop muted />
            <div className="landingContent">
                <h1>Welcome!</h1>
                <p>Getting fit has never been easier.</p>
            </div>
        </div >
        </div>
    )
}