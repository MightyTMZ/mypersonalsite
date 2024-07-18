import "./Certificates.css";

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
      className="certificate-card"
      style={{
        border: "1px solid grey",
        padding: "10px",
      }}
    >
      <a href={issuer.url} target="_blank" rel="noopener noreferrer">
        <img src={issuer.logo} alt={`${issuer.name} logo`} className="logo" />
      </a>
      <h3>{title}</h3>
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
    <div className="certificates-container" style={{ marginTop: "20px"}}>
        <hr/>
      {certificates.map((cert, index) => (
        <CertificateCard key={index} certificate={cert} />
      ))}
    </div>
  );
};

export default Certificates;
