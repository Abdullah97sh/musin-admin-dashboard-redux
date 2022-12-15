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
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      console.log(res.data);
      setUser(res.data.data);
    });
    getPost()
  }, []);

  const getPost=()=>{
    axios.get("http://127.0.0.1:8000/api/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data.data);
    });
  }

  function handleApprovePoste(e,post_id) {
    const value = e.target.value
    console.log(value);
    axios.post('http://127.0.0.1:8000/api/updatepost',{post_id:post_id,status:value}).then(res=>{
      console.log(res.data);
      getPost()
    })
  }
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

          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">User Posts</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts?.map((e) => {
                      return (
                        <tr>
                          <td>{e.id}</td>
                          <td>{e.description}</td>
                          <td>
                            <select
                            onChange={(event)=>handleApprovePoste(event,e.id)}
                              value={e.status == String(0) ? "0" : "1"}
                            >
                              <option value ='0'>pending</option>
                              <option value = '1'>approve</option>
                            </select>
                          </td>
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
