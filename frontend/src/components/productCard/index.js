// src/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex">
        <div className="icon mr-3" style={{ width: "50px", height: "50px", backgroundColor: "#eee" }}>
          <img src="C:/workspace/publisher-portal/frontend/src/assests/telegram.png" alt="Icon" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="flex-grow-1">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <strong>Category:</strong> {product.category}<br />
            <strong>Language:</strong> {product.language}<br />
            <strong>Region:</strong> {product.region}<br />
            <strong>Product Type:</strong> {product.product_type}<br />
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong className="h5">${product.price}</strong>
            </div>
            <div>
              <Button variant="outline-primary" className="mr-2">Add to Favourite</Button>
              {/* <Button variant="outline-secondary">Bookmark</Button> */}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
