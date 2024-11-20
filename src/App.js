import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import SignUp from "./pages/Signup/signup";
import Home from "./pages/Home/home";
import Dashboard from "./pages/Dashboard/dashboard";
import PostManage from "./pages/Post/PostManage/postmanage";
import PostAdd from "./pages/Post/PostAdd/postadd";
import PostEdit from "./pages/Post/PostEdit/postedit";
import UserManage from "./pages/User/UserManage/usermanage";
import UserAdd from "./pages/User/UserAdd/useradd";
import UserEdit from "./pages/User/UserEdit/useredit";
import UserChangePassword from "./pages/User/UserChangePassword/userchangepassword";
import SinglePost from "./pages/SinglePost/singlepost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/manage-posts" element={<PostManage />}></Route>
          <Route path="/manage-posts/add" element={<PostAdd />}></Route>
          <Route path="/manage-posts/edit" element={<PostEdit />}></Route>
          <Route path="/manage-users" element={<UserManage />}></Route>
          <Route path="/manage-users/add" element={<UserAdd />}></Route>
          <Route path="/manage-users/edit" element={<UserEdit />}></Route>
          <Route
            path="/manage-users/change-password"
            element={<UserChangePassword />}
          ></Route>
          <Route path="post" element={<SinglePost />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
