import "./child2.css";
function Child(props) {
   return(
    <div>
        <table border={2} cellPadding={2} cellSpacing={4}>
            <tr>
                <th>Student Name</th>
                <th>School Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>{props.name}</td>
                <td>{props.schoolName}</td>
                <td>{props.marks}</td>
            </tr>
        </table>
    </div>
   )
}

export default Child;