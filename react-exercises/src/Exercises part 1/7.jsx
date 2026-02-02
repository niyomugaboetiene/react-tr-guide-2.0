import { useState } from "react";

const ShowAndHide = () => {
    const [isClicked, setIsClicked] = useState(false);

    function click() {
        setIsClicked(prevClick => 
            prevClick ? false : true
        )
    }

    return (
        <div className="min-h-screen bg-green-100 flex justify-center items-center">
            <div className="bg-green-300 h-32 w-62 rounded-xl shadow-lg">
               <h1 className="text-center mt-2 text-xl text-green-800 font-bold">Click to see magic</h1>
               {isClicked && (
                  <p className="text-center mt-2 text-green-800 font-bold">This is pragrapth</p>
               )}

               <button onClick={click} className="bg-green-500 mt-5 ms-12 px-14 text-white rounded-lg hover:bg-green-600 transition-colors">Click</button>
            </div>
        </div>
    )
}
export default ShowAndHide