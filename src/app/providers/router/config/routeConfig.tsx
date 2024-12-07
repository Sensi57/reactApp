import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../ui/AuthRoute";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { ShopPage } from "../../../../pages/ShopPage/ShopPage";


export const router = createBrowserRouter([
    {
        path: ROUTES.app.route,
        element: (
            <AuthRoute >
                <MainLayout />
            </AuthRoute>
        ),
        children: [
            {
                index: true,
                element: <ShopPage />
            }
        ]
    }
])