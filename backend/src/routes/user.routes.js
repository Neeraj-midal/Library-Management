import express from "express";

import{getUsers,getUserById,updateUser,deleteUser} from "../controllers/user.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import {authorize} from "../middlewares/role.middleware.js";

const router= express.Router();

router.get("/",protect,authorize("ADMIN"),getUsers);
router.get("/:id",protect,authorize("ADMIN"),getUserById);
router.put("/:id",protect,authorize("ADMIN"),updateUser);
router.delete("/:id",protect,authorize("ADMIN"),deleteUser);

export default router;