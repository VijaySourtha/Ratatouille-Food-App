import { useRouteError } from "react-router-dom";

const Error =()=>{

    const error = useRouteError();
    console.log(error);

    return (
        <div className="bg-blue-50 h-screen flex items-center justify-center">
            <div className="bg-white  text-center p-8 rounded-xl shadow-lg max-w-md w-full">
                <p className="mb-4 text-7xl font-extrabold text-blue-500 hover:text-blue-600">{error.status}</p>
                <p className="mb-4 text-3xl font-bold text-gray-800 ">{error.statusText}</p>
                <p className="text-gray-400  justify-center mb-4">{error.data}</p>
                <button className="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go
                    back to homepage</button>
            </div>
        </div>
    );
};

export default Error;