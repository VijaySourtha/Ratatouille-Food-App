import { AccordianArrow } from "../../utils/Icons";
import ItemList from "./ItemList";

const CategoryItems = (props) => {

    const data = props.data;
    console.log(data);

    function handleClick() {

    }

    return (
        <div className="border-b-4 border-gray-300 pb-3 mb-2 mx-1">
            <div className="flex justify-between pr-4 cursor-pointer" onClick={handleClick()} >
                <span className="text-lg font-bold font-sans text-blue-950 opacity-90">{data?.title}({data?.itemCards.length})</span>
                <span className=""><AccordianArrow/></span>
            </div>
         
            <ItemList items = {data?.itemCards}/>
            
        </div>
    )
}

export default CategoryItems;
