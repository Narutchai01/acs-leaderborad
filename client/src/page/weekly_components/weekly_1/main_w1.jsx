import React, { useState, useEffect } from "react";
import MatchTable from "../data_for_all";

const W1_Main = () => {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    fetchMatchData(1); // ตั้งค่า default แสดง match 1 ในแต่ละ weekly
  }, []);

  const fetchMatchData = async (matchId) => {
    try {
      const response = await fetch(`https://acs-coc-api.wachawich.repl.co/api/1/${matchId}`);
      // api ถ้าจะใช้ localhost ให้ลบอันเก่า ยกเว้น /id of weely/match_id
      const data = await response.json();
      setMatchData(data);
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchMatchData(1)}>Match 1</button>
      <button onClick={() => fetchMatchData(2)}>Match 2</button>
      {matchData && <MatchTable match={matchData} />}
    </div>
  );
};

export default W1_Main;