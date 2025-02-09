import EmbreCanvas from "../threemodels/Embre.jsx";
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
          <p>
            Regardless of geography, identity, or circumstance, we believe that
            everyone deserves the right to make informed decisions about their
            own bodies. We strive to output reliable information, provide access
            to medical resources, and a maintain a supportive community.
          </p>
          <p>
            Reproductive rights are not just a privilege, but a universal
            reality.
          </p>
        </div>
        <footer>
        <div className="refrences">
            <h3> Refrences: </h3>
            <a src="https://reproductiverights.org/maps/abortion-laws-by-state/">Center for Reproductive Rights</a>
            <a src="https://www.plannedparenthoodaction.org/abortion-access-tool/US">Planned Parenthood</a>
            <a src = "https://www.plancpills.org/">Plan C Pills</a>
            <a src = "https://www.usnews.com/news/best-states/articles/a-guide-to-abortion-laws-by-state">US NEWS Guide to Abortion</a>
            <a src = "https://www.capradio.org/articles/2022/06/24/abortion-is-still-legal-in-california-here-are-answers-to-questions-about-access-in-the-state/">Capradio</a>
"          <h3> USEFUL RESOURCES</h3>
            <a src = "https://prochoice.org/">National Abortion Hotline: 1-800-772-9100</a>
            <a src = "https://abortionfunds.org/">National Network of Abortion Funds</a>
            <a src = "https://reproductivefreedomforall.org/resources/resources-for-accessing-abortion-care/"> Reproductive freedom for all</a>
        </div>
        </footer>
    </div>;
}
export default Home;
