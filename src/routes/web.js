import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.delete("/delete-user/:id", homeController.handleDeleteUser);
    router.get("/update/:id", homeController.getUpdateUserPage);
    router.put("/users/update-user/:id", homeController.handleUpdateUser);
    return app.use("/", router);
};

export default initWebRoutes;
