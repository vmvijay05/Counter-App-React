import React, { useState } from "react";
import { Button, Typography, Box, Card, CardContent, Stack } from "@mui/material";
import { Add, Remove, RestartAlt } from "@mui/icons-material";

function Counter(){  

  const [count, setcount] = useState(0);
  const increasebtn = () => setcount(count + 1);
  const decreasebtn = () => setcount(count - 1);
  const resetbtn = () => setcount(0);
console.log("Start");
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          padding: 4,
          borderRadius: 4,
          boxShadow: 5,
          width: 320,
          textAlign: "center",
          bgcolor: "white",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#00796b" }}>
            Stylish Counter
          </Typography>

          <Typography variant="h2" sx={{ marginY: 3, color: "#004d40" }}>
            {count}
          </Typography>

          <Stack spacing={2} direction="row" justifyContent="center">
            <Button
              variant="contained"
              color="success"
              startIcon={<Add />}
              onClick={increasebtn}
            >
              Increase
            </Button>

            <Button
              variant="contained"
              color="warning"
              startIcon={<Remove />}
              onClick={decreasebtn}
            >
              Decrease
            </Button>
          </Stack>

          <Button
            variant="outlined"
            color="error"
            startIcon={<RestartAlt />}
            onClick={resetbtn}
            sx={{ marginTop: 3 }}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Counter;