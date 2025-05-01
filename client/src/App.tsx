import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./layouts/layout";

/**
 * Main application component that sets up routing.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
