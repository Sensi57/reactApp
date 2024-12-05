import { createBrowserRouter } from "react-router-dom";
import { App } from "../../../App";
import { AuthRoute } from "../ui/AuthRoute";

const router = createBrowserRouter([
    {
        path: ROUTES.app.route,
        element: (
            <AuthRoute >
                <App />
            </AuthRoute>
        ),
    }
])