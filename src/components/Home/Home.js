import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section5 from "../Section5/Section5";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section5></Section5>
      <Footer></Footer>
    </div>
  );
};

export default Home;
