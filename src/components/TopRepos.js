import { useState, useEffect } from "react";
// import Axios from "axios";
import "./TopRepos.css";

function TopRepos() {
  const [languages, setLanguages] = useState([
    "All",
    "Java",
    "Javascript",
    "Python",
    "Ruby",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <nav>
        {languages.map((language, index) => {
          return (
            <button
              key={index}
              className={selectedLanguage === language ? "selected" : ""}
              onClick={() => {
                changeLanguage(language);
              }}
            >
              {language}
            </button>
          );
        })}
      </nav>
      <div></div>
    </>
  );
}

export default TopRepos;
