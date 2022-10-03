import Meal from "../models/meal.model.js";

const getMenu = async (req, res) => {
  try {
    const meals = await Meal.find();

    res.json(meals);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default { getMenu };
