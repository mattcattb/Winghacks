import EmbreCanvas from "../threemodels/Embre.jsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-light-purple to-light-pink font-gelica-extra-light overflow-y-auto">
      <h1 className="bg-dark-purple px-12 py-6 rounded-2xl inline-block text-2xl font-gelica-black text-white">
        Pl<span className="text-light-pink">a</span>n Your C<span className="text-light-pink">a</span>re
      </h1>

      <div className="landing-container max-w-2xl mx-auto text-center mt-8">
        <h2 className="text-dark-purple text-xl font-gelica-bold">
          Our mission is to universalize access to clear and comprehensive
          information on abortion and reproductive healthcare across the United
          States
        </h2>
      </div>

      <div className="home-page-embre mt-12">
        <EmbreCanvas />
      </div>

      <div className="home-page-text max-w-3xl mx-auto mt-12 text-dark-purple text-lg font-gelica-regular">
        <p>
          Regardless of geography, identity, or circumstance, we believe that
          everyone deserves the right to make informed decisions about their
          own bodies. We strive to output reliable information, provide access
          to medical resources, and maintain a supportive community.
        </p>
        <p className="mt-4">
          Reproductive rights are not just a privilege, but a universal
          reality.
        </p>
      </div>

      <footer className="mt-16 w-full">
        <div className="references flex flex-col w-1/3 mx-auto bg-alice-blue p-4 rounded-lg overflow-y-auto">
          <h3 className="text-dark-purple font-semibold mb-2">References:</h3>
          <a
            href="https://reproductiverights.org/maps/abortion-laws-by-state/"
            className="text-dark-pink hover:text-light-pink block mb-1"
          >
            Center for Reproductive Rights
          </a>
          <a
            href="https://www.plannedparenthoodaction.org/abortion-access-tool/US"
            className="text-dark-pink hover:text-light-pink block mb-1"
          >
            Planned Parenthood
          </a>
          <a
            href="https://www.plancpills.org/"
            className="text-dark-pink hover:text-light-pink block mb-1"
          >
            Plan C Pills
          </a>
          <a
            href="https://www.usnews.com/news/best-states/articles/a-guide-to-abortion-laws-by-state"
            className="text-dark-pink hover:text-light-pink block mb-1"
          >
            US NEWS Guide to Abortion
          </a>
          <a
            href="https://www.capradio.org/articles/2022/06/24/abortion-is-still-legal-in-california-here-are-answers-to-questions-about-access-in-the-state/"
            className="text-dark-pink hover:text-light-pink block"
          >
            Capradio
          </a>

          <h3 className="text-dark-purple font-semibold mt-4 mb-2">
            Useful Resources
          </h3>
          <a
            href="https://prochoice.org/"
            className="text-dark-pink hover:text-light-pink block mb-1"
          >
            National Abortion Hotline: 1-800-772-9100
          </a>
          <a
            href="https://abortionfunds.org/"
            className="text-dark-pink hover:text-light-pink block mb-1"
          >
            National Network of Abortion Funds
          </a>
          <a
            href="https://reproductivefreedomforall.org/resources/resources-for-accessing-abortion-care/"
            className="text-dark-pink hover:text-light-pink block"
          >
            Reproductive freedom for all
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;