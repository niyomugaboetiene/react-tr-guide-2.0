import { useState } from "react";

const Select = () => {
    const [isSelected, setIsSelected] = useState(""); 

    return (
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
    )
}

export default Select