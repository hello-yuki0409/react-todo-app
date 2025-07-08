import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // 処理が変わらない場合は使い回す
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChange} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
