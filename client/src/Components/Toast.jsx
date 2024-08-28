import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
          padding: '15px 25px',
        },
      }}
    />
  );
};

export default ToasterProvider;
