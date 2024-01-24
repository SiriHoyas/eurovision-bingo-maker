import React from "react";
import getRandomTiles from "../functions/randomTile";
import icon from "./../icon.png";

const BingoBoard = () => {
  const tiles = getRandomTiles();

  if (tiles) {
    const tilesWithBlank = [...tiles];
    tilesWithBlank.splice(12, 0, { statement: <img src={icon} alt="icon" className="icon" /> });

    const rows = [];
    for (let i = 0; i < tilesWithBlank.length; i += 5) {
      rows.push(tilesWithBlank.slice(i, i + 5));
    }

    return (
      <div className="bingo-board">
        <h1 className="bingo-heading">Eurovision Drinking Contest</h1>
        <h2 className="bingo-heading">Bingo!</h2>
        <table>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((tile, innerIndex) => (
                  <td key={innerIndex}>{tile.statement}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default BingoBoard;
