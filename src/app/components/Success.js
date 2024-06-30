// /src/app/components/SuccessMessage.js
export default function SuccessMessage({ message }) {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-md">
      {message}
    </div>
  );
}
