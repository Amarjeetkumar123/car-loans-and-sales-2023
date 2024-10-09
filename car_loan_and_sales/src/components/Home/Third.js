import React from "react";
import uuid from "react-uuid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../images/bankImages/CLS-LendingPartners-08.jpg";
import img2 from "../images/bankImages/CLS-LendingPartners-09.jpg";
import img3 from "../images/bankImages/CLS-LendingPartners-10.jpg";
import img4 from "../images/bankImages/CLS-LendingPartners-11.jpg";
import img5 from "../images/bankImages/CLS-LendingPartners-14.jpg";
import img6 from "../images/bankImages/CLS-LendingPartners-15.jpg";
import img7 from "../images/bankImages/CLS-LendingPartners-16.jpg";

import ShowBank from "./ShowBank";
// import styles from "./css/Third.module.css"

const Third = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const BankData = [
    {
      id: uuid(),
      img: img1,
      name: "Bajaj Finserv",
    },
    {
      id: uuid(),
      img: img2,
      name: "Hero FinCorp",
    },
    {
      id: uuid(),
      img: img3,
      name: "Yes Bank",
    },
    {
      id: uuid(),
      img: img4,
      name: "HDFC Bank",
    },
    {
      id: uuid(),
      img: img5,
      name: "AXIS Bank",
    },
    {
      id: uuid(),
      img: img6,
      name: "Kotak Mahindra Bank",
    },
    {
      id: uuid(),
      img: img7,
      name: "TATA Capital",
    },
  ];
  const data = BankData.map((item) => (
    <ShowBank key={item.id} image={item.img} name={item.name} />
  ));


  return (
    <div className="mb-5 py-4">
      <div className="bg-danger py-5 mb-5">
        <h2 className="text-white ms-5 mt-5 py-5">Lending Partners</h2>
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          className="pb-5 mb-5"
        >
          {data}
        </Carousel>
      </div>
    </div>
  );
};

export default Third;
