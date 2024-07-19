import "./Certificates.css";
import "../../fonts/Poppins.css"
import NavBar from "../../components/NavBar/NavBar";
// import Footer from "../../components/Footer/Footer";
import { Fragment } from "react/jsx-runtime";

interface Issuer {
  name: string;
  url: string;
  logo: string;
}

interface Certificate {
  title: string;
  issuer: Issuer;
  url: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const { title, issuer, url } = certificate;

  const handleViewCertificate = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="certificate-card poppins"
      style={{
        border: "1px solid grey",
        padding: "10px",
      }}
    >
      <a href={issuer.url} target="_blank" rel="noopener noreferrer">
        <img src={issuer.logo} alt={`${issuer.name} logo`} className="logo" />
      </a>
      <h3>{title}</h3>
      {/* add a feature that sets the color of the button based on the color of the company's logo*/}
      <button className="view-button" onClick={handleViewCertificate}>
        View
      </button>
    </div>
  );
};

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <Fragment>
      <div className="container">
        <NavBar />
        <h1 className="certificates-heading poppins poppins-white">Certificates</h1>
        <div className="certificates-container" style={{ marginTop: "20px" }}>
          <hr />
          {certificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

const CertificatesPage = () => {
  let certificates = [
    {
      title: "Meta Back-End Developer Professional Certificate",
      issuer: {
        name: "Meta",
        url: "https://www.linkedin.com/company/meta/",
        logo: "logo", // Assign the imported logo here directly
      },
      url: "https://www.coursera.org/account/accomplishments/specialization/L54BNPRXXHHR",
    },
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: {
        name: "IBM",
        url: "https://www.linkedin.com/company/ibm/",
        logo: "logo2", // Assign the imported logo here directly
      },
      url: "https://www.coursera.org/account/accomplishments/specialization/L54BNPRXXHHR",
    },
  ];

  return <Certificates certificates={certificates} />;
};

export default CertificatesPage;
