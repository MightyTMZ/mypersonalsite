import { useRef } from "react";
import OrbitView_Media from "../../assets/OrbitView_Media.png";
import StandWithCrypto from "../../assets/stand_with_crypto.webp";
import TokenZLabs from "../../assets/d98zT8GD_400x400.jpg";
import IBM_Skills_Network from "../../assets/342044989_533754578930833_3379502332613601_n.jpg";
import UniversityOfWaterloo from "../../assets/UWaterloo.webp";
import EHSS from "../../assets/EHSS.png";
import TomDigest from "../../assets/tz-digests.png";
import "./MyCommunities.css";
import "../../fonts/Poppins.css";

const Communities = () => {
  const communities = [
    {
      name: "OrbitView",
      description: `Where Innovation Connects. Immerse, Network, and Build the Future in a World of Endless Possibilities.
Pushing the bounds by building an ultra-immersive 3D professional networking platform, autonomous AI networking for you, and a content hub that transforms knowledge absorption into an experience rather than a chore.`,
      image: OrbitView_Media,
      link: "https://www.linkedin.com/company/orbitview-media/",
    },
    {
      name: "Token Z Labs",
      description:
        "Token Z Labs is the world’s 1st on-chain platform for luxury real estate, catering to global investors. Our platform offers a unique experience of buying/ selling luxury properties. No intermediaries or hefty broker fees! 🚀Unified, User-Centric, Universal Ledger for Capital Markets | RWA | Mint, Manage, Trade real-world-assets globally.🌎",
      image: TokenZLabs,
      link: "https://www.linkedin.com/company/tokenzlabs/",
    },
    {
      name: "IBM Skills Network",
      description:
        "Creating technical courses, guided projects, and more. Proud and honored to contribute to the process of building this knowledgebase to help build amazing courses and guided projects with Skill's Network Author Workbench provided by IBM.",
      image: IBM_Skills_Network,
      link: "https://skills.network/",
    },
    {
      name: "Stand With Crypto",
      description:
        "Stand With Crypto unites web3 builders and crypto advocates across Canada to champion emerging use cases, support innovative businesses, and foster a thriving blockchain ecosystem that drives economic growth.",
      image: StandWithCrypto,
      link: "https://www.ca.standwithcrypto.org/",
    },
    /*{
      name: "Hackathons Canada Organizing Team",
      description:
        "The best database for hackathons. Browse through to find a complete list of hackathons taking place in Canada and North America",
      image: HackathonsCanada,
      link: "https://www.linkedin.com/company/hackathonscanada/",
    },*/
    /*{
      name: "Omniwave Nexus",
      description:
        "Omniwave Nexus is a revolutionary public speaking tool. It sits at the convergence of IoT, web development, AI, blockchain, and professional brilliance",
      image: OmniwaveNexus,
      link: "https://www.linkedin.com/company/omniwave-nexus/",
    },*/
    {
      name: "Tom Zhang's Digest",
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
