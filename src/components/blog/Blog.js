import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Main from "./Main";
import Footer from "./Footer";

const mainFeaturedPost = {
  title: "20000 d'euros,  c'est l'incroyable jackpot",
  description:
    "La loterie est un jeu d'argent et de hasard visant à distribuer des lots à des gagnants sélectionnés au hasard grâce à un tirage effectué parmi les joueurs ayant payé une mise de départ",
  image: "../../header-bg.jpg",
  imageText: "main image description",
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Loterie.fr" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Main title="Jouez avec nous" />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" />
    </ThemeProvider>
  );
}
