import { useRef } from "react";
import OrbitView_Media from "../../assets/OrbitView_Media.png";
import StandWithCrypto from "../../assets/stand_with_crypto.webp";
import HackathonsCanada from "../../assets/hackathons_canada.jpg";
import OmniwaveNexus from "../../assets/omniwave_nexus_logo.jpg";
import UniversityOfWaterloo from "../../assets/UWaterloo.webp";
import EHSS from "../../assets/EHSS.png";
import TomDigest from "../../assets/tz-digests.png";
import "./MyCommunities.css";
import "../../fonts/Poppins.css";

const Communities = () => {
  const communities = [
    {
      name: "OrbitView Media",
      description:
        "OrbitView Media is a media entity focused on technology, economics, career development, post-secondary pathways, etc. We host events and aim to collaborate with influencers and organizations to make our impact.",
      image: OrbitView_Media,
      link: "https://www.linkedin.com/company/orbitview-media/",
    },
    {
      name: "Stand With Crypto",
      description:
        "Stand With Crypto unites web3 builders and crypto advocates across Canada to champion emerging use cases, support innovative businesses, and foster a thriving blockchain ecosystem that drives economic growth.",
      image: StandWithCrypto,
      link: "https://www.ca.standwithcrypto.org/",
    },
    {
      name: "Hackathons Canada Organizing Team",
      description:
        "The best database for hackathons. Browse through to find a complete list of hackathons taking place in Canada and North America",
      image: HackathonsCanada,
      link: "https://www.linkedin.com/company/hackathonscanada/",
    },
    {
      name: "Omniwave Nexus",
      description:
        "Omniwave Nexus is a revolutionary public speaking tool. It sits at the convergence of IoT, web development, AI, blockchain, and professional brilliance",
      image: OmniwaveNexus,
      link: "https://www.linkedin.com/company/omniwave-nexus/",
    },
    {
        name: "Tom's Digest",
        description:
          "Passionate about technology, business, and sustainable development. Come on board to embark on my journey of insights, ideas, and progress!",
        image: TomDigest,
        link: "https://zhangtommy.substack.com/",
      },

    {
      name: "Earl Haig Secondary School",
      description:
        "Earl Haig Secondary School is located in North York. It serves a diverse population and is recognized for its academic focus, enthusiasm for learning, lively school spirit and commitment to the arts.",
      image: EHSS,
      link: "https://earlhaig.ca/main.php",
    },
    {
      name: "University of Waterloo",
      description:
        "A leading global research-intensive university, renowned for entrepreneurship and innovation, providing co-op and work-integrated learning at scale with impact.",
      image: UniversityOfWaterloo,
      link: "https://uwaterloo.ca/",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="communities-widget ">
      <h2 className="poppins-bold">Communities I'm Part Of</h2>

      <div
        className="communities-scroll-container poppins"
        ref={scrollContainerRef}
      >
        {communities.map((community, index) => (
          <div className="community-card" key={index}>
            <img
              src={community.image}
              alt={community.name}
              className="community-image"
            />
            <div className="community-info">
              <a
                href={community.link}
                className="community-link"
                target="_blank"
              >
                <h3 className="poppins-bold">{community.name}</h3>
              </a>
              <p className="community-description">{community.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <div className="see-more-btn" onClick={handleScrollLeft}>
          &#8592;
        </div>
        <div className="see-more-btn" onClick={handleScrollRight}>
          &#8594;
        </div>
      </div>
    </div>
  );
};

export default Communities;
