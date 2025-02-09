import EmbreCanvas from "../threemodels/Embre.jsx";
function Home()
{
    return <div className="page flex flex-col items-center justify-center mt-10">
        <h1 className="text-6xl">Ab<span style={{color:"#F4D7E3"}}>o</span>rt Missi<span style={{color:"#F4D7E3"}}>o</span>n</h1>
        <div className="landing-container">
            <p className=""> Mission statement and infomrationa bout the project</p>
        </div>
        <div className="home-page-embre">
            <EmbreCanvas/>
        </div>
    </div>;
}
export default Home;
