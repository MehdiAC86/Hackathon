import CountDown from "../components/CountDown";
import "../assets/Style/app.css";
import Piano from "../components/Piano";

function App() {
  return (
    <>
      <h1>Merry Christmas</h1>
      <div>
        <CountDown />
      </div>
      <div>
        <Piano />
      </div>
    </>
  );
}

export default App;
