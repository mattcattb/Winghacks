import EmbreCanvas from "../threemodels/Embre.jsx";
function Home() {
  return (
    <div className="flex flex-col mt-[40px]">
      <h1 className="text-5xl">
        Pl<span style={{ color: "#F4D7E3" }}>a</span>n Your C
        <span style={{ color: "#F4D7E3" }}>a</span>re
      </h1>
      <div className="landing-container flex">
        <h2>
          {" "}
          Our mission is to universalize access to clear and comprehensive
          information on abortion and reproductive healthcare across the United
          States
        </h2>
      </div>
      <div className="home-page-embre flex flex-row">
        <EmbreCanvas />
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
      </div>
    </div>
  );
}
export default Home;
