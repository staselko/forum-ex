"use strict";
exports.__esModule = true;
exports.selectUserFromSearch = exports.selectIsUsersLoading = exports.selectCurrentUser = void 0;
var reselect_1 = require("reselect");
var usersWithPosts = (function (store) { return store.users.usersList; });
var loading = (function (store) { return store.users.isLoading; });
exports.selectCurrentUser = function (id) { return reselect_1.createSelector([usersWithPosts], function (userWithPosts) { return userWithPosts.filter(function (user) { return user.id === id; })[0]; }); };
exports.selectIsUsersLoading = reselect_1.createSelector([loading], function (isLoading) { return isLoading; });
exports.selectUserFromSearch = function (searcingValue) { return reselect_1.createSelector([usersWithPosts], function (usersList) { return usersList.filter(function (user) { return user.name.toLocaleLowerCase()
    .includes(searcingValue.toLocaleLowerCase()); }); }); };
