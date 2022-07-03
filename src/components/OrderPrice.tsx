import styles from '../styles/OrderPrice.module.css'

const OrderPrice = ({setSelectPrice}) => {

    return (
        <select 
            className={styles.OrderPrice}
            onChange={(e) => setSelectPrice(e.target.value)}
        >
            <option>Filtrar por precio</option>
            <option value="asc">Mayor precio</option>
            <option value="desc">Menor precio</option>
        </select>
    )
}

export default OrderPrice