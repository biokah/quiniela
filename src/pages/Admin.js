import useEventAdmin from "../hooks/UseEventAdminApi";
import MainMatch from "../components/MainMatch";
import MediumMatch from "../components/MediumMatch";
import SmallMatch from "../components/SmallMatch";
import { useNavigate } from "react-router-dom";
import { DEFAULT_EVENT } from "../utils/deafults";

export default function Admin() {
  const { event, setMatchWinner, error } = useEventAdmin({
    eventId: DEFAULT_EVENT
  });
  const navigate = useNavigate();

  const mainCategories = ["Best Picture"];
  const mediumCategories = [
    "Directing",
    "Actor in a Leading Role",
    "Actress in a Leading Role",
    "Actor in a Supporting Role",
    "Actress in a Supporting Role",
    "Animated Feature Film"
  ];
  const smallCategories = [
    "Cinematography",
    "Costume Design",
    "Documentary Feature Film",
    "Documentary Short Film",
    "Film Editing",
    "International Feature Film",
    "Makeup & Hairstyling",
    "Music: Original Score",
    "Music: Original Song",
    "Production Design",
    "Short Film: Animated",
    "Short Film: Live Action",
    "Sound",
    "Visual Effects",
    "Writing: Adapted Screenplay",
    "Writing: Original Screenplay"
  ];

  if (error) {
    navigate('/');
  }
  const mainMatches = event.matches
    .filter((match) => mainCategories.indexOf(match.title) > -1)
    .map((match) => {
      const selectWinnerHandler = (contenderId) =>
        setMatchWinner(match._id, contenderId);
      return (
        <MainMatch
          title={match.title}
          contenders={match.contenders}
          key={match._id}
          onSelectWinner={selectWinnerHandler}
          // status={match.status}
          winner={match.winner}
        />
      );
    });
  const mediumMatches = event.matches
    .filter((match) => mediumCategories.indexOf(match.title) > -1)
    .map((match) => {
      const selectWinnerHandler = (contenderId) =>
        setMatchWinner(match._id, contenderId);
      return (
        <MediumMatch
          title={match.title}
          contenders={match.contenders}
          key={match._id}
          onSelectWinner={selectWinnerHandler}
          // status={match.status}
          winner={match.winner}
        />
      );
    });
  const smallMatches = event.matches
    .filter((match) => smallCategories.indexOf(match.title) > -1)
    .map((match) => {
      const selectWinnerHandler = (contenderId) =>
        setMatchWinner(match._id, contenderId);
      return (
        <SmallMatch
          title={match.title}
          contenders={match.contenders}
          key={match._id}
          onSelectWinner={selectWinnerHandler}
          // status={match.status}
          winner={match.winner}
        />
      );
    });
  return (
    <>
      {/* Big categories */}
      {event && event.matches.length ? (
        <div className="container m-auto">
          {mainMatches}

          {/* Medium categories */}
          <div className="medium__category grid gap-4">{mediumMatches}</div>

          {/* Small Categories */}
          <div className="small__category grid gap-4">{smallMatches}</div>
        </div>
      ) : null}
    </>
  );
}
