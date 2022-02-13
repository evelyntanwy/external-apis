import React, { useState } from "react";
import { Form, Container, Nav, Navbar, Carousel } from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";

import { getRecipes } from "../api";

function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  // recipe.hits[0].recipe.label - Food title
  // recipe.hits[0].recipe.url - Link to page
  // recipe.hits[0].recipe.image - image

  const handleClick = () => {
    // const typeSearch = recipe.map((elem) => elem.hits);
    getRecipes(search)
      .then((recipe) => {
        // console.log("newRecipe", newRecipe);
        // setRecipe(recipe.hits);
        setRecipe(recipe.hits[0].recipe.label);
        console.log("recipe", recipe);
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
            className="d-block w-100"
            src="images/welcome.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/fork-plate.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/burger.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Form.Group controlId="foodSelection">
        <Form.Label id="search">Find the food</Form.Label>
        <input type="text" value={search} onChange={handleChange} />
        {/* <button type="submit">Fill ma belly</button> */}
        <button onClick={handleClick}>Fill ma belly</button>
      </Form.Group>
      <div>
        {/* {recipe.map((elem) => {
          return <li key={elem}>{elem.recipe}</li>;
        })} */}
        {/* {recipe.filter((elem) => {
          return elem.label;
        })} */}
        {recipe}
      </div>
    </>
  );
}

export default Recipes;
