import EmbreCanvas from "./Embre.jsx";
import Bubble from "../assets/speech-bubble-message.svg";


function Home()
{
    return <div className="page">
        <h1>Pl<span style={{color:"#F4D7E3"}}>a</span>n Your C<span style={{color:"#F4D7E3"}}>a</span>re</h1>
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
