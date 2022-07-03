const calculateDiscount = (prevPrice, price) => {
    const absolute = prevPrice - price
    const result = (absolute / prevPrice) * 100 
    return result.toFixed(2)
}

export default calculateDiscount