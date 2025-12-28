import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";

const ViewParticipants = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // -------------------------
  // FETCH PARTICIPANTS
  // -------------------------
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await axios.get(
          `https://enginerds-1gc2.onrender.com/api/register/participants/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
          }
        );

        setParticipants(res.data.participants || []);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load participants");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [eventId]);

  // -------------------------
  // SEARCH FILTER
  // -------------------------
  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return participants.filter((p) => {
      return (
        p.name?.toLowerCase().includes(term) ||
        p.email?.toLowerCase().includes(term) ||
        p.phone?.toLowerCase().includes(term) ||
        p.paymentId?.toLowerCase().includes(term) ||
        p.transactionId?.toLowerCase().includes(term)
      );
    });
  }, [search, participants]);

  // -------------------------
  // TOTAL COLLECTION
  // -------------------------
  const totalCollection = filtered.reduce(
    (sum, p) => sum + Number(p.amountPaid || 0),
    0
  );

  // -------------------------
  // DOWNLOAD EXCEL
  // -------------------------
  const downloadExcel = () => {
    if (filtered.length === 0) {
      toast.error("No participants to download!");
      return;
    }

    const data = filtered.map((p) => ({
      Name: p.name,
      Email: p.email,
      Phone: p.phone,
      PaymentID: p.paymentId || "N/A",
      TransactionID: p.transactionId || "N/A",
      AmountPaid: p.amountPaid || "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
    XLSX.writeFile(workbook, `event_${eventId}_participants.xlsx`);
  };

  // -------------------------
  // DOWNLOAD PDF
  // -------------------------
  const downloadPDF = () => {
    if (filtered.length === 0) {
      toast.error("No participants to download!");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Participants List", 14, 20);

    const tableColumn = [
      "Name",
      "Email",
      "Phone",
      "Payment ID",
      "Transaction ID",
      "Amount",
    ];

    const tableRows = filtered.map((p) => [
      p.name,
      p.email,
      p.phone,
      p.paymentId || "N/A",
      p.transactionId || "N/A",
      p.amountPaid || "N/A",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save(`event_${eventId}_participants.pdf`);
  };

  if (loading) return <p className="p-6 text-lg text-white">Loading...</p>;

  return (
    <div className="bg-black min-h-screen p-6 text-white animate-fadeIn">

      {/* HEADER */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Participants</h1>

        <div className="flex gap-3">
          <button
            onClick={downloadExcel}
            className="px-5 py-2 rounded-xl border border-green-600 text-green-500 font-semibold hover:bg-green-400/10 transition"
          >
            Download Excel
          </button>

          <button
            onClick={downloadPDF}
            className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, email, phone, payment ID..."
        className="w-full md:w-1/3 px-4 py-2 rounded-xl bg-white/10 border border-white/20 
        placeholder-gray-300 backdrop-blur-md focus:ring-2 focus:ring-purple-500 outline-none mb-6"
      />

      {/* TOTAL COLLECTION */}
      <div className="p-4 mb-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
        <h2 className="text-lg font-semibold">Total Collection</h2>
        <p className="text-2xl text-green-400 font-bold mt-1">
          ₹{totalCollection}
        </p>
        <p className="text-sm text-gray-300 mt-1">
          Showing {filtered.length} participants
        </p>
      </div>

      {/* PARTICIPANTS TABLE */}
      {filtered.length === 0 ? (
        <p>No participants found.</p>
      ) : (
        <div className="max-h-[65vh] overflow-y-auto rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl">
          <table className="w-full border-collapse">

            {/* STICKY HEADER */}
            <thead className="sticky top-0 z-10 bg-black/80 backdrop-blur-lg text-purple-300">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Payment ID</th>
                <th className="p-3 text-left">Transaction ID</th>
                <th className="p-3 text-left">Amount</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p, i) => (
                <tr
                  key={p._id}
                  className={`transition ${
                    i % 2 === 0 ? "bg-white/5" : "bg-white/10"
                  } hover:bg-white/20`}
                >
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.email}</td>
                  <td className="p-3">{p.phone}</td>
                  <td className="p-3">{p.paymentId || "—"}</td>
                  <td className="p-3">{p.transactionId || "—"}</td>
                  <td className="p-3 text-green-400 font-bold">
                    ₹{p.amountPaid || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewParticipants;
