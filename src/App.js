
// import React, { useState } from "react";
// import { Button, Typography, Box } from "@mui/material";

// const App=() =>{
//   const [count, setcount] = useState(0);

//   const increasebtn = () => {
//     setcount(count + 1);
//   };

//   const decreasebtn = () => {
//     setcount(count - 1);
//   };

//   const resetbtn = () => {
//     setcount(0);
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         bgcolor: "#f0f0f0",
//         textAlign: "center",
//         paddingTop: "100px",
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Simple Counter App
//       </Typography>

//       <Typography variant="h2" sx={{ marginBottom: "30px" }}>
//         {count}
//       </Typography>

//       <Box sx={{ display: "inline-block" }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={increasebtn}
//           sx={{ margin: "10px" }}
//         >
//           Increase
//         </Button>

//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={decreasebtn}
//           sx={{ margin: "10px" }}
//         >
//           Decrease
//         </Button>

//         <Button
//           variant="outlined"
//           color="error"
//           onClick={resetbtn}
//           sx={{ margin: "10px" }}
//         >
//           Reset
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default App;


import React from "react";
import Counter from "./counter" 

function App() {

  // console.log("React.version",React.version);
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;