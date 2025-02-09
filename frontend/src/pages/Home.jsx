import EmbreCanvas from "./Embre.jsx";
function Home()
{
    return <div className="page">
        <h1>Pl<span style={{color:"#F4D7E3"}}>a</span>n Your C<span style={{color:"#F4D7E3"}}>a</span>re</h1>
        <div className="landing-container">
            <h2> Our mission is to universalize access to clear and comprehensive information on 
                abortion and reproductive healthcare across the United States</h2>
        </div>
        <div className="home-page-embre">
            <EmbreCanvas/>
        </div>
        <div className="home-page-text">
            <p>Regardless of geography, identity, or circumstance, we believe that everyone deserves the right 
                to make informed decisions about their own bodies. We strive to output reliable information, provide access to 
                medical resources, and a maintain a supportive community. 
                
            </p>
            <p>Reproductive rights are not just a privilege, but a universal reality.</p>
        </div>
    </div>;
}
export default Home;
