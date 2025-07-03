import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // すでにisShowFaceがtrueのときに値を返す。（評価終了）
        isShowFace || setIsShowFace(true); // こうしないとToo many re-renders. ... loop.エラーでる
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]); // numが更新されるたびに実行される

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気？</ColorfulMessage>
      <ColorfulMessage color="green">お元気ですよ？</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>Σ('◉⌓◉’)</p>}
    </>
  );
};
