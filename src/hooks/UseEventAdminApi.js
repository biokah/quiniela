import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

export default function useAdminMatchesApi({ eventId }) {
  const [event, setEvent] = useState({matches: []});
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const callApi = async () => {
      const token = await getAccessTokenSilently();
      const url = `${API_BASE_URL}/events/${eventId}/admin`;
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        if (responseData.statusCode === 403) {
          setError(responseData);
        }
        else {
          setEvent(responseData);
        }
      } catch(error) {
        setError(error);
      }
    };
    callApi();
  }, []);

  const updateMatchWinner  = (matchId, newWinner) => {
    const updatedMatches  = event.matches.map((match) => {
      const isMatch = match._id == matchId;
      return isMatch ? {...match, winner: newWinner} : match;
    })
    setEvent({...event, matches: updatedMatches});
  }

  const setMatchWinner = async (matchId, contenderId) => {
    try {
      const url = `${API_BASE_URL}/matches/${matchId}`;
      console.log({url, matchId, contenderId});
      const token = await getAccessTokenSilently();
      console.log(token);
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      const body = {
        contenderId: contenderId
      };
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }
      const response = await fetch(url, requestOptions);
      const jsonData = await response.json();
      if (jsonData.statusCode >= 400) {
        throw new Error(jsonData);
      }

      updateMatchWinner(matchId, contenderId);
    }
    catch (err) {
      setError(err);
    }
  }

  return {event, error, setMatchWinner};
}
