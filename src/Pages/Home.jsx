import { Fragment } from "react";
import Navbar from "../components/Layouts/Navbar";
import { useState } from "react";
import Header from "../components/Layouts/Header";
import ExploreAll from "../components/Layouts/ExploreAll";
import Place from "../components/Layouts/Place";
import CardRate from "../components/Layouts/CardRate";
import Gallery from "../components/Layouts/Gallery";
import Company from "../components/Layouts/Company";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <Navbar handleShow={() => handleShow()} show={show} />
      <Header />
      <Place id={4} classname="mt-28 sm:mt-56 md:mt-0" title="Popular Place" />
      <ExploreAll />
      <Place id={8} classname="mt-28 md:mt-32" title="Explore All" />
      <CardRate />
      <Gallery id={6} />
      <Company />
    </Fragment>
  );
};

export default Home;
