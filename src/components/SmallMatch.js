import setAccent from "../utils/setAccent";
import CategoryTitle from "./CategoryTitle"
import SmallCard from "./SmallCard";

const SmallMatch = ({title, contenders, status, winner, onSelectWinner}) => {
  const matchContenders = contenders.map((contender) => {
    const accent = setAccent({status, winner, contender})
    return <SmallCard
      category={contender}
      handleClick={onSelectWinner}
      key={contender._id}
      accent={accent}
      />
  });

  return (
    <div>
      <CategoryTitle title={title} size='small'/>
      <div className="small__category grid gap-4">
        {matchContenders}
      </div>
    </div>
  )
}

export default SmallMatch