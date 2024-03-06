import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";
import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Flex direction={{ base: "column", sm: "row" }}>
        <Box>
          <MobileSidebar />
          <Box display={{ base: "none", sm: "block" }}>
            <Sidebar />
          </Box>
        </Box>

        {/* <Box width={"80vw"}> */}
        <Box borderLeft={{ base: "", sm: "1px solid #C7C8CC" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
      </Flex>
    </>
  );
}

export default App;
