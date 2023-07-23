import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        Ini adalah layout
        <div style={{ display: "flex", gap: "8px" }}>
          <Button onClick={() => navigate("/")}>Product List</Button>{' '}
          <Button onClick={() => navigate("/detail/1")}>Detail</Button>{' '}
          <Button onClick={() => navigate("/checkout")}>Checkout</Button>{' '}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
