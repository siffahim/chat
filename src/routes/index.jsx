import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat";
import Main from "../layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/chat/:chatId",
        element: <Chat />,
      },
    ],
  },
]);

export default router;
