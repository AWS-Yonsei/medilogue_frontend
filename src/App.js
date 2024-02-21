import { RouterProvider } from "react-router-dom";
import root from "./router/root"
import { ContextProvider } from "./pages/Chat/socket";
import { ChakraProvider } from "@chakra-ui/react";
//Work as an entry point of an app.
//Do not Modify;

function App() {
  return (
    <ContextProvider>
      <ChakraProvider>
        <RouterProvider router={root}/>
      </ChakraProvider>    
    </ContextProvider>
  );
}

export default App;
