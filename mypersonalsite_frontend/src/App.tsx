import Certificates from "./screens/Certificates/Certificates";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ConnectWithMe from "./screens/Connect With Me/ConnectWithMe";
import logo from './assets/meta.webp'; // Correct import path for the logo
import logo2 from './assets/ibm.jpg'; // Correct import path for the logo

function App() {
  let certs = [
    {
        title: "Meta Back-End Developer Professional Certificate",
        issuer: {
            name: "Meta",
            url: "https://www.linkedin.com/company/meta/",
            logo: logo // Assign the imported logo here directly
        },
        url: "https://www.coursera.org/account/accomplishments/specialization/L54BNPRXXHHR"
    }, 
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: {
          name: "IBM",
          url: "https://www.linkedin.com/company/ibm/",
          logo: logo2 // Assign the imported logo here directly
      },
      url: "https://www.coursera.org/account/accomplishments/specialization/L54BNPRXXHHR"
  }
  ];

  return (
      <div className="container">
        <NavBar />
        <ConnectWithMe/>
        <Footer />
      </div>
  );
}

export default App;
