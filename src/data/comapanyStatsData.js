import { FaRoute } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoThumbsUpOutline } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";
const companyStatsData = [
  {
    icon: <FaPeopleGroup color="white" size={40} />,
    numbers: 10000,
    title: "Packages",
  },
  {
    icon: <FaRoute color="white" size={40} />,
    numbers: 1000,
    title: "Destination Covered",
  },
  {
    icon: <IoThumbsUpOutline color="white" size={40} />,
    numbers: 8,
    title: "Years in Business",
  },
  {
    icon: <GiStarsStack color="white" size={40} />,
    numbers: 4.9,
    title: "Star Rating",
  },
];

export default companyStatsData;
