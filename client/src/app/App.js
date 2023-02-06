import React from "react";
import Routes from "./Routes";
import { StyledEngineProvider } from '@mui/material/styles';

const App = () => {
  return(
    <StyledEngineProvider injectFirst>
      <Routes />
    </StyledEngineProvider>
  )
};

export default App;
