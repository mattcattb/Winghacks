import { Link } from "react-router-dom";



function Home()
{
    return <div className="page">
        <h1>Ab<span style={{color:"#F4D7E3"}}>o</span>rt Missi<span style={{color:"#F4D7E3"}}>o</span>n</h1>
        <div className="landing-container">
            <p> Mission statement and infomrationa bout the project</p>
        </div> 
        <button className="btn"><Link to="/map">Map</Link></button>
    </div>;
}
export default Home;
