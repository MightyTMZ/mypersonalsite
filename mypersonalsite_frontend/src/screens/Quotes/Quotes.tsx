import { useEffect, useState } from "react";
import "./Quotes.css";

const Quotes = () => {
  const emptyQuote = {
    content: "Content",
    context: "Context",
  };

  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";
  const [quoteOfHour, setQuoteOfHour] = useState(emptyQuote);
  const [quoteOfDay, setQuoteOfDay] = useState(emptyQuote);
  const [quoteOfWeek, setQuoteOfWeek] = useState(emptyQuote);
  const [quoteOfMonth, setQuoteOfMonth] = useState(emptyQuote);

  // Fetch quote of the hour
  useEffect(() => {
    fetch(`${backendServerAdress}/my-vision/quote-hour/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuoteOfHour(data);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);

  // Fetch quote of the day
  useEffect(() => {
    fetch(`${backendServerAdress}/my-vision/quote-day/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuoteOfDay(data);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);

  // Fetch quote of the week
  useEffect(() => {
    fetch(`${backendServerAdress}/my-vision/quote-week/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuoteOfWeek(data);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);

  // Fetch quote of the month
  useEffect(() => {
    fetch(`${backendServerAdress}/my-vision/quote-month/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuoteOfMonth(data);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);

  const quoteOfYearContent = `<p>"The people who are crazy enough to think they can change the world are the ones who do."</p>`;
  const quoteOfYearContext = "Steve Jobs, Think Different (Apple)";

  return (
    <div className="quotes-widget poppins">
      {/* Quote of the Hour */}
      <div className="quote-section poppins first">
        <h3>HOUR</h3>

        <div dangerouslySetInnerHTML={{ __html: quoteOfHour.content }} />
        <p className="quote-context">— {quoteOfHour.context}</p>
      </div>

      {/* Quote of the Day */}
      <div className="quote-section poppins">
        <h3>DAY</h3>

        <div dangerouslySetInnerHTML={{ __html: quoteOfDay.content }} />
        <p className="quote-context">— {quoteOfDay.context}</p>
      </div>

      {/* Quote of the Week */}
      <div className="quote-section poppins">
        <h3>WEEK</h3>

        <div dangerouslySetInnerHTML={{ __html: quoteOfWeek.content }} />
        <p className="quote-context">— {quoteOfWeek.context}</p>
      </div>

      {/* Quote of the Month */}
      <div className="quote-section poppins">
        <h3>MONTH</h3>

        <div dangerouslySetInnerHTML={{ __html: quoteOfMonth.content }} />
        <p className="quote-context">— {quoteOfMonth.context}</p>
      </div>

      {/* Quote of the Year */}
      <div className="quote-section poppins last">
        <h3>YEAR</h3>

        <div dangerouslySetInnerHTML={{ __html: quoteOfYearContent }} />
        <p className="quote-context">— {quoteOfYearContext}</p>
      </div>
    </div>
  );
};

export default Quotes;
