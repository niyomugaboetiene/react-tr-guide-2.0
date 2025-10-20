function ProductList(props) {
    const productName = [props.name1, props.name2, props.name3];
    return (
        <ul>
                {productName.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))}
        </ul>
    )
}

export default ProductList;