import React from "react";

const MatchTable = ({ match }) => {
  // เรียงลำดับ player ตามคะแนนจากมากไปน้อย
  const sortedPlayers = match.match_data[0].player.sort((a, b) => b.score - a.score);

  return (
    <div>
      <h2>Match: {match.match_data[0].match}</h2>
      <h2>Mode: {match.match_data[0].mode}</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
                <td>{index +1}</td>
              <td>{player.codingamerNickname}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchTable;
