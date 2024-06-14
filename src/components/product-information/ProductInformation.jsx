import "../product-information/ProductInformation.scss";
import PropTypes from "prop-types";

function ProductInformation({ title, subtitle, price }) {
  return (
    <section className="product-info">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <h2>{price} €</h2>
    </section>
  );
}

ProductInformation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
};


export default ProductInformation;
