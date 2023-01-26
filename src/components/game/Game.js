import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Game() {
  const [setNum] = React.useState(0);
  const [count, setCount] = useState(0);

  let r = 0;
  if (count % 2 !== 0) {
    r = Math.floor(Math.random() * 20000) + 1000;
    if (r > 20000) {
      r = 20000;
    }
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <AnimatedNumbers
        animateToNumber={r}
        fontStyle={{ fontSize: 90 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
      <Button
        color="primary"
        size="large"
        variant="contained"
        onClick={() => {
          setCount(count + 1);
          setNum(r);
        }}
      >
        Jouer
      </Button>
      {r > 0 && <p>Vous avez gagné {r}€</p>}
    </Grid>
  );
}
