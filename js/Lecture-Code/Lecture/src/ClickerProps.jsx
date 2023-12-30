export default function ClickerProps({ msg, btnText }) {
  //one way is to define the function in the main function then use it
  //   function displayMsg() {
  //     alert(msg);
  //   }
  return (
    <div>
      <button onClick={() => alert(msg)}>{btnText}</button>
    </div>
  );
}
