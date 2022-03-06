import { useState, useEffect } from "react";

export const useTypingGame = () => {
  const [textTarget, setTextTarget] = useState("text");
  const [wordContent, setWordContent] = useState("word");
  const [loc, setLoc] = useState(0);
  const [word, setWord] = useState([]);
  const [textWord, setTextWord] = useState("");
  const [wordLength, setWordLength] = useState(10);
  const [time, setTime] = useState("");
  const [start, setStart] = useState(false);
  const [clickStart, setClickStart] = useState("Click Start!!");
  const [textTargetNone, setTextTargetNone] = useState("");

  const wordBox = [
    ["百列張り手小足Ex百列張り手コンボ", "ppppp2kpppppp"],
    ["真・瞬獄殺", "pp4kp"],
    ["レッツゴージャスティーン", "6666666666666686k2k623p236236k"],
    ["隠しコマンド　カカロットォ", "8X2BLYRA"],
    ["瞬獄殺", "pp6kp"],
    ["ヨガフレイム", "63214p"],
    ["スクリューパイルドライバー", "63214789p"],
    ["ファイナルアトミックバスター", "6321478963214789p"],
    ["レイジングストーム", "1632143p"],
    ["八稚女", "2363214p"],
    ["天覇封神斬", "341236421p"],
    ["ラストアルマゲドンドロップ", "632147896321478963214789p"],
    ["古のタリズマン", "819738p"]
  ];

  const random = () => {
    const singleWord = word.splice(Math.floor(Math.random() * word.length), 1);
    setTextWord(singleWord[0]);
  };

  const setText = () => {
    setTextTarget(textWord[1]);
    setWordContent(textWord[0]);
  };

  const wordRandom = () => {
    random();
    setLoc(0);
    setWordLength(wordLength - 1);
    setTextTargetNone("");
  };

  const clickSet = () => {
    wordRandom();
    setStart(true);
    setClickStart("");
  };

  useEffect(() => {
    setWord(wordBox);
  }, []);

  useEffect(() => {
    setText();
  }, [textWord]);

  useEffect(() => {
    setTime(Date.now());
  }, [start]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === textTarget[loc]) {
      const nextLoc = loc + 1;
      setLoc(nextLoc);
      setTextTarget("_".repeat(nextLoc) + textTarget.substring(nextLoc));
      setTextTargetNone("_".repeat(nextLoc));
      if (nextLoc === textTarget.length) {
        wordRandom();
        if (wordLength === 0) {
          const elapsedTime = ((Date.now() - time) / 1000).toFixed(2);
          setTextTarget("YOU WIN!!");
          setWordContent(`${elapsedTime}second`);
        }
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [textTarget, loc]);

  return {
    wordRandom,
    wordContent,
    clickSet,
    clickStart,
    textTargetNone
  };
};
