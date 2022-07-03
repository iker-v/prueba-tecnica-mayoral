import styles from '../styles/OrderPrice.module.css'

const OrderPrice = ({setSelectPrice}) => {

    return (
        <select 
            className={styles.OrderPrice}
            onChange={(e) => setSelectPrice(e.target.value)}
        >
            <option>Filtrar por precio</option>
            <option value="asc">Menor precio</option>
            <option value="desc">Mayor precio</option>
        </select>
    )
}

export default OrderPrice