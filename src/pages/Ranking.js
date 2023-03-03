import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { DEFAULT_EVENT } from "../utils/deafults";
const apiBaseUrl = `${process.env.REACT_APP_API_BASE_URL}`;
export default function Ranking() {
  const { getAccessTokenSilently } = useAuth0();
  const [rankings, setRankings] = useState([]);
  useEffect(() => {
    const getRanking = async () => {
        const token = await getAccessTokenSilently();
        const url = `${apiBaseUrl}/rankings/${DEFAULT_EVENT}`;
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonData = await response.json();
        setRankings(jsonData);
    }
    getRanking();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Ranking</h1>
      <p>
        La ceremonia de los Premios Óscar se llevará a cabo el domingo 12 de
        marzo de 2023. Durante el evento, actualizaremos los resultados tan
        pronto como se vayan anunciando, y este ranking se actualizará conforme
        a los resultados de los participantes.
      </p>
      <div className="bg-zinc-50 rankings m-auto rounded mt-8 p-3">
        <table className="w-full border-spacing-y-3 ">
          <tbody>
            <tr className="border-b border-solid border-zinc-400 py-2">
              <th className="text-left"></th>
              <th className="text-left">Name</th>
              <th className="text-left">Points</th>
            </tr>

            {rankings &&
              rankings.map((item, index) => {
                return (
                  <tr
                    className="border-b border-solid border-zinc-400 py-4"
                    key={index}
                  >
                    <td>{index}</td>
                    <td>{item.owner.name}</td>
                    <td>{item.points}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
