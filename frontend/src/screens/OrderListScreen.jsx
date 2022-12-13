import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import Paginate from '../components/Paginate'
import { listAllOrders } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
// import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const OrderListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //user login check
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // orders update check
  const orderListAll = useSelector((state) => state.orderListAll);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListAll;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(listAllOrders());
    }
  }, [userInfo, dispatch]);

  return (
    <>
      <Col>
        <h2>All Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </>
  );
};

export default OrderListScreen;
