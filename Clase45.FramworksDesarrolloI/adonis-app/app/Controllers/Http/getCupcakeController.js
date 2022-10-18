const Cupcake = use("App/Models/Cupcake");

class GetCupcakeController {
  async index({ response, view, request }) {
    const result = await Cupcake.all();
    const cupcakes = result.toJSON();
    console.log(request.params);
    return view.render("cupcakes", { cupcakes });
  }
}

module.exports = GetCupcakeController;
