import notaRoute from "../routes/notaRoute";
import userRoute from "../routes/userRoute";

const router = express.Router();

//routes
router.get("/nota", notaRoute);
router.get("/user", userRoute);

module.exports = router;
