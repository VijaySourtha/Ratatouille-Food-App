import { useState } from "react";

const SearchBar = (props) =>{

    const {restaurantList, setFilterResList} = props;

    const [searchText, setSearchText] = useState(" ");

    return (
        <div className="flex justify-between-">
            <div className="mx-2">
                <input className=" bg-purple-white text-gray-500 rounded-sm w-80 text-sm shadow border-0 px-5 py-2.5" placeholder="Search" type="text" value={searchText} onChange={(e) =>{
                    setSearchText(e.target.value)
                }}/>
            </div>
            <div className="mx-2">
                <button className="px-5 py-2.5 w-24 object-contain rounded-sm font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 text-sm" onClick={()=>{
                    const resList = restaurantList.filter((resData) =>{
                        return resData.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilterResList(resList);
                }}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;