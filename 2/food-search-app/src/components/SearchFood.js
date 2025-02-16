import React, { useState } from "react";
import "./FoodSearch.css"; // Import CSS for styling

const foodItems = [
  {
    id: 1,
    name: "Pasta Alfredo",
    ingredients: ["Pasta", "Cream", "Garlic", "Parmesan", "Butter"],
    details: "A rich and creamy Italian pasta dish.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Vegetable Biryani",
    ingredients: ["Rice", "Vegetables", "Spices", "Yogurt"],
    details: "A flavorful and aromatic Indian rice dish.",
    image: "https://media.istockphoto.com/id/1363306842/photo/veg-biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=NY0dFe6EYp8gzwScz7YMth2qFMxwwW6QeP0DNKqCEWo=",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    ingredients: ["Salmon", "Lemon", "Garlic", "Olive Oil", "Herbs"],
    details: "A healthy and delicious grilled fish dish.",
    image: "https://plus.unsplash.com/premium_photo-1726877140485-70692aafe655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JpbGxlZCUyMFNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredFoods = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Food Search</h1>
      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="food-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div key={food.id} className="food-card" onClick={() => setSelectedFood(food)}>
              <img src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
            </div>
          ))
        ) : (
          <p className="no-results">No food found</p>
        )}
      </div>

      {/* Recipe Modal */}
      {selectedFood && (
        <div className="modal-overlay" onClick={() => setSelectedFood(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedFood.name}</h2>
            <img src={selectedFood.image} alt={selectedFood.name} />
            <p>{selectedFood.details}</p>
            <h3>Ingredients:</h3>
            <ul>
              {selectedFood.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedFood(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodSearch;
