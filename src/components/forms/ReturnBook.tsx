import { useState } from "react";
import axios from "axios";

export default function ReturnBook() {
  const [issueId, setIssueId] = useState("");
  const [fine, setFine] = useState(null);

  const handleReturn = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/issues/return",
        { issueId }
      );

      setFine(res.data.fine);
      alert(`Book Returned. Fine: ₹${res.data.fine}`);
    } catch (err) {
      alert(err.response?.data?.message || "Error returning book");
    }
  };

return (
  <div className="max-w-md mx-auto">
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Return Book
        </h2>
        <p className="text-xs text-gray-500">
          Enter issue ID to return the book
        </p>
      </div>

      {/* Input */}
      <input
        placeholder="Issue ID"
        value={issueId}
        onChange={(e) => setIssueId(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Button */}
      <button
        onClick={handleReturn}
        className="mt-4 w-full bg-black text-white text-sm py-2.5 rounded-lg hover:bg-gray-900 active:scale-[0.99] transition"
      >
        Return Book →
      </button>

      {/* Fine Display */}
      {fine !== null && (
        <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-700">
            Fine:{" "}
            <span className="font-semibold text-black">
              ₹{fine}
            </span>
          </p>
        </div>
      )}

    </div>
  </div>
);
}