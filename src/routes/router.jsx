import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Loading from "../components/Loading/Loading";
import Home from "../pages/Home/Home/Home";
import NoticeBoard from "../pages/NoticeBoard/NoticeBoard";

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
                path: 'noticeBoard',
                Component: NoticeBoard,
            },
        ]
    }
]);

export default router;