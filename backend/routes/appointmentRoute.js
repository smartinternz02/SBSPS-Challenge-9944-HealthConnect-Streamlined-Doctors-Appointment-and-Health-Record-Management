import express from "express";
// import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { bookAppointment,viewAllMyAppointments,deleteAppointments,editAppointment } from "../controllers/appointmentController.js";


const appointmentRouter = express.Router();

appointmentRouter.post('/book', protect, bookAppointment);
appointmentRouter.route('/').delete(protect,deleteAppointments).get(protect, viewAllMyAppointments).put(protect,editAppointment);


export default appointmentRouter;