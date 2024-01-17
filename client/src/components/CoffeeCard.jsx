import axios from "axios";
import cappucino from "../assets/cappucino.jpg";

const CoffeeCard = () => {
  const formData = {
    name: "Cappucino",
    price: 149,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates amet aperiam. Saepe magni sint debitis fugiat in facilis iusto.",
    email: localStorage.getItem("email")
  }
  const order = async () => {
    try{
      const response = await axios.post("http://localhost:3000/auth/order", formData)
      console.log(response)
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div className="w-[250px] bg-[#eeeff1] rounded-md m-4 overflow-hidden">
      <img src={cappucino} />
      <div className="flex flex-col items-center justify-center px-4">
        <h2 className="font-bold capitalize text-center py-2 text-[1.5rem]">
          Cappucino
        </h2>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          voluptates amet aperiam. Saepe magni sint debitis fugiat in facilis
          iusto.
        </p>
        <h1 className="font-bold pt-2">Rs. 149.00 </h1>
        <div className="py-4 flex items-center justify-center">
          <button className="black-button" onClick={order}>Order</button>
        </div>
      </div>
    </div>
  );
};
export default CoffeeCard;
