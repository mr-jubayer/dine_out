import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderReports from "./OrderReports";
import OrderSummery from "./OrderSummery";

function CheckoutOrder() {
  const [placedOrders, setPlacedOrder] = useState([]);

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder setPlacedOrder={setPlacedOrder} />
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummery placedOrders={placedOrders} />
          <OrderReports
            placedOrders={placedOrders}
            setPlacedOrder={setPlacedOrder}
          />
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrder;
