import "./ConnectWithMe.css";

const ConnectWithMe = () => {
  return (
    <div className="connect-container">
      <div className="profile-section">
        <img
          src="/path/to/your/profile.jpg"
          alt="Profile"
          className="profile-pic"
        />
      </div>
      <div className="links-section">
        <a
          href="https://www.linkedin.com/in/tom-zhang-485341274/"
          className="connect-link"
        >
          LinkedIn
        </a>
        <a href="https://github.com/MightyTMZ" className="connect-link">
          GitHub
        </a>
        <a href="https://x.com/tom_zhang20" className="connect-link">
          Twitter
        </a>
        {/*<a href="mailto:your.email@example.com" className="connect-link">
          Email Me
        </a> */}

        <a href="https://zhangtommy.substack.com/" className="connect-link">
          Personal Newsletter
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
