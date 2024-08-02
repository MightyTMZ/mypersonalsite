import "./Education.css";
import NavBar from "../../components/NavBar/NavBar";
import EHSS from "../../assets/EHSS.png";
import UWaterloo from "../../assets/UWaterloo.webp";
import WB from "../../assets/TheWorldBank.png";
import IMF from "../../assets/InternationalMonetaryFund.png";
import ADB from "../../assets/AsianDevelopmentBank.png";

const Education = () => {
  const education = [
    {
      name: "Earl Haig Secondary School",
      start_date: "September 2022",
      end_date: "June 2026",
      description: "Ontario Secondary School Diploma (OSSD)",
      logo: EHSS,
    },
    {
      name: "Catalyst for Early Entrepreneurs",
      start_date: "July 2024",
      end_date: "August 2024",
      description: "Entrepreneurship & Entrepreneurial Studies",
      logo: UWaterloo,
    },
    {
      name: "The World Bank Open Learning Campus",
      start_date: "July 2024",
      end_date: "October 2024",
      description: `
        Unlocking Investment and Finance in Emerging Markets and Developing Economies (EMDEs)\n
        - Digital Agriculture\n
        - Solid Waste Management\n
        - Smart Cities for Sustainable Development\n
        - Introduction to Public Expenditure and Financial Accountability (PEFA)\n
        - Urban Rail Development\n
        - Urban Upgrading for Inclusion, Sustainability and Resilience in a time of Global Pandemics\n
        - Railway Financing\n
        - Mainstreaming Technologies in Green, Blue, and Clean Operations\n
        - Innovative Business Models for Expanding Fiber-Optic Networks and Closing the Access Gaps\n
        - Strengthening Geospatial Information Management: Using the Integrated Geospatial Information Framework\n
        - Policy Lessons from South Korea's Development\n
        - Investing in Quality Infrastructure for a Green, Inclusive and Resilient Recovery
      `,
      logo: WB,
    },
    {
      name: "Asian Development Bank Institute (ADBI)",
      start_date: "August 2024",
      end_date: "October 2024",
      description: `
        Circular Economy: Increasing Resource Efficiency and Designing Out Waste​
        - Infrastructure Financing Foundations
        - Artificial Intelligence (AI) for Social Impact
        - Green Investments: Renewable Energy
        - Infrastructure Development Frameworks and Commercialization Opportunities
        - Sustainable and Quality Infrastructure Beyond the COVID-19 Pandemic
        - The Role of Central Banks and Financial Supervisory Authorities in Governing Sustainable Finance
        - Climate Change and Sovereign Risk
        - Governing Sustainable Finance
        - Demographic Transition and its Impacts
        - Energy Economics, Environment, and Policy
        - Leveraging Services for Development: Prospects and Policies
        - Financial Globalization, Capital Flows, and the Global Financial Cycle
        - Financial Inclusion: Evolution and Contemporary Challenges
        - Achieving Sustainable Development Goals on Water and Sanitation
        - Financial Inclusion, Financial Literacy, and Financial Education in Asia
        - Private Financing for Infrastructure and Sustainable Growth
        `,
      logo: ADB,
    },
    {
      name: "International Monetary Fund (edX)",
      start_date: "September 2024",
      end_date: "November 2024",
      description: `
        Financial Market Analysis
        - Quarterly National Accounts and High-Frequency Indicators of Economic Activity
        - Macroeconometric Forecasting
        - Macroeconomics of Climate Change: Economics and Policies, Mitigation Strategies, Green Public Finance, Climate Risks for the Financial Sector, Transitioning to Net-zero, Economics of Adaptation
        - Public Financial Management
        - Macroeconomic Diagnostics
        - Foundations of Central Bank Law
        - Monetary Policy Analysis
        - Government Finance Statistics
        - National Accounts Statistics
        - Debt Sustainability Framework for Low Income Countries
        - Public Sector Debt Statistics
        - Inclusive Growth: Fiscal Policy and Governance
        - Cyber Risk Supervision
        - Government Finance Statistics
        - Financial Programming and Policies, Part 1: Macroeconomic Accounts & Analysis
        - Financial Programming and Policies, Part 2: Program Design
        - Consumer Price Index
        `,
      logo: IMF,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="education-container">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <img
              src={edu.logo}
              alt={`${edu.name} logo`}
              className="education-logo"
            />
            <div className="education-details">
              <h2 className="education-name">{edu.name}</h2>
              <p className="education-dates">
                {edu.start_date} - {edu.end_date}
              </p>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
