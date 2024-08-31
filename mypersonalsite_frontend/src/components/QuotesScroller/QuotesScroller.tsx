import { useState, useEffect } from "react";
import "../../fonts/Poppins.css";
import "./QuotesScroller.css";
// import { FaPlayCircle, FaPauseCircle } from "react-icons/fa"; // Combine import statements

interface Quote {
  id: number;
  content: string;
  context: string;
}

function QuotesScroller() {
  const [index, setIndex] = useState(0);
  const [live, setLive] = useState(true);
  const [quotes, setQuotes] = useState<Quote[]>([]); // Initialize quotes as an empty array
  const backendServerAddress =
    "https://tomzhangpersonalsite.pythonanywhere.com";

  useEffect(() => {
    fetch(`${backendServerAddress}/my-vision/all-quotes/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  useEffect(() => {
    if (live && quotes.length > 0) {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [live, quotes.length]);

  const handleClick = () => {
    setLive(!live);
  };

  if (quotes.length === 0) {
    return <div>Loading...</div>; // Display loading or handle empty state
  }

  return (
    <>
      <div className="quotes-container poppins" onClick={handleClick}>
        <div
          dangerouslySetInnerHTML={{ __html: quotes[index].content }}
          className="quote"
        ></div>
        <div className="context">- {quotes[index].context}</div>
        <div className="instructions">
          <p>Tap to {live ? "pause" : "play"}</p>
        </div>
      </div>
  
    </>
  );
}

export default QuotesScroller;
