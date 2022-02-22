"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable no-shadow */
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var PostsSelector_1 = require("../../redux/Posts/PostsSelector");
var Post_jpg_1 = require("../../assets/images/Post.jpg");
var Comment_1 = require("../../components/Comment/Comment");
require("./PostView.scss");
var UserSelector_1 = require("../../redux/Users/UserSelector");
var PostsActions_1 = require("../../redux/Posts/PostsActions");
var FormInput_1 = require("../../FormInput/FormInput");
var PostView = function () {
    var postId = react_router_dom_1.useParams().postId;
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(PostsSelector_1.selectCurrentPost(Number(postId))), userId = _a.userId, body = _a.body, title = _a.title;
    var comments = react_redux_1.useSelector(function (store) { return store.posts.comments; });
    react_1.useEffect(function () {
        dispatch(PostsActions_1.getCommentsStart(postId));
    }, []);
    var _b = react_1.useState({
        userId: 1,
        id: 122,
        title: '',
        body: '32'
    }), newPostData = _b[0], setNewPostData = _b[1];
    var location = react_router_dom_1.useHref("/users/" + userId);
    var _c = react_redux_1.useSelector(UserSelector_1.selectCurrentUser(Number(userId))), name = _c.name, email = _c.email, imageUrl = _c.imageUrl;
    var handleSubmit = (e);
    var handleChange = function (event) {
        var _a;
        var _b = event.target, value = _b.value, name = _b.name;
        setNewPostData(__assign(__assign({}, newPostData), (_a = {}, _a[name] = value, _a)));
    };
    return (react_1["default"].createElement("div", { className: "forum__post-page" },
        react_1["default"].createElement(material_1.Card, null,
            react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', borderBottom: '1px solid #000' }, className: "forum__post-page-profile" },
                react_1["default"].createElement(material_1.Avatar, { className: "forum__post-page-profile-avatar", alt: "users avatar", src: imageUrl, sx: { height: 50, width: 50 } }),
                react_1["default"].createElement(react_router_dom_1.Link, { to: location, className: "forum__post-page-page-profile" },
                    react_1["default"].createElement(material_1.CardContent, { sx: { '&:last-child': { paddingBottom: 0 }, padding: 0, color: '#000' } },
                        react_1["default"].createElement(material_1.Typography, { gutterBottom: true, className: "forum__post-page-profile-user-name", variant: "subtitle1", component: "div", fontWeight: 700, sx: { marginBottom: 0 } }, name),
                        react_1["default"].createElement(material_1.Typography, { gutterBottom: true, variant: "subtitle2", component: "div", fontWeight: 500, sx: { paddingBottom: 0 } }, email)))),
            react_1["default"].createElement(material_1.Box, { className: "forum__post-page-post" },
                react_1["default"].createElement(material_1.Typography, { gutterBottom: true, variant: "subtitle1", component: "div", fontWeight: 700 }, title),
                react_1["default"].createElement("img", { src: Post_jpg_1["default"], alt: "post view", className: "forum__post-page-post-image" }),
                react_1["default"].createElement(material_1.Typography, { gutterBottom: true, variant: "subtitle1", component: "div", fontWeight: 500 }, body)),
            react_1["default"].createElement(material_1.Box, null,
                react_1["default"].createElement("form", { method: "post", onSubmit: handleSubmit },
                    react_1["default"].createElement(FormInput_1["default"], { type: "text", name: "title", label: "Write data", value: newPostData.title, handleChange: handleChange }))), comments === null || comments === void 0 ? void 0 :
            comments.map(function (item) { return react_1["default"].createElement(Comment_1["default"], __assign({ key: item.id }, item)); }))));
};
exports["default"] = PostView;
