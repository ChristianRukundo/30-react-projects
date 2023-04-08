import "./App.css";
import TitleComponent from "./TitleComponent";
// import './TitleComponent'
// import ColorRandomizer from './ColorRandomizer/ColorRandomizer'
import LikeMyPhoto from "./like my photo/LikeMyPhoto";

function App() {
  return (
    <div className="App">
      {/* <TitleComponent text="Random Color"/> */}
      {/* <ColorRandomizer /> */}
      <TitleComponent text="Like My photo" />
      <LikeMyPhoto />
    </div>
  );
}

export default App;
