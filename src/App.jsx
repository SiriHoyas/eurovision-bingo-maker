import "./App.css";

import BingoBoard from "./components/BingoBoard";
import getRandomTiles from "./functions/randomTile";

function App() {
  const handlePrint = () => {
    window.print();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <main>
      <div className="buttons">
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleRefresh} className="secondary">
          Generate!
        </button>
      </div>

      <div className="bingoBoards">
        <BingoBoard />
        <BingoBoard />
      </div>
    </main>
  );
}

export default App;
