import React, { useEffect, useState } from "react";
import "./Body.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

function Body({ setLinks, links }) {
  const [inputValue, setInputValue] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const handleShort = async () => {
    try {
      setLoading(true);
      if (inputValue.length > 0) {
        const res = await axios(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        setShortenLink(res.data.result.full_short_link);
      }
    } catch (err) {
      alert("someting went wrong please refresh page...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shortenLink !== "") {
      setLinks([...links, shortenLink]);
    }
  }, [shortenLink]);

  return (
    <div className="container-body">
      <h1>More than just shorter Links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Shorten a link here...."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button className="btnShort" onClick={handleShort}>
          Shorten it!
        </button>
      </div>
      <div className={loading ? "loading-spinner" : ""}></div>
      <div className="ansBox">
        <div className="link">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : "copyBtn"}>
              {copied ? "COPIED" : "COPY"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Body;
