import { useState, useEffect, useRef } from "react";

const CustomSelect = ({ events, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Selected Box */}
      <div
        className="bg-white text-black border border-gray-300 rounded-lg p-3 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>
          {selected
            ? events.find((e) => e._id === selected)?.title
            : "Select Event"}
        </span>
        <span className="text-gray-500">{open ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-auto z-50">
          {events.length === 0 && (
            <div className="p-3 text-gray-500">No events available</div>
          )}
          {events.map((event) => (
            <div
              key={event._id}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(event._id);
                setOpen(false);
              }}
            >
              {event.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
