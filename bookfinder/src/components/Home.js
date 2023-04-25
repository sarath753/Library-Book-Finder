import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="80%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="2px solid lightpink"
          borderRadius="10px"
          bgcolor="white"
          p="20px"
          mt="20px"
          mr="50px"
          ml="10px"
        >
          <Typography variant="h6" fontFamily={"Lato"}>“Reading is essential for those who seek to rise above the ordinary.”</Typography>
          <Typography variant="body1">- Jim Rohn</Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="2px solid lightpink"
          borderRadius="10px"
          bgcolor="white"
          p="20px"
          mr="20px"
          mt="50px"
        >
          <Typography variant="h4">Welcome to the Library Book Finder</Typography>
          <Box sx={{ marginTop: 15, display: "flex", justifyContent: "center" }}>
            <Button
              LinkComponent={Link}
              to="/books"
              sx={{ background: "lightpink", borderRadius: 25, padding: "10px 30px", boxShadow: "2px 2px 5px #999" }}
              variant="contained"
            >
              <Typography variant="h5">View All Books</Typography>
            </Button>
          </Box>
        </Box>
        
        
        
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="2px solid lightpink"
          borderRadius="10px"
          bgcolor="white"
          p="20px"
          mt="50px"
          ml="20px"
        >
          <Typography variant="h6" fontFamily={"Lato"}>“One Good book is equal to 100 friends But one good friend is equal to a library.”</Typography>
          <Typography variant="body1">- A.P.J. Abdul kalam</Typography>
        </Box>
        
      </Box>
    </div>
  );
};

export default Home;
