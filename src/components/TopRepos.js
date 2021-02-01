import { useState } from "react";
import "./TopRepos.css";

function TopRepos() {
  const [languages, setLanguages] = useState([
    "All",
    "Java",
    "Javascript",
    "Python",
    "Ruby",
  ]);

  //if selectedLanguage === language then className= "selected", className=""
  // selectedLanguage===language ? className="selected" : className=""

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const [selectedLanguage, setSelectedLanguage] = useState("All");
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
        {/* <button>All</button>
        <button>Java</button>
        <button>Javascript</button>
        <button>Python</button>
        <button>Ruby</button> */}
      </nav>
    </>
  );
}

export default TopRepos;
