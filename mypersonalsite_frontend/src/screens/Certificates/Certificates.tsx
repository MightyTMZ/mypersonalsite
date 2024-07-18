import "./Certificates.css";

interface Certificate {
    title: string;
    organization: string;
    viewLink: string;
}

interface CertificatesProps {
    certificates: Certificate[];
}

const CertificateCard: React.FC<Certificate> = ({ title, organization, viewLink }) => {
    return (
        <div className="certificate-card">
            <h3>{title}</h3>
            <p className="organization">{organization}</p>
            <a href={viewLink} className="view-button">View</a>
        </div>
    );
};

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
    return (
        <div className="certificates-container">
            {certificates.map(cert => (
                <CertificateCard
                    title={cert.title}
                    organization={cert.organization}
                    viewLink={cert.viewLink}
                />
            ))}
        </div>
    );
};

export default Certificates;
