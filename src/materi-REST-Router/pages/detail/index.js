import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { httpService } from "../../utils/service";

const DetailPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await httpService.get(`/product/${id}`);
      if (result) {
        setProduct(result.data);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailPage;
