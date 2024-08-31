import { useState, useEffect } from "react";
import "../../fonts/Poppins.css";
import "./QuotesScroller.css";

interface Quote {
  id: number;
  content: string;
  context: string;
}

function QuotesScroller() {
  const [index, setIndex] = useState(0);
  const [live, setLive] = useState(true);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const backendServerAddress = "https://tomzhangpersonalsite.pythonanywhere.com";

  // Function to shuffle quotes
  function shuffleQuotes(array: Quote[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  useEffect(() => {
    fetch(`${backendServerAddress}/my-vision/all-quotes/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const shuffledQuotes = shuffleQuotes(data); // Shuffle the quotes after fetching
        setQuotes(shuffledQuotes);
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
