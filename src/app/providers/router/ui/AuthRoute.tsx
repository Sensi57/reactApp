import { Navigate } from "react-router-dom";

interface AuthRouteProps {
    children: React.ReactNode;
}

export const AuthRoute = ({children}: AuthRouteProps) => {
    const isAuth = false;
    const replaceUrl = '/login';

    return !isAuth ? <>{children}</> : <Navigate to={replaceUrl} />
    
}
