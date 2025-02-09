import EmbreCanvas from "../threemodels/Embre.jsx";
import Bubble from "../assets/speech-bubble-message.svg";


function Home()
{
    return <div className="page">
        <h1>Ab<span style={{color:"#F4D7E3"}}>o</span>rt Missi<span style={{color:"#F4D7E3"}}>o</span>n</h1>
        <div className="landing-container">
            <p> For 50 years, access to abortion was a human right protected by the states. With the recent overturn of Roe V Wade </p>
        </div>
        <div className="home-page-embre">
            <EmbreCanvas/>
            <img src={Bubble} alt="Speech Bubble"  style={{width:"15vh"}}/>
        </div>
    </div>;
}
export default Home;
