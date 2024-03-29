import express from "express";
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, updateUserPermission } from "../controllers/userController.js";
import { androidProtect, protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/profile/android').get(androidProtect,getUserProfile);
router.post('/updatePermission',protect,updateUserPermission)

export default router   