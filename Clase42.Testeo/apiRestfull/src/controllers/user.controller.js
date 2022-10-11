import UserDTO from "../dto/user.dto.js";
import userService from "../services/user.service.js";
import WSresponse from "../utils/WSresponse.js";

const getOneUser = async (req, res) => {
  try {
    const userId = req.header("userId");

    const response = await userService.getUserById(userId);
    const userDto = new UserDTO(response);

    res.json(new WSresponse(userDto, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, "Error", err, 500));
  }
};

const createUser = async (req, res) => {
  try {
    await userService.createUser(req.body);

    res.json(new WSresponse(true, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, "Error", err, 500));
  }
};

export default { getOneUser, createUser };
