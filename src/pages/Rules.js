import { FaMedal } from "react-icons/fa";

export default function Rules () {
    return (
        <div>
            <p className="whitespace-pre-line break-words text-xl font-bold">
                Welcome to the Wizeline Oscars office pool!
            </p>
            <p className="my-2">
                This year, Wizeliners will be able to predict the Oscar winners, and win a special Wizepoints prize for showing their movie savvy!
            </p>
            <p className="my-2">
                Each person must choose their predicted winner from each of the 23 Oscar categories. You can change your selection until the deadline on Oscar Sunday March 12th 2023 at 12 pm CST. After that, the system will lock your predictions and you won't be able to modify them. Each category equals 1 point, so the maximum amount that anyone can get is 23 points.
            </p>
                
            <p className="my-2">
                After the ceremony, the Wizeliners with the highest amount of points will win the following prizes:
            </p>
                
            
            <ul className="m-10">
                <li className="list-none my-4 flex items-center gap-2">
                    <FaMedal /><span> 1st place: 100 Wizepoints </span>
                </li>
                <li className="list-none my-4 flex items-center gap-2">
                    <FaMedal /><span clas> 2nd place: 50 Wizepoints</span>
                </li>
                <li className="list-none my-4 flex items-center gap-2">
                    <FaMedal /><span> 3rd place: 30 Wizepoints </span>
                </li>
            </ul>
            <p className="whitespace-pre-line break-words">
                <b>IMPORTANT:</b> If there are more than 1 person with the same top scores, we will first review in order to award the Wizepoints.
            </p>
            <p className="my-2">
                Come join the fun! The 95th Academy Awards will be handed out <b>Sunday March 12th 2023 at 7 pm CST.</b>
            </p>
            <p>
                This office pool is only for Wizeliners, as you will need your Okta credentials to log in.
            </p>
            


        </div>
    )
}