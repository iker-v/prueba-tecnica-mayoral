import { useEffect, useState } from "react";
import { NextPage } from "next";
import SearchBar from "components/SearchBar";
import ProductCard from "components/ProductCard";
import OrderPrice from "components/OrderPrice";
import ChangeView from "components/ChangeView";
import getProductList from "services/getProductList";
import { Product } from "types/types";

const HomePage: NextPage = () => {

  const [productList, setProductList] = useState<Array<Product>>([])
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([])
  const [selectPrice, setSelectPrice] = useState<String>('')
  const [selectView, setSelectView] = useState<Object>({})

  useEffect(() => {
    getProductList().then((products) => {
      setProductList(products)
      setFilteredProducts(products)
    })
  }, [])

  return (
      <main className="container">
        <form className="form-group">
          <SearchBar 
            productList={productList}
            setFilteredProducts={setFilteredProducts}
          />
          <div className="filter-group">
            <OrderPrice
              setSelectPrice={setSelectPrice}
            />
            <ChangeView
              selectView={selectView}
              setSelectView={setSelectView}
            />
          </div>
        </form>
        <section className="grid-container">
        {
          filteredProducts ?
          filteredProducts
          .sort((a, b) => {
            if(selectPrice === "asc") {
              return a.price - b.price
            } else if (selectPrice === "desc") {
              return b.price - a.price
            } else return 0
          })
          .map((productDetails) => (
            <ProductCard
              productName={productDetails.productName}
              image={productDetails.image}
              isDiscount={productDetails.isDiscount}
              price={productDetails.price}
              prevPrice={productDetails.prevPrice}
              moreColors={productDetails.moreColors}
            />
          )) : <h1>No hay productos</h1>
        }
        </section>
        <footer className="fixed-alert">
          <h3></h3>
        </footer>
      </main>
  );
};

export default HomePage;