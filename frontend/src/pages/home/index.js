
import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../../assests/marketplace';
import ProductCard from '../../components/productCard';

function Home() {
    return (
      <Container className="mt-5">
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    );
  }
  
  export default Home;