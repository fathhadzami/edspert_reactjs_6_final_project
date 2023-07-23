import { useEffect } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/product/actions";

const ProductListPage = () => {
  const { entities, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(getAll());
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <Container style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {
        loading ? (
          <>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
          </>
        ) : (
          entities.map((product) => {
            return (
              <Card key={product.id} style={{ width: "18rem", cursor: 'pointer' }} onClick={() => navigate(`/detail/${product.id}`)}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Body>
              </Card>
            );
          })
        )
      }
    </Container>
  );
};

export default ProductListPage;
