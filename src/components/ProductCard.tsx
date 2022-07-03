import styles from '../styles/ProductCard.module.css'
import calculateDiscount from 'utils/calculateDiscount'
import { Product } from 'types/types'

const ProductCard = (props: Product) => {
    return (
        <div className={styles.ProductCard}>
            <img className={styles.ProductCardImage} src={props.image} />
            <p className={styles.ProductNameText}>{props.productName}</p>
            <div className={styles.ProductCardPrice}>
                { 
                    props.isDiscount ?
                    <p className={styles.lineThrough}>{props.prevPrice}</p> :
                    <span>{props.price}€</span>
                }
                {
                    props.isDiscount ?
                        <p className={styles.ProductCardDiscount}>
                            {props.price}€
                            <span>({calculateDiscount(props.prevPrice, props.price)}%)</span>
                        </p> 
                    : ''
                }
            </div>
            { props.moreColors ? <p className={styles.ProductCardTextLight}>Más colores</p> : '' }
            <button className={styles.ProductCardButton}>AÑADIR</button>
        </div>
    )
}

export default ProductCard