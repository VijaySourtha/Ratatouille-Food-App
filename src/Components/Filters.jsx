const Filters = (props) =>{

    const {restaurantList, setFilterResList} = props;

    return(
        <div className="filters flex justify-evenly">
            <button className="inline-flex items-center text-xs px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" onClick={()=>{
                const resList = restaurantList.filter((resData) => {
                    return resData.info.avgRating > 4.5
                });

                setFilterResList(resList);
            }}>
                Top Rated Restaurants
            </button>
        </div>
    )
}

export default Filters;