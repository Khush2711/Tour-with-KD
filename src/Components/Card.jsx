import { useState } from "react";
import "../Css/card.css"

function Card({ id, name, info, image, price , onRemoveTourHandler}) {

    const description = `${info.substr(0, 200)}Read more...`;
    const [readmore, setRead] = useState(false);


    function onReadHandler() {
        setRead(!readmore);
    }

    function removeTour() {
        onRemoveTourHandler(id);
    }

    return (
        <div className="w-[400px] mx-auto p-[1rem] rounded-xl custom-shadow flex flex-col gap-4 relative max-h-[max-content]">
            <img className="image" src={image} loading="lazy" alt="Check Internet" />
            <p className="text-green-600 font-bold text-xl">
                ₹ {price}
            </p>
            <div className="text-2xl font-bold">
                {name}
            </div>
            <div className="text-justify h-[40%]">
                {readmore ? info : description}
                <span className="text-blue-400 cursor-pointer" onClick={onReadHandler}>
                    {readmore ? 'Show less' : 'Read More'}
                </span>
            </div>
            <div className="flex justify-center">
                <button className="px-24 py-2 bg-red-100 rounded-2xl border-red-600 border font-bold text-xl hover:bg-red-600 hover:text-white" onClick={removeTour}>Not Interested</button>
            </div>
        </div>
    );
}

export default Card;