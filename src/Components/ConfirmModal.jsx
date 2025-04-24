import React from 'react'

export default function ConfirmModal({
    message = "", 
    onConfirm, 
    onCancel ,
}) {
  return (
  <div
  className="fixed inset-0 z-20 flex items-center justify-center opacity-85 backdrop-blur-1xl"
  style={{ backgroundColor: 'rgb(0, 0, 0,0.6)' }}
  >

      <div className="bg-white  pl-3 pr-3 pt-6 rounded-xl shadow-xl w-[330px] h-[130px] text-center">
        <p className="mb-4 opacity-100">{message}</p>
        <div className="flex justify-between pl-3 pr-3">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white transition-all duration-400 cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-all duration-400 cursor-pointer opacity-100"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
