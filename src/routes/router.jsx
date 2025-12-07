import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Loading from "../components/Loading/Loading";
import Home from "../pages/Home/Home/Home";
import NoticeBoard from "../pages/NoticeBoard/NoticeBoard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: DashboardLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home,

            },
            {
                path: '/notice-board',
                Component: NoticeBoard,
            },
            {
                path: '/*',
                Component: ErrorPage,
            },
        ]
    }
]);

export default router;