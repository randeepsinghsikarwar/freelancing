import "./App.css";
import ListingsContainer from "./ListingsContainer";
import data from "./data";
import Clicker from "./Clicker";
import Form from "./Form";
import ClickerProps from "./ClickerProps";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ListingsContainer items={data} />
      <Clicker />
      <Form />
      <ClickerProps msg="Hello World" btnText="Hello" />
      <ClickerProps msg="You're awesome!" btnText="Awesome" />
    </>
  );
}

export default App;
