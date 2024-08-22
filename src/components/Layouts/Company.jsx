import { Fragment } from "react";
import CompanyImage from "../../imageConpany/company1.png";
import CompanyImage2 from "../../imageConpany/company2.png";
import CompanyImage3 from "../../imageConpany/company3.png";
import CompanyImage4 from "../../imageConpany/company4.png";
import CompanyImage5 from "../../imageConpany/company5.png";
import ImageCompany from "../Elements/ImageCompany/ImageCompany";

const MenuCompany = [
  {
    id: 1,
    image: CompanyImage,
    alt: "traveloka",
  },
  {
    id: 2,
    image: CompanyImage2,
    alt: "agoda",
  },
  {
    id: 3,
    image: CompanyImage3,
    alt: "booking",
  },
  {
    id: 4,
    image: CompanyImage4,
    alt: "trip",
  },
  {
    id: 5,
    image: CompanyImage5,
    alt: "kai",
  },
];
const Company = () => {
  return (
    <Fragment>
      <div className="container mt-20 md:mt-40 flex items-center justify-center gap-5">
        {MenuCompany.map((item) => (
          <ImageCompany key={item.id} image={item.image} alt={item.alt} />
        ))}
      </div>
    </Fragment>
  );
};

export default Company;
