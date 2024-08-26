import { useEffect, useState } from "react";
import "./Quotes.css";

const Quotes = () => {
  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(`${backendServerAdress}/my-vision/quote-random`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data.count);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);
  console.log(quotes);

  const quotes1 = {
    hour: {
      content: "<p>Stay hungry. Stay foolish.</p>",
      context: "Steve Jobs",
    },
    day: {
      content:
        "<p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>",
      context: "Winston Churchill",
    },
    week: {
      content: "<p>The only way to do great work is to love what you do.</p>",
      context: "Steve Jobs",
    },
    month: {
      content: "<p>Don’t watch the clock; do what it does. Keep going.</p>",
      context: "Sam Levenson",
    },
    year: {
      content: "<p>Act as if what you do makes a difference. It does.</p>",
      context: "William James",
    },
  };

  return (
    <div className="quotes-widget poppins">
      {/* Quote of the Hour */}
      <div className="quote-section poppins first">
        <h3>Hour</h3>
        <hr style={{color: 'black'}} />
        <div dangerouslySetInnerHTML={{ __html: quotes1.hour.content }} />
        <p className="quote-context">— {quotes1.hour.context}</p>
      </div>

      {/* Quote of the Day */}
      <div className="quote-section poppins">
        <h3>Day</h3>
        <hr style={{color: 'black'}} />
        <div dangerouslySetInnerHTML={{ __html: quotes1.day.content }} />
        <p className="quote-context">— {quotes1.day.context}</p>
      </div>

      {/* Quote of the Week */}
      <div className="quote-section poppins">
        <h3>Week</h3>
        <hr style={{color: 'black'}} />
        <div dangerouslySetInnerHTML={{ __html: quotes1.week.content }} />
        <p className="quote-context">— {quotes1.week.context}</p>
      </div>

      {/* Quote of the Month */}
      <div className="quote-section poppins">
        <h3>Month</h3>
        <hr style={{color: 'black'}} />
        <div dangerouslySetInnerHTML={{ __html: quotes1.month.content }} />
        <p className="quote-context">— {quotes1.month.context}</p>
      </div>

      {/* Quote of the Year */}
      <div className="quote-section poppins last">
        <h3>Year</h3>
        <hr style={{color: 'black'}} />
        <div dangerouslySetInnerHTML={{ __html: quotes1.year.content }} />
        <p className="quote-context">— {quotes1.year.context}</p>
      </div>
    </div>
  );
};

export default Quotes;
