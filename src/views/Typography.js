import axios from "axios";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [comment, setComment] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/comments").then((res) => {
      console.log(res.data);
      setComment(res.data);
    });
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Our Users Comments</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Comment</th>
                      <th className="border-0">Post ID</th>
                      <th className="border-0">Created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comment?.map((e) => {
                      {
                        console.log(e);
                      }
                      return (
                        <tr>
                          <td>{e.id}</td>
                          <td>{e.comment}</td>
                          <td>{e.post_id}</td>
                          <td>{e.created_at}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
