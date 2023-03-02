import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export default function usePredictionsApi({eventId}) {

    const [predictions, setPredictions] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    const url = `${process.env.REACT_APP_API_BASE_URL}/predictions/${eventId}`;

    useEffect(()=>{
      const callApi = async () => {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          url,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const responseData = await response.json();
        setPredictions(responseData);
      };
        callApi();
    }, [url]);

    const updatePredictionWinner  = (predictionId, newWinner) => {
      const updatedPredictions  = predictions.map((prediction) => {
        const isMatch = prediction._id == predictionId;
        return isMatch ? {...prediction, winner: newWinner} : prediction;
      })
      setPredictions(updatedPredictions);
    }

    const setMatchWinner = async (predictionId, contenderId) => {
      try {
        const url = `${process.env.REACT_APP_API_BASE_URL}/predictions/${predictionId}`;
        console.log({url, predictionId, contenderId});
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
          method: 'PATCH',
          headers,
          body: JSON.stringify(body)
        }
        const updatedPrediction = await fetch(url, requestOptions);
        const res = await updatedPrediction.json();
        console.log(res);
        updatePredictionWinner(predictionId, contenderId);
      }
      catch (err) {
        console.log(err);
      }
    }

    return { predictions, setMatchWinner }
}

