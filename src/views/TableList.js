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
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      console.log(res.data);
      setUser(res.data.data);
    });
  }, []);

  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Our Users</Card.Title>
                <p className="card-category">Here is the users details</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      {/* <th className="border-0">Avatar</th> */}
                      <th className="border-0">Created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user?.map((e) => {
                      return (
                        <tr>
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.email}</td>
                          {/* <td>{e.avatar}</td> */}
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
