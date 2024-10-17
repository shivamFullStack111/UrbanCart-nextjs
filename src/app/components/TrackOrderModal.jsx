import { RxCross1 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";

const TrackOrderModal = ({ setisTrackOpen, order }) => {
  return (
    <div className="w-full h-full z-50 fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-full h-full 600px:w-[600px] relative 600px:h-[90vh] overflow-y-scroll bg-white 600px:rounded-lg p-4 shadow-lg">
        {/* Close Button */}
        <RxCross1
          onClick={() => setisTrackOpen(false)}
          className="text-3xl cursor-pointer absolute top-3 right-3 hover:scale-110 hover:text-red-500"
        />

        {/* Header */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Order Tracking
          </h2>
          <TbTruckDelivery className="text-3xl text-gray-800" />
        </div>

        {/* Order Status Timeline */}
        <div className="flex">
          <div className="flex flex-col items-center w-9">
            <p className="h-6 w-6 rounded-full flex justify-center items-center bg-orange-400 text-white font-bold">
              1
            </p>
            <p className="h-12 w-1 bg-orange-400"></p>
            <p className="h-6 w-6 rounded-full flex justify-center items-center bg-orange-400 text-white font-bold">
              2
            </p>
            <p className="h-12 w-1 bg-orange-400"></p>
            <p className="h-6 w-6 rounded-full flex justify-center items-center bg-orange-400 text-white font-bold">
              3
            </p>
            <p className="h-12 w-1 bg-orange-400"></p>
            <p className="h-6 w-6 rounded-full flex justify-center items-center bg-orange-400 text-white font-bold">
              4
            </p>
          </div>

          <div className="flex flex-col gap-10 font-semibold text-lg text-gray-700">
            <p>Processing</p>
            <p>Order Confirmed</p>
            <p>Out For Delivery</p>
            <p>Order Delivered</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 bg-gray-100 rounded-md p-4 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-gray-600">Order Number:</p>
            <p className="text-gray-800">#{order?._id}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-gray-600">Order Date:</p>
            <p className="text-gray-800">
              {new Date(order?.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-gray-600">Total Items:</p>
            <p className="text-gray-800">{order?.cart?.length}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-600">Total Price:</p>
            <p className="text-gray-800">${order?.subTotal}</p>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="mt-6 bg-gray-100 rounded-md p-4 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Shipping Information
          </h3>
          <p className="text-gray-700">{order?.user?.name}</p>
          <p className="text-gray-700">
            {order?.user?.addresses[0].appartment}
          </p>
          <p className="text-gray-700">{order?.user?.addresses[0].address}</p>
          <p className="text-gray-700">
            {order?.user?.addresses[0].phoneNumber}
          </p>
        </div>

        {/* Tracking Details */}
        <div className="mt-6 bg-gray-100 rounded-md p-4 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Tracking Details
          </h3>
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-gray-600">Carrier:</p>
            <p className="text-gray-800">DHL Express</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-600">Tracking Number:</p>
            <p className="text-gray-800">#DHL12345678</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setisTrackOpen(false)}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderModal;
