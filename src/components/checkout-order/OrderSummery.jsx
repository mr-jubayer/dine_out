function OrderSummery({ placedOrders }) {
  const totalOrder = placedOrders.length;
  let pendingOrder = placedOrders.filter(
    (order) => order.status === "PENDING"
  ).length;
  let deliveredOrder = placedOrders.filter(
    (order) => order.status === "DELIVERED"
  ).length;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Total Orders */}
        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
          <div className="text-5xl font-bold text-yellow-500 mb-2">
            {totalOrder}
          </div>
          <div className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
            Total Order
          </div>
        </div>
        {/* Pending Orders */}
        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
          <div className="text-5xl font-bold text-red-500 mb-2">
            {pendingOrder}
          </div>
          <div className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
            Pending
          </div>
        </div>
        {/* Delivered Orders */}
        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
          <div className="text-5xl font-bold text-green-500 mb-2">
            {deliveredOrder}
          </div>
          <div className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
            Delivered
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderSummery;
