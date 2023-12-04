import dataGetter, { players, clubs } from "#type/data";
import { API_RESULT } from "./types";
const Main: dataGetter = async (settings, past_data) => {
  console.log(past_data);
  const data: API_RESULT = await (await fetch("https://example.com")).json();
  const transfer_open = !!settings.always_transfer_open || true;
  const countdown = 120; // 120 seconds for countdown
  const playerList: players[] = data.players; // A list of players
  const clubs: clubs[] = [];
  return [transfer_open, countdown, playerList, clubs];
};
export default Main;
