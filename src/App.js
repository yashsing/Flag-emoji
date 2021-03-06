import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "đ": "Chequered Flag",
  "đŠ": "Triangular Flag",
  "đŚđŞ ": "United Arab Emirates",
  "đ¨đŚ": "Canada",
  "đ¨đ­": "Switzerland",
  "đŤđˇ": "France",
  "đŹđ§": "United Kingdom",
  "đŽđł": "India",
  "đşđ¸": "United States",
  "đťđł": "Vietnam",
  "đşđł": "United Nations",
  "đ´ó §ó ˘ó łó Łó ´ó ż": "Scotland",
  "đ¸đŹ": "Singapore"
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
