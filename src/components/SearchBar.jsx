import { Container, TextField, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onChange, value }) => {

  return (
    <Container>
      <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
        {" "}
        Search characetr:
      </Typography>
      <TextField
        onChange={onChange}
        value={value}
        fullWidth
        placeholder="search by name"
      />
    </Container>
  );
};

export default SearchBar;
