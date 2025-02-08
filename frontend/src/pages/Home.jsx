import EmbreCanvas from "../threemodels/Embre.jsx";
function Home()
{
    return <div className="page">
        <h1>Ab<span style={{color:"#F4D7E3"}}>o</span>rt Missi<span style={{color:"#F4D7E3"}}>o</span>n</h1>
        <div className="landing-container">
            <p> Mission statement and infomrationa bout the project</p>
        </div>
        <div className="home-page-embre">
            <EmbreCanvas/>
        </div>
    </div>;
}
export default Home;
