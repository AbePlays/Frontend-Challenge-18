import Recognition from "/img/icon-brand-recognition.svg";
import Records from "/img/icon-detailed-records.svg";
import Custom from "/img/icon-fully-customizable.svg";
import type { Statistic } from "./types";

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

export const fetchShortenedUrl = async (url: string): Promise<any> => {
  try {
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await result.json();
    if (result.ok) {
      const shortenedUrl = data.result.full_short_link;
      return shortenedUrl;
    } else {
      throw new Error("Could not fetch data");
    }
  } catch (error) {
    console.log(error);
  }
};
