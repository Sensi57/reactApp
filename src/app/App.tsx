import { Button, IconButton, ThemeProvider, Typography, createTheme } from "@mui/material"
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/config/routeConfig";

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Цвет для primary
      },
      secondary: {
        main: '#ff4081', // Цвет для secondary
      },
    },
  });

export const App: React.FC = () => {
    return(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
    )
}