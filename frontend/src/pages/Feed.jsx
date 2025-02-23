import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Feeds.css";

const Feed = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  // Fetch recipes from backend
  useEffect(() => {
    axios.get("http://localhost:5000/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  // Filter Recipes based on Search & Category
  const filteredRecipes = recipes.filter((recipe) =>
    (category === "all" || recipe.category === category) &&
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">🍽️ Latest Recipes</h2>

      {/* Search and Filter Section */}
      <div className="d-flex justify-content-between my-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search recipes..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="form-select w-25" onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
          <option value="dessert">Desserts</option>
        </select>
      </div>

      {/* Recipe Cards Grid */}
      <div className="row">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description.substring(0, 80)}...</p>
                  <p className="text-muted">⏳ {recipe.time} min | 🍽️ {recipe.servings} servings</p>

                  {/* Like, Comment & View Recipe Buttons */}
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-danger">❤️ {recipe.likes}</button>
                    <button className="btn btn-outline-primary">💬 {recipe.comments.length}</button>
                    <Link to={`/recipe/${recipe.id}`} className="btn btn-warning">View</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
