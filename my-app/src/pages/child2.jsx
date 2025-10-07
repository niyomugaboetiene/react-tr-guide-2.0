function Child(props) {
   return(
    <div>
        <table>
            <tr>
                <th>Student Name</th>
                <th>School Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <table>{props.name}</table>
                <table>{props.schoolName}</table>
                <table>{props.marks}</table>
            </tr>
        </table>
    </div>
   )
}

export default Child;