
import styles from "./products.module.scss";
import { useEffect, useState } from "react";
import { ProductsData } from "./data/productData";
import { Link } from "react-router-dom";

const Products = () =>{
    const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState(ProductsData);

  useEffect(() => {
    const filteredProducts = ProductsData.filter((products) =>
      products.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAllProducts(filteredProducts);
  }, [searchQuery]);
return(
 <section className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>Products</p>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.search}
            placeholder="Search by title..."
          />
        </div>

        {searchQuery && (
          <>
            <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Seach results for{" "}
              <span style={{ color: "#21976f" }}>'{searchQuery}' </span>
              <span>({allProducts.length} results)</span>
            </h3>
          </>
        )}

        {searchQuery && allProducts.length === 0 ? (
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h2>No products found. Try searching something else.</h2>
          </div>
        ) : (
          <div className={styles["cards__wrapper"]}>
            {allProducts.map((products) => (
              <Link
                to={`/products/${products.id}`}
                key={products.id}
                className={styles["card__container"]}
              >
                <img
                  src={products.image}
                  alt={products.title}
                  className={styles.image}
                />
                <div className={styles["content__wrap"]}>
                  <p className={styles.title}>{products.title}</p>
                 
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
)
}

export default Products