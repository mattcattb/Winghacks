import EmbreCanvas from "./Embre.jsx";
function Home()
{
    return <div className="page">
        <h1>Pl<span style={{color:"#F4D7E3"}}>a</span>n Your C<span style={{color:"#F4D7E3"}}>a</span>re</h1>
        <div className="landing-container">
            <p> Mission statement and infomrationa bout the project</p>
        </div>
        <div className="home-page-embre">
            <EmbreCanvas/>
        </div>
    </div>;
}
export default Home;
