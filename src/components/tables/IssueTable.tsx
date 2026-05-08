import { useEffect, useState } from "react";
import axios from "axios";

export default function IssueTable() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await axios.get("http://localhost:4000/api/issues");
      setIssues(res.data);
    };

    fetchIssues();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-3">Issued Books</h2>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Issue ID</th>
              <th>User ID</th>
              <th>Book ID</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id} className="border-t">
                <td className="p-2 text-xs">{issue.id}</td>
                <td className="p-2">{issue.userId}</td>
                <td className="p-2">{issue.bookId}</td>
                <td className="p-2">{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}