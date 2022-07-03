const searchProductByName = (productList, searchQuery) => {
    return productList.filter((name) => name.productName.toLowerCase().includes(searchQuery.toLowerCase()))
}

export default searchProductByName