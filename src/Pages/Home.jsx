import { Fragment } from "react";
import Navbar from "../components/Layouts/Navbar";
import { useState } from "react";
import Header from "../components/Layouts/Header";
import PopularPlace from "../components/Layouts/PopularPlace";
import ExploreAll from "../components/Layouts/ExploreAll";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Fragment>
      <Navbar handleShow={() => handleShow()} show={show} />
      <Header />
      <PopularPlace />
      <ExploreAll />
    </Fragment>
  );
};

export default Home;
