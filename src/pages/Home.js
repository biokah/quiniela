// components
import LargeCard from "../components/LargeCard"
import MediumCard from "../components/MediumCard"
import SmallCard from "../components/SmallCard"
import CategoryTitle from "../components/CategoryTItle";

// custom hooks
import useFetch from "../hooks/UseFetch";

export default function Home () {
    const { categories } = useFetch("http://localhost:3001/events/63e29431e69daec47ab4c47b")

    const handleClick = (id) => {
        console.log(id)
    }

    return(
        <>
            {/* Big categories */}
            {categories?.matches ? 
                
                <div className="container m-auto">
                    <CategoryTitle title={categories.matches[0].title} size="large" />    
                    <div className="large-card__wrapper grid gap-4">
                    {categories.matches[0].contenders.map(category => {
                            return (
                                <LargeCard category={category} handleClick={handleClick} accent="" key={category._id}/>   
                            )
                    })}
                </div>  

                {/* Medium categories */}
                <div className="medium__category grid gap-4">
                    {categories.matches.slice(1, 7).map(category => {
                        return (
                            <div className="flex flex-col" key={category._id}>
                                <CategoryTitle title={category.title} size="large"/>
                                <div className="medium-card__wrapper">
                                {category.contenders.map(contender => {
                                    return (
                                        <MediumCard category={contender} handleClick={handleClick} accent="" key={contender._id}/> 
                                    )}
                                )}
                                </div>
                            </div>)
                        })
                    }  
                </div>

                {/* Small Categories */}
                <div className="small__category grid gap-4">
                {categories.matches.slice(8, 25).map(category => {
                        return (
                            <div className="flex flex-col" key={category._id}>
                                <CategoryTitle title={category.title} size="small"/>
                                    {category.contenders.map(contender => {
                                            return (
                                                <SmallCard category={contender} handleClick={handleClick} accent="" key={contender._id}/> 
                                            )}
                                    )}
                            </div>)
                        })
                    }
                </div>
            </div> : null}
        </>
    )
}