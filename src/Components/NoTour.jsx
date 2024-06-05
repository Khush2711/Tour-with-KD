function NoTour({onRefreshHandler}){
    return(
        <div className="flex flex-col justify-center items-center w-full h-[100vh] gap-4">
            <h1 className="font-bold text-2xl">No Tours Left</h1>
            <button className="bg-gray-100 px-20 py-1" onClick={()=>onRefreshHandler()}>Refresh</button>
        </div>
    );
}

export default NoTour;