import React from "react"
import ReactDOM from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import theme from "./shared/theme"

import routes from "./shared/router"
import store from "./shared/store"

import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "@mui/material"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
