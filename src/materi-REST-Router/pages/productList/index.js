import { useEffect, useState } from "react";
import { httpService } from "../../utils/service";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await httpService.get('/product');
    if (result) {
      setProducts(result.data);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {
          products.length === 0
          ? "Empty data"
          : products.map((product, index) => {
              return (
                <Col key={index} md={3}>
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Button variant="primary" onClick={() => navigate(`/detail/${product.id}`)}>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
          )
        }
      </Row>
    </Container>
  );
};

export default ProductListPage;
