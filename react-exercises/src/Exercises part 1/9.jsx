import { useState } from "react";

const Select = () => {
    const [isSelected, setIsSelected] = useState(""); 

    return (
        <div className="bg-gray-200 flex justify-center items-center min-h-screen">
            <div>
            <select value={isSelected} onChange={(e) => setIsSelected(e.target.value)}>
                <option value="" disabled>Select country</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Uganda">Uganda</option>
                <option value="Kenya">Kenya</option>
            </select>

            {isSelected && (
                <p>You selected <strong>{isSelected}</strong></p>
            )}
            </div>

        </div>
    )
}

export default Select