import React from "react";
import styles from "../styles/projects.module.css";
import { Carousel } from "@mantine/carousel";

const Projects = () => {
  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <Carousel slideSize="70%" height="100%" slideGap="sm" controlsOffset="xl" controlSize={23} loop dragFree>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default Projects;
