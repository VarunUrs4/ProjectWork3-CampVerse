import bigData from "../Images/bigData.png";
import digitalVibes from "../Images/digitalVibes.png";
import img2 from "../Images/img2.png";
import lithionBatteries from "../Images/lithionBatteries.png";

const data = [
  {
    _id: {
      $oid: "63ba9eea6f7bbbc64780ff85",
    },
    eventName: "Big Data",
    eventDescription: "A Hands on workshop on Big-Data and Hadoop",
    imgUrl: bigData,
    totalSeats: 40,
    entryFees: 80,
    __v: 0,
  },
  {
    _id: {
      $oid: "63baa0bb60a79bbec4bd7a87",
    },
    eventName: "Hardware Hackathon",
    eventDescription: "Hands-on hardware competition",
    imgUrl: img2,
    totalSeats: 50,
    entryFees: 200,
    __v: 0,
  },
  {
    _id: {
      $oid: "63baa0bb60a79bbec4bd7a87",
    },
    eventName: "Digital Vibes",
    eventDescription: "A cryptic hunt of digital assets competition",
    imgUrl: digitalVibes,
    totalSeats: 100,
    entryFees: 100,
    __v: 0,
  },
  {
    _id: {
      $oid: "63baa0bb60a79bbec4bd7a87",
    },
    eventName: "Li-On Batteries",
    eventDescription: "A webinar on electric revolution in automobiles",
    imgUrl: lithionBatteries,
    totalSeats: 80,
    entryFees: 0,
    __v: 0,
  },
];

export { data };
