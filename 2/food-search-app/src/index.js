import React from "react";
import ReactDOM from "react-dom/client";  // Import `createRoot` from react-dom/client
import App from "./App";
import "./index.css";  // Your global CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));  // Use createRoot instead of render
root.render(<App />);  // Render the App component inside the root element
