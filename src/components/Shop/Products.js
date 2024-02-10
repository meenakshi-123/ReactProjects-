import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "MY first Book",
    price: 6,
    description: "FIRST EVEVR BOOK",
  },
  {
    id: "p2",
    title: "MY second Book",
    price: 5,
    description: "second EVEVR BOOK",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
            Key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
