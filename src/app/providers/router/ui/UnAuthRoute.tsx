import { Navigate } from "react-router-dom";

interface UnAuthRouteProps {
    children: React.ReactNode;
}

const UnAuthRoute = ({children}: UnAuthRouteProps) => {
    const isAuth = false;
    const replaceUrl = '/login';

    return !isAuth ? <>{children}</> : <Navigate to={replaceUrl} />
    
}