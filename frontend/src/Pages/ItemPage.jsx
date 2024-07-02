import React, { useState, useMemo } from "react";
import "./ItemPage.css"; // Assuming you have styles.css for custom styles

const items = [
  {
    id: 1,
    name: "Kayak",
    price: 50,
    category: "Outdoor",
    renter: "John Doe",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Camping Gear",
    price: 75,
    category: "Outdoor",
    renter: "Jane Smith",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "DJ Equipment",
    price: 100,
    category: "Electronics",
    renter: "Bob Johnson",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Party Supplies",
    price: 25,
    category: "Household",
    renter: "Sarah Lee",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Power Tools",
    price: 80,
    category: "Tools",
    renter: "Mike Brown",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Formal Wear",
    price: 60,
    category: "Clothing",
    renter: "Emily Davis",
    image: "/placeholder.svg",
  },
];

function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    price: {
      min: 0,
      max: 1000,
    },
  });
  const [sortBy, setSortBy] = useState("featured");

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        if (filters.category.length > 0 && !filters.category.includes(item.category)) {
          return false;
        }
        if (item.price < filters.price.min || item.price > filters.price.max) {
          return false;
        }
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.featured - a.featured;
          case "low":
            return a.price - b.price;
          case "high":
            return b.price - a.price;
          default:
            return 0;
        }
      });
  }, [searchTerm, filters, sortBy]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setFilters({
        ...filters,
        category: filters.category.includes(value)
          ? filters.category.filter((item) => item !== value)
          : [...filters.category, value],
      });
    } else if (type === "price") {
      setFilters({
        ...filters,
        price: {
          ...filters.price,
          [value.key]: value.val,
        },
      });
    }
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-md">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search items..."
            className="w-full rounded-lg bg-background pl-8"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => console.log("Open Filters Dropdown")}
            className="h-9 gap-1 flex items-center border border-gray-300 rounded"
          >
            <FilterIcon className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <button
            onClick={() => console.log("Open Sort Dropdown")}
            className="h-9 gap-1 flex items-center border border-gray-300 rounded"
          >
            <ListOrderedIcon className="h-4 w-4" />
            <span>Sort</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-background rounded-lg overflow-hidden shadow-sm">
            <img src="/placeholder.svg" alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-muted-foreground">Rented by {item.renter}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-semibold">${item.price}/day</span>
                <button className="text-sm">Rent Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

export default Component;
