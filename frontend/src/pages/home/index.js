import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../../assests/marketplace';
import ProductCard from '../../components/productCard';
import FilterPanel from "../../components/filterPanel";

function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to handle filter changes
  const handleFilterChange = (type, value, isChecked) => {
    let updatedProducts = [...products];

    // Filter products based on the selected filters
    if (isChecked) {
      updatedProducts = updatedProducts.filter(product => product[type].includes(value));
    } else {
      updatedProducts = updatedProducts.filter(product => !product[type].includes(value));
    }

    // Update filtered products
    setFilteredProducts(updatedProducts);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={3}>
          {/* Render the filter panel */}
          <FilterPanel handleFilterChange={handleFilterChange} />
        </Col>
        <Col sm={9}>
          {/* Render the filtered products */}
          <Row>
            {filteredProducts.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;