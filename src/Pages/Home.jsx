import { Fragment } from "react";
import Navbar from "../components/Layouts/Navbar";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Fragment>
      <Navbar handleShow={() => handleShow()} show={show} />
    </Fragment>
  );
};

export default Home;
