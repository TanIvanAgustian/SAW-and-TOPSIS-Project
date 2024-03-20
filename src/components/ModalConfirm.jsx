const ModalConfirm = ({
  title,
  description,
  onCancel,
  onConfirm,
  labelCancel,
  labelConfirm,
  variant,
}) => {
  const variants = {
    success:
      "bg-green-500 border w-1/2 text-white font-semibold hover:bg-green-500 px-4 py-2 rounded-xl",
    danger:
      "bg-red-500 border w-1/2 text-white font-semibold hover:bg-red-600 px-4 py-2 rounded-xl",
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 transition-opacity opacity-100">
      <div className="bg-white grid grid-cols h-56 max-h-fit w-80 rounded-xl shadow-lg p-4 transform transition-transform scale-100 ">
        <h2 className="text-h6 font-semibold">{title}</h2>
        <div className="flex items-start">
          <p className="text-p3">{description}</p>
        </div>
        <div className="flex align-bottom gap-3 py-2">
          <button
            id="btn_cancel"
            className="font-semibold border w-1/2 hover:bg-gray-200 py-2 rounded-2xl"
            onClick={onCancel}
          >
            {labelCancel}
          </button>
          <button
            id="btn_confirm"
            className={variants[variant]}
            onClick={onConfirm}
          >
            {labelConfirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
