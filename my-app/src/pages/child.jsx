function Child(props) {
    return (
        <div>
            <p>Student Name: {props.name}</p>
            <p>Student email: {props.email}</p>
            <p>Student age: {props.age}</p>
            <p>Student address: {props.address}</p>
            <p>Student course: {props.course}</p>
        </div>
    )
}

export default Child;