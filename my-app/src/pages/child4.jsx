function ProductList(props) {
    const productName = [props.name1, props.name2, props.name3];
    return (
        <div>
                {productName.map((idx, name) => (
                   <ul key={idx}>
                      <li>{name.name1}</li>
                      <li>{name.name2}</li>
                      <li>{name.name3}</li>
                   </ul>
                ))}
        </div>
    )
}

export default ProductList;