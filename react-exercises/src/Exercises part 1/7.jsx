import { useState } from "react";

const ShowAndHide = () => {
    const [isClicked, setIsClicked] = useState(false);

    function click() {
        setIsClicked(prevClick => 
            prevClick ? false : true
        )
    }

    return (
        <div>
            <h1>Click to see magic</h1>
            {isClicked && (
               <p>This is pragrapth</p>
            )}

            <button onClick={click}>Click</button>
        </div>
    )
}
export default ShowAndHide