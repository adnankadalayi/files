import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Add } from "./Components/Add";
import { Feed } from "./Components/Feed";
import { Navbar } from "./Components/Navbar";
import { Rightbar } from "./Components/Rightbar";
import { Sidebar } from "./Components/Sidebar";

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar setMode={setMode} mode={mode}/>
    <Stack direction="row" spacing={2} justifyContent="space-between" >

      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
