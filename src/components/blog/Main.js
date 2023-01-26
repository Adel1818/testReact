import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Game from "../game";

function Main(props) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h2" gutterBottom align="center">
        {title}
      </Typography>
      <Divider />
      <Game />
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
