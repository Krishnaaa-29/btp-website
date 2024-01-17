import orderModel from "../models/orderModel.js";

const order = async (req, res) => {
  try {
    const { name, price, description, email } = req.body;
    if (!name || !price || !description || !email) {
      return res.status(403).json({ error: "All fields must be filled" });
    }
    const orderDetails = await orderModel.create({name, price, description, orderedBy:email})
    if (orderDetails) {
      return res.status(201).json({ _id: orderDetails.id, name: orderDetails.name, price: orderDetails.price, description: orderDetails.description, email: orderDetails.email });
    } else {
      return res.status(400).json({ error: "Something went wrong" });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getCoffee = async (req, res) => {
  try{
    const coffee = await orderModel.find()
    if(coffee){
      const recentOrder=await orderModel.find({}).sort({createdAt:1}).limit(1);
      if(recentOrder.length === 0){
        return res.status(200).json({
          message: 'No order left',
        });
      } 
      else{
        await orderModel.findOneAndDelete({}).sort({createdAt:1}).limit(1);
        return res.status(300).json({
          message: 'There are orders',
          orders: coffee.length,
          recentOrder: recentOrder[0]
        });
      }
    }else{
      return res.status(404).json({error: "No coffee found"})
    }
  } catch(err){
    return res.status(500).json({error: err})
  }
}

export { order, getCoffee };