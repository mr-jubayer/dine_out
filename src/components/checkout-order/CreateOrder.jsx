import { useState } from "react";
import { foods } from "../../constant";
import MinusIcon from "../ui/icons/MinusIcon";
import PlusIcon from "../ui/icons/PlusIcon";

function CreateOrder({ setPlacedOrder }) {
  const [choosedItem, setChoosedItem] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChooseItem = (food) => {
    if (choosedItem.includes(food)) {
      setChoosedItem((prev) => prev.filter((item) => item !== food));
      return;
    }

    let chooseNewItem = foods.find((f) => f.id === food.id);
    setChoosedItem((prev) => [...prev, chooseNewItem]);
  };

  let totalPrice = choosedItem.reduce((acc, item) => acc + item?.price, 0);

  const handlePlaceOrder = () => {
    if (!customerName) {
      setErrorMessage("Name must not be empty.");
      return;
    }

    if (!choosedItem.length) {
      alert("Please choose an item and try again.");
      return;
    }

    let placeOrders = {
      id: crypto.randomUUID().slice(0, 3),
      customerName,
      items: choosedItem.length,
      amount: totalPrice,
      status: "PENDING",
    };

    setPlacedOrder((prev) => [...prev, placeOrders]);

    setChoosedItem([]);
    setCustomerName("");
    setErrorMessage("");
  };
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>
      <p className="text-red-500 text-xs pb-4"> {errorMessage}</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {foods.map((food) => (
            <FoodToChoose
              key={food.id}
              food={food}
              handleChooseItem={handleChooseItem}
              choosedItem={choosedItem}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}
export default CreateOrder;

function FoodToChoose({ food, handleChooseItem, choosedItem }) {
  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center mr-3">
          <img
            src={food.foodIconPath}
            alt="Pizza slices"
            className="w-10 h-10"
          />
        </div>
        <div>
          <h3 className="font-medium">{food.name}</h3>
          <p className="text-xs text-gray-400">BDT {food.price}</p>
        </div>
      </div>
      <button
        onClick={() => handleChooseItem(food)}
        className=" cursor-pointer w-8 h-8 bg-gray-800 active:bg-green-200/20 rounded-full flex items-center justify-center transition-colors duration-300"
      >
        {choosedItem.includes(food) ? <MinusIcon /> : <PlusIcon />}
      </button>
    </div>
  );
}
