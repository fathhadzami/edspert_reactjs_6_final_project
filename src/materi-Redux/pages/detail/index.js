import { useEffect } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/product/actions";

const DetailPage = () => {
  const { entity, loading } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async (productId) => {
      dispatch(getDetail(productId));
    }

    fetchProduct(id);
  }, [id, dispatch]);

  return (
    <Container>
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
          <Card>
            <Card.Img variant="top" src={entity.image} />
            <Card.Body>
              <Card.Title>{entity.title}</Card.Title>
              <Card.Text>
                {entity.description}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      }
    </Container>
  );
};

export default DetailPage;
