import usePredictionsApi from "../hooks/UsePredictionsApi";
import MainMatch from "../components/MainMatch";
import MediumMatch from "../components/MediumMatch";
import SmallMatch from "../components/SmallMatch";

// const MAIN_MATCHES =

export default function Home() {
  const {predictions: categories, setMatchWinner} = usePredictionsApi({
    eventId: '63f544f1708e8e8992020e9a'
  });

  const mainMatches = categories.slice(0, 1).map((category) => {
    const selectWinnerHandler = (contenderId) => setMatchWinner(category._id, contenderId);
    return <MainMatch
      title={category.match.title}
      contenders={category.match.contenders}
      key={category._id}
      onSelectWinner={selectWinnerHandler}
      status={category.status}
      winner={category.winner}
      />
  });
  const mediumMatches = categories.slice(1, 7).map((category) => {
    const selectWinnerHandler = (contenderId) => setMatchWinner(category._id, contenderId);
    return <MediumMatch
    title={category.match.title}
    contenders={category.match.contenders}
    key={category._id}
    onSelectWinner={selectWinnerHandler}
    status={category.status}
    winner={category.winner}
    />
  })
  const smallMatches = categories.slice(7).map((category) => {
    const selectWinnerHandler = (contenderId) => setMatchWinner(category._id, contenderId);
    return <SmallMatch
      title={category.match.title}
      contenders={category.match.contenders}
      key={category._id}
      onSelectWinner={selectWinnerHandler}
      status={category.status}
      winner={category.winner}
      />
  })
  return (
    <>
      {/* Big categories */}
      {categories.length ? (
        <div className="container m-auto">
          {mainMatches}

          {/* Medium categories */}
          <div className="medium__category grid gap-4">
            {mediumMatches}
          </div>

          {/* Small Categories */}
          <div className="small__category grid gap-4">
           {smallMatches}
          </div>
        </div>
      ) : null}
    </>
  );
}
