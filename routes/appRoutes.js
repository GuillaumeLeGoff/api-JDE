import {
  addNewUser,
  getUsers,
  getUserWithId,
  updateUser,
  deleteUser,
} from "../controllers/login/userController";

import { addlike, getLike } from "../controllers/like/likeController";

const controller = require("../controllers/login/authController");

import { authentication, verifySignUp } from "../middleware";
import Like from "../models/like/like";

const routes = (app) => {
  app
    .route("/addlike")

    .post(addlike)

    .get(getLike);
  app
    .route("/users")

    .get(getUsers)

    .post(addNewUser);
  app
    .route("/user/:UserId")

    .get(getUserWithId)

    .put(updateUser)

    .delete(deleteUser);

  app.post(
    "/auth/signup",
    [verifySignUp.checkDuplicateUsername, verifySignUp.checkRolesExisted],
    controller.signup
  );

  app.post("/auth/signin", controller.signin);
};
export default routes;
