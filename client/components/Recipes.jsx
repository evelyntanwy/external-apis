import React, { useState } from "react";
import { Form, Container, Nav, Navbar, Carousel } from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";

import { getRecipes } from "../api";

function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const [url, setUrl] = useState([]);
  const [foodImage, setFoodImage] = useState([]);
  const [search, setSearch] = useState("");

  // recipe.hits[0].recipe.label - Food title
  // recipe.hits[0].recipe.url - Link to page
  // recipe.hits[0].recipe.image - image

  const handleClick = () => {
    getRecipes(search)
      .then((resultsApi) => {
        const resultsHits = resultsApi.hits;
        const strHits = resultsHits.map((elem) => elem.recipe.label);
        const strUrl = resultsHits.map((elem) => elem.recipe.url);
        const strFoodImage = resultsHits.map((elem) => elem.recipe.image);

        setRecipe(strHits);
        setUrl(strUrl);
        setFoodImage(strFoodImage);

        return null;
      })
      .catch((err) => {
        console.log(err.message);
      });
    setSearch("");
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
    evt.preventDefault();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">māKai</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="#tags">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            // className="d-block w-90"
            src="images/welcome.jpeg"
            alt="First slide"
            width={1000}
            height={500}
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-90"
            src="images/fork-plate.jpeg"
            alt="Second slide"
            width={1000}
            height={500}
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-90"
            src="images/burger.jpeg"
            alt="Third slide"
            width={1000}
            height={500}
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Form.Group controlId="foodSelection">
        <Form.Label id="search">Find the food : </Form.Label>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={handleClick}>Fill ma belly</button>
      </Form.Group>
      <div>
        <br />
        <ul>{recipe}</ul>
        <ul>{url}</ul>
        <ul>{foodImage}</ul>
        <br />

        {/* <span>{recipe}</span> */}
      </div>
    </>
  );
}

export default Recipes;
