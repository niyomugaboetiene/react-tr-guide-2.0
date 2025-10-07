function Child(props) {
    return (
        <div className="parent">
            <p>Student Name: <span>{props.name}</span></p>
            <p>Student email: <span>{props.email}</span></p>
            <p>Student age: <span>{props.age}</span></p>
            <p>Student address: <span>{props.address}</span></p>
            <p>Student course: <span>{props.course}</span></p>
        </div>
    )
}

export default Child;