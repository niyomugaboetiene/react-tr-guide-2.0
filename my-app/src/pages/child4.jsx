function Product(props) {
    const productName = [props.name1, props.name2, props.name3];
    return (
        <div>
            <ul>
                {productName.map((idx, name) => {
                   <li key={idx}>{name}</li>
                })}
            </ul>
        </div>
    )
}

export default Product;