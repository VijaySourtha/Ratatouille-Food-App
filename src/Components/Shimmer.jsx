const Shimmer = () => {

    const ShimmerCard = () => (
        <div className="w-full drop-shadow-md">
            <div className="animate-pulse w-full h-36 rounded-xl bg-white"></div>
            <div className="p-3 space-y-4">
                <div className="animate-pulse w-2/3 h-4 bg-slate-400"></div>
                <div className="flex space-x-4">
                    <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                    <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                </div>
                <div className="space-y-2">
                    <div className="animate-pulse w-3/4 h-3 bg-slate-300"></div>
                    <div className="animate-pulse w-full h-3 bg-slate-300"></div>
                    <div className="animate-pulse w-2/3 h-3 bg-slate-300"></div>
                </div>
            </div>
        </div>
    );

    const cardCount = 8;

    return (
        <div className="grid mx-32 bg-gray-120 mt-4 object-contain sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-12">
            {Array.from({length: cardCount},(_, index) =>(
                <ShimmerCard key = { index}/>
            ))};
        </div>
    )
}
export default Shimmer;