import usePredictionsApi from "../hooks/UsePredictionsApi";
import MainMatch from "../components/MainMatch";
import MediumMatch from "../components/MediumMatch";
import SmallMatch from "../components/SmallMatch";
import { DEFAULT_EVENT } from "../utils/deafults";

// const MAIN_MATCHES =

export default function Home() {
  const { predictions: categories, setMatchWinner } = usePredictionsApi({
    eventId: DEFAULT_EVENT
  });

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

  const mainMatches = categories
    .filter((item) => mainCategories.indexOf(item.match.title) > -1)
    .map((category) => {
      const selectWinnerHandler = (contenderId) =>
        setMatchWinner(category._id, contenderId);
      return (
        <MainMatch
          title={category.match.title}
          contenders={category.match.contenders}
          key={category._id}
          onSelectWinner={selectWinnerHandler}
          status={category.status}
          winner={category.winner}
        />
      );
    });
  const mediumMatches = categories
    .filter((item) => mediumCategories.indexOf(item.match.title) > -1)
    .map((category) => {
      const selectWinnerHandler = (contenderId) =>
        setMatchWinner(category._id, contenderId);
      return (
        <MediumMatch
          title={category.match.title}
          contenders={category.match.contenders}
          key={category._id}
          onSelectWinner={selectWinnerHandler}
          status={category.status}
          winner={category.winner}
        />
      );
    });
  const smallMatches = categories
    .filter((item) => smallCategories.indexOf(item.match.title) > -1)
    .map((category) => {
      const selectWinnerHandler = (contenderId) =>
        setMatchWinner(category._id, contenderId);
      return (
        <SmallMatch
          title={category.match.title}
          contenders={category.match.contenders}
          key={category._id}
          onSelectWinner={selectWinnerHandler}
          status={category.status}
          winner={category.winner}
        />
      );
    });
  return (
    <>
      {/* Big categories */}
      {categories.length ? (
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
