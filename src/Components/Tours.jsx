import Card from "./Card";

function Tours({ data, onRemoveTourHandler }) {

    return (
        <div className="px-5">
            <h1 className='title text-[2.5rem] font-semibold text-center border-[0.5rem] w-[50%] mx-auto mt-5 border-dashed border-[blue] rounded-2xl'>PLAN TOUR WITH KD</h1>

            <div className="flex gap-2 flex-wrap content-center max-w-[1300px] mx-auto my-8">
                {
                    data.map((tourData)=>{
                        return(
                            <Card {...tourData} onRemoveTourHandler={onRemoveTourHandler} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Tours;