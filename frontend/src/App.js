import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"

import Signup from "./components/Signup"
import { createTheme, ThemeProvider } from "@mui/material"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import UploadFile from "./components/Uploadfile"
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import Signuptesting from "./components/Signuptesting"
import Loginpagetesting from "./components/Loginpagetesting"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const myLightTheme = createTheme({
    palette: {
      primary: {
        main: "#fd7700",
      },
    },
  })
  const myDarkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#333",
      },
    },
  })
  return (
    <ThemeProvider theme={darkTheme ? myDarkTheme : myLightTheme}>
      <BrowserRouter>
        {/* <Link to="/home">Home Page </Link>
      <Link to="/login">Login Page</Link>    */}
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route element={<Home/>} path="home" />
          <Route element={<Signuptesting/>} path="signuptesting" />
          {/* <Route element={<Login></Login>} path="login" /> */}
          <Route element={<Loginpagetesting/>} path="loginpagetesting" />
          <Route element={<UploadFile />} path="uploadfile" />
          <Route element={<Dashboard />} path="dashboard" />
          {/* <Route element={<Chatbox></Chatbox>}path="chatbox"/> */}

          <Route element={<Navigate to="/home" />} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
