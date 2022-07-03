const getProductList = () => fetch("http://localhost:3000/data.json").then((res) => res.json())

export default getProductList