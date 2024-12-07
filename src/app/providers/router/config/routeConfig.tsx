import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../ui/AuthRoute";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { ROUTES } from "../constants/routes";

import {  ShopPage, 
          NotFoundPage
       } from "../../../../pages";


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
        ],
    },
    {
        path: ROUTES.page_not_fount.route,
        element: <NotFoundPage />
    }
])