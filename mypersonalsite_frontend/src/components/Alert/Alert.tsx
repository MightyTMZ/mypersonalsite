import "./Alert.css";
import "../../fonts/Poppins.css";
import { useState } from "react";

const Alert = () => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (visible) {
    return (
      <>
        <div
          className="poppins alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Hello there!</strong> It's great to have you here! Feel free
          to connect with me across various platforms{" "}
          <a href="/#/connect-with-me">here</a>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={handleDismiss}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Alert;
