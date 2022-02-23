"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var UsersActions_1 = require("./redux/Users/UsersActions");
var PostsActions_1 = require("./redux/Posts/PostsActions");
var Header_1 = require("./components/Header/Header");
var HomeContainer_1 = require("./pages/Home/HomeContainer");
var PostsOverview_1 = require("./pages/PostsOverview/PostsOverview");
var UsersContainer_1 = require("./pages/UsersList/UsersContainer");
var UserContainer_1 = require("./pages/User/UserContainer");
require("./App.scss");
var PostViewContainer_1 = require("./pages/PostView/PostViewContainer");
var Authorisation_1 = require("./components/Authorisation/Authorisation");
var App = function () {
    var dispatch = react_redux_1.useDispatch();
    var posts = react_redux_1.useSelector(function (store) { return store.posts.postsListToShow; });
    react_1.useLayoutEffect(function () {
        dispatch(PostsActions_1.getPostsStart());
    }, []);
    react_1.useEffect(function () {
        if (posts.length !== 0) {
            dispatch(UsersActions_1.getUsersStart(posts));
        }
    }, [posts]);
    return (react_1["default"].createElement("div", { className: "forum" },
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(HomeContainer_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/posts", element: react_1["default"].createElement(PostsOverview_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/users", element: react_1["default"].createElement(UsersContainer_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/users/:userId", element: react_1["default"].createElement(UserContainer_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/posts/:postId", element: react_1["default"].createElement(PostViewContainer_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", element: react_1["default"].createElement(Authorisation_1["default"], null) })),
        react_1["default"].createElement(react_router_dom_1.Outlet, null)));
};
exports["default"] = App;
