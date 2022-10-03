import { userDao } from "../daos/user.dao.js";
import WSresponse from "../libs/WSresponse.js";

const checkIfUserIsAdmin = async (req, res, next) => {
  const userId = req.header("userId");
  const user = await userDao.getUserById(userId);
  console.log(user);
  if (user.role === "ADMIN") {
    next();
  } else {
    const message = "You dont have permission to acces this resource";

    res.status(401).json(new WSresponse(null, message, "Unauthorized", 401));
  }
};

export const checkRole = { checkIfUserIsAdmin };
