import { useEffect, useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [isStatusOk, setIsStatusOk] = useState("❌");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCheckApiStatus = async () => {
    try {
      const response = await fetch(apiStatusUrl);

      if (response.ok) {
        setIsStatusOk("✅");
        setErrorMessage(null);
      } else {
        setIsStatusOk("❌");
        const errorData = await response.json();
        setErrorMessage(errorData.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error checking API status:", error);
      setIsStatusOk("❌");
      setErrorMessage("Network error or API unavailable.");
    }
  };

  useEffect(() => {
    handleCheckApiStatus();
  }, []);

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{isStatusOk}</span>
        {errorMessage && <p className="status-check__error">{errorMessage}</p>}
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
