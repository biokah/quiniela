export default function MediumCard ({category, handleClick, accent}) {
    return (
        <article className={`c__medium-card mb-2 flex h-12 text-sm bg-white overflow-hidden shadow-default rounded-lg mb-4 ${accent}`} onClick={() => handleClick(category._id)}>
            <img src={category.image} alt="" className="object-cover object-center mr-2" />
            <div className="bg-white flex flex-col justify-center">
                <p className="font-semibold mb-2">{category.name}</p>
                {category.description ?  <p>{category.description}</p> : null}
            </div>
        </article>
    )
}