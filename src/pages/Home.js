// components
import LargeCard from "../components/LargeCard"
import MediumCard from "../components/MediumCard"
import SmallCard from "../components/SmallCard"
import CategoryTitle from "../components/CategoryTItle";


import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from "react";

export default function Home () {
    const { isAuthenticated, user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                return token;
            } catch (err) {
                console.log('Hay un error:', err);
            }
        };
        // getToken();
        const callApi = async () => {
            const token = await getToken();
            const response = await fetch('http://localhost:3000/predictions/63fce701ea11106af1d861f6', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            
            setCategories(responseData);
            
        }
        callApi();
    }, [])


    const handleClick = (id) => {
        console.log(id)
       
    }

    return(
        <>
        
            {/* Big categories */}
            {categories.length ? 
                
                <div className="container m-auto">
                    
                     <CategoryTitle title={categories[0].match.title} size="large" />     
                    <div className="large-card__wrapper grid gap-4">
                     {categories[0].match.contenders.map(category => {
                            return (
                                <LargeCard category={category} handleClick={handleClick} accent="" key={category.name}/>   
                            )
                    })} 
                </div>  

                {/* Medium categories */}
                <div className="medium__category grid gap-4">
                    {categories.slice(1, 7).map((category, index) => {
                        return (
                            <div className="flex flex-col" key={index}>
                                <CategoryTitle title={category.match.title} size="large"/>
                                <div className="medium-card__wrapper">
                                {category.match.contenders.map(contender => {
                                    return (
                                        <MediumCard category={contender} handleClick={handleClick} accent="" key={contender.name}/> 
                                    )}
                                )}
                                </div>
                            </div>)
                        })
                    }  
                </div>

                {/* Small Categories */}
                <div className="small__category grid gap-4">
                {categories.slice(8, 25).map((category, index) => {
                        return (
                            <div className="flex flex-col" key={index}>
                                <CategoryTitle title={category.match.title} size="small"/>
                                    {category.match.contenders.map(contender => {
                                            return (
                                                <SmallCard category={contender} handleClick={handleClick} accent="" key={contender.name}/> 
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