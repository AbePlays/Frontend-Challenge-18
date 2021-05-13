import Recognition from "../../assets/icon-brand-recognition.svg";
import Records from "../../assets/icon-detailed-records.svg";
import Custom from "../../assets/icon-fully-customizable.svg";

type Statistic = {
  id: number;
  imgSrc: string;
  title: string;
  content: string;
};

export const statistics: Statistic[] = [
  {
    id: 1,
    imgSrc: Recognition,
    title: "Brand Recognition",
    content:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    imgSrc: Records,
    title: "Detailed Records",
    content:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    imgSrc: Custom,
    title: "Fully Customizable",
    content:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
