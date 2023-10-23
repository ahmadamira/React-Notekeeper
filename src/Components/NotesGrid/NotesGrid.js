import React from "react";
import NoteCard from "../NoteCard/NoteCard";

import { Container, Grid, Box } from "@mui/material";
const products = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
];
const NotesGrid = () => {
  return (
    <Box>
      <Box sx={{ mb: "100px", mt: "50px" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} justifyContent="center">
            {products.map((data) => (
              <Grid item key={data.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Grid container justifyContent="center">
                  <NoteCard />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default NotesGrid;
