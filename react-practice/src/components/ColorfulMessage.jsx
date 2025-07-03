export const ColorfulMessage = ({ color, children }) => {
  // └->引数部分で分割代入も可能
  // const { color, children } = props; // 分割代入するとコードがすっきり
  const contentStyleA = {
    color, // color: color, と同じ
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
