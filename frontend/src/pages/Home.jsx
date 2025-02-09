import EmbreCanvas from "../threemodels/Embre.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-custom flex flex-col items-center mt-5 mx-[20px] justify-center min-h-screen bg-gradient-to-r from-light-purple to-light-pink font-gelica-extra-light overflow-y-auto px-4 md:px-0"> {/* Added responsive padding */}
      <h1 className="bg-[#1F0322] px-8 py-8 rounded-[5vh] inline-block text-4xl md:text-5xl font-gelica-black leading-tight text-center"> {/* Improved responsiveness and text centering */}
        Plan your care.
      </h1>

      <div className="landing-container max-w-3xl  text-center mt-12"> {/* Increased max-width */}
        <h2 className="text-[#1F0322] text-3xl md:text-3xl font-gelica-bold leading-relaxed "> {/* Improved responsiveness and leading */}
          Our mission is to universalize access to clear and comprehensive
          information on abortion and reproductive healthcare across the United
          States.
        </h2>
      </div>

      <div className="home-page-embre mt-16 md:mt-24 flex justify-end ml-5"> {/* Added flex and justify-end */}
          <Link to = '/chat'>
            <EmbreCanvas/>
          </Link>
      </div>

      <div className="home-page-text max-w-4xl mx-auto mt-16 md:mt-24 text-dark-purple text-lg md:text-xl font-gelica-regular leading-relaxed"> {/* Improved responsiveness and leading */}
        <p>
          Regardless of geography, identity, or circumstance, we believe that
          everyone deserves the right to make informed decisions about their
          own bodies. We strive to output reliable information, provide access
          to medical resources, and maintain a supportive community.
        </p>
        <p className="mt-6 md:mt-8"> {/* Improved margin-top responsiveness */}
          Reproductive rights are not just a privilege, but a universal
          reality.
        </p>
      </div>

      <footer className="mt-20 md:mt-32 w-auto bg-alice-blue py-12 px-6 md:px-12 bg-white rounded-3xl"> {/* Improved spacing and background */}
        <div className="references max-w-3xl mx-auto flex flex-col md:flex-row justify-between"> {/* Improved layout for larger screens */}
          <div className="md:w-1/2"> {/* Added width for larger screens */}
            <h3 className="text-purple-800 font-semibold mb-4 text-xl">References:</h3> {/* Improved margin-bottom and text size */}
            <ul className="space-y-2"> {/* Added spacing between list items */}
              <li><a href="https://reproductiverights.org/maps/abortion-laws-by-state/" className="text-pink-800 hover:text-light-pink block">Center for Reproductive Rights</a></li>
              <li><a href="https://www.plannedparenthoodaction.org/abortion-access-tool/US" className="text-pink-800 hover:text-light-pink block">Planned Parenthood</a></li>
              <li><a href="https://www.plancpills.org/" className="text-pink-800 hover:text-light-pink block">Plan C Pills</a></li>
              <li><a href="https://www.usnews.com/news/best-states/articles/a-guide-to-abortion-laws-by-state" className="text-pink-800 hover:text-light-pink block">US NEWS Guide to Abortion</a></li>
              <li><a href="https://www.capradio.org/articles/2022/06/24/abortion-is-still-legal-in-california-here-are-answers-to-questions-about-access-in-the-state/" className="text-pink-800 hover:text-light-pink block">Capradio</a></li>
            </ul>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0"> {/* Added width and margin-top for larger screens */}
            <h3 className="text-purple-800 font-semibold mb-4 text-xl">Useful Resources</h3> {/* Improved margin-bottom and text size */}
            <ul className="space-y-2"> {/* Added spacing between list items */}
              <li><a href="https://prochoice.org/" className="text-pink-800 hover:text-pink-950 block">National Abortion Hotline: 1-800-772-9100</a></li>
              <li><a href="https://abortionfunds.org/" className="text-pink-800 hover:text-light-pink block">National Network of Abortion Funds</a></li>
              <li><a href="https://reproductivefreedomforall.org/resources/resources-for-accessing-abortion-care/" className="text-pink-900  hover:text-light-pink block">Reproductive freedom for all</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;