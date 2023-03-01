export default function LargeCard ({category, handleClick, accent}) {
    return (
        <article className={`contender w-full text-center relative large-card text-sm rounded-lg shadow-default ${accent}`} onClick={() => { handleClick(category._id) }}>
            <img src={category.image} alt="" className="w-full object-cover object-center" />
            <div className="flex items-center justify-center h-[50px]">
                <p className="font-semibold capitalize">{category.name}</p>
            </div>
            <section className="border-active"></section>
        </article>
    )
}