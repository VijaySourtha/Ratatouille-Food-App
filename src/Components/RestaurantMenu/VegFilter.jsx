import { Switch } from "@material-tailwind/react";

const VegFilter = () => {
    return (
        <div className="my-4 items-center flex justify-start" >
            <span className="text-sm opacity-90 font-semibold mr-2">Veg Only</span>
            <Switch color="#0f8a65"  className="w-5 h-5"/> 
        </div>
    )
}

export default VegFilter;