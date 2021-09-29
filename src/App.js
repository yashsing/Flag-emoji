import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🇦🇪 ": "United Arab Emirates",
  "🇨🇦": "Canada",
  "🇨🇭": "Switzerland",
  "🇫🇷": "France",
  "🇬🇧": "United Kingdom",
  "🇮🇳": "India",
  "🇺🇸": "United States",
  "🇻🇳": "Vietnam",
  "🇺🇳": "United Nations",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland",
  "🇸🇬": "Singapore"
};

export default function App() {
  var [userInput, setUserInput] = useState("");

  function inputText(event) {
    var userInput = event.target.value;
    if (userInput === "") {
      setUserInput("");
    } else {
      var emoji = emojiDictionary[userInput];
      if (emoji === undefined) {
        setUserInput(
          "Sorry, this is not available in our dictionary, try another emoji"
        );
      } else {
        setUserInput(emoji);
      }
      console.log(emoji);
      console.log(userInput);
    }
  }

  var emojiArray = Object.keys(emojiDictionary);

  function clickHandler(emojidata) {
    var meaning = emojiDictionary[emojidata];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 className="header">Flag Emoji's </h1>
      <div className="output-text">{userInput}</div>
      <input
        className="input-text"
        onChange={inputText}
        placeholder="Type your emoji here"
      ></input>
      <h3>Click on emoji to know the meaning</h3>
      <ul className="emoji-container">
        {emojiArray.map((emojiSymbol) => (
          <li
            className="emoji-style"
            onClick={function () {
              clickHandler(emojiSymbol);
            }}
          >
            {emojiSymbol}
          </li>
        ))}
      </ul>
      <footer class="footer">MARK-8</footer>
    </div>
  );
}
