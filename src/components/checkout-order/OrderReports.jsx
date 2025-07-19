import { useState } from "react";
import FilterIcon from "../ui/icons/FilterIcon";

function OrderReports({ placedOrders, setPlacedOrder }) {
  let [status, setStatus] = useState("all");

  const filteredPlacedOrders = () => {
    let filteredOrders = placedOrders;
    if (status === "pending") {
      filteredOrders = placedOrders.filter(
        (order) => order.status === "PENDING"
      );
    } else if (status === "delivered") {
      filteredOrders = placedOrders.filter(
        (order) => order.status === "DELIVERED"
      );
    }

    return filteredOrders;
  };

  const handleDeliver = (deliveredOrderId) => {
    let updateOrders = placedOrders.map((order) => {
      if (order.id === deliveredOrderId) {
        return { ...order, status: "DELIVERED" };
      } else {
        return order;
      }
    });

    setPlacedOrder(updateOrders);
  };

  const handleDeleteReport = (orderReportId) => {
    let updateOrders = placedOrders.filter((order) => {
      if (order.id === orderReportId) {
        return;
      } else {
        return order;
      }
    });

    setPlacedOrder(updateOrders);
  };

  const tableBody = !placedOrders.length ? (
    <h2 className="py-10 ">Empty Order Report</h2>
  ) : (
    <tbody className="text-sm">
      {filteredPlacedOrders().map((order) => (
        <Report
          key={order.id}
          orderInfo={order}
          handleDeliver={handleDeliver}
          handleDeleteReport={handleDeleteReport}
        />
      ))}
    </tbody>
  );
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>
        <FilterReports status={status} setStatus={setStatus} />
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            {tableBody}
          </table>
        </div>
      </div>
    </div>
  );
}
export default OrderReports;

function FilterReports({ status, setStatus }) {
  return (
    <div className="flex gap-4 items-center">
      <FilterIcon />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
}

function Report({ orderInfo, handleDeliver, handleDeleteReport }) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{orderInfo.id}</td>
      <td className="py-3">{orderInfo.customerName}</td>
      <td className="py-3">{orderInfo.items}</td>
      <td className="py-3">{orderInfo.amount}</td>
      <td className="py-3">
        {orderInfo.status === "PENDING" ? (
          <span className="text-red-500">PENDING</span>
        ) : (
          <span className="text-green-500">DELIVERED</span>
        )}
      </td>
      <td className="py-3">
        <button
          onClick={() => handleDeleteReport(orderInfo.id)}
          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
        >
          Delete
        </button>
        {orderInfo.status !== "DELIVERED" ? (
          <button
            onClick={() => handleDeliver(orderInfo.id)}
            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
          >
            DELIVER
          </button>
        ) : null}
      </td>
    </tr>
  );
}
