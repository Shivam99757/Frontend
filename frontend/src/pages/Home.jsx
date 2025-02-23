import React from 'react';
import Background from '../components/Background';

const Home = () => {
  return (
    <div>
      <img src="image12.png.jpg" className="img-fluid w-100 pt-1" alt="Banner" />
      <Background />

      {/* Cards Container */}
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card shadow">
              <img src="image1.jpg
              " className="card-img-top" alt="Veg Recipes" />
              <div className="card-body">
                <h5 className="card-title">Veg Food</h5>
                <p className="card-text">Delicious vegetarian recipes for a healthy lifestyle.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image12.webp" className="card-img-top" alt="Card title" />
              <div className="card-body">
                <h5 className="card-title">Soups</h5>
                <p className="card-text">Soup is a liquid or creamy food that's usually made by cooking vegetables, meat, or fish in water</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image5.png" className="card-img-top" alt="Card title" />
              <div className="card-body">
                <h5 className="card-title">Healthy Food</h5>
                <p className="card-text">Healthy food provides the nutrients your body needs to maintain energy, feel good, and be healthy</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card shadow">
              <img src="/image4.png" className="card-img-top" alt="Card title" />
              <div className="card-body">
                <h5 className="card-title">Non-Veg Food</h5>
                <p className="card-text"> A rich and flavorful dish featuring tender chicken simmered in a fragrant blend of spices, tomatoes, and creamy sauce, creating a perfect balance of heat and aroma for a comforting and satisfying meal.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
