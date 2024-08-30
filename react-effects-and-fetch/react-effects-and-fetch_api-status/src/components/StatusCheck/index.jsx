import { useEffect, useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [isStatusOk, setIsStatusOk] = useState("❌");
  // Something needs to change here…
  // ↙️
  const handleCheckApiStatus = async () => {
    /**
     * Hint 1:
     * Use the `fetch()` function and pass the `apiStatusUrl` into it
     *
     * Hint 2:
     * The fetch function returns a promise which resolves to a Response
     * object once it is ready.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--

    const response = await fetch(apiStatusUrl);
    console.log(response, response.ok);

    if (response.ok) {
      setIsStatusOk("✅");
    } else {
      setIsStatusOk("❌");
    }
    // --^-- write your code here --^--
  };
  useEffect(() => {
    handleCheckApiStatus();

    return () => {};
  }, []);

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{isStatusOk}</span>
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
