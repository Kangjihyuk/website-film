import React, { Fragment } from "react";
import Image from "../../../image/headerImage.png";
import Head from "../Fragments/Head";

const Text = [
  {
    id: 1,
    title: "Located in",
    text: "Bangladesh",
  },
  {
    id: 2,
    title: "date",
    text: "Wed,7 Nov",
  },
  {
    id: 3,
    title: "Price rage",
    text: "$400-$700",
  },
];
const Header = () => {
  return (
    <Fragment>
      <div className="container h-screen flex w-full md:items-center md:justify-center">
        <div className="mt-20  md:flex md:justify-between md:mt-0 md:items-center">
          <Head title="Explore Beautiful World!">
            {Text.map((item) => (
              <Head.HeadText key={item.id} titleSearch={item.title}>
                {item.text}
              </Head.HeadText>
            ))}
            <Head.Search />
          </Head>
          <div className="bg-secondary rounded-full h-[17rem] w-[17rem] flex justify-center items-center mt-14 lg:w-[25rem] lg:h-[25rem]">
            <img
              src={Image}
              loading="lazy"
              alt="travel"
              className="h-[25rem] w-[25rem] md:w-[20rem] md:h-[20rem] object-cover lg:w-[25rem] lg:h-[25rem]"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
