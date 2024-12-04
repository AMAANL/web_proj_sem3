import React from 'react';

const Home = () => (
  <div id="1" className="bg-yellow-50">
    <h1 className="text-4xl font-bold text-center py-8">Welcome to Hair 'N' Things</h1>
    
    {/* Hero Section */}
    <div className="hero-section bg-gradient-to-l from-pink-200 to-blue-200 py-24 px-16 flex justify-between items-center rounded-xl mx-auto mb-8">
      <div className="hero">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">Nourish Your Hair with Our Product</h1>
          <p className="text-white mb-4">Experience the ultimate solution for healthy, vibrant hair!</p>
          <a className="btn-shop bg-purple-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105" href="#">Shop Now</a>
          <a className="btn-learn border-2 border-white text-white py-2 px-4 rounded-lg ml-4 hover:bg-white hover:text-black transition-all" href="#">Learn More</a>
        </div>
       
      </div>
    </div>

    {/* Categories Section */}
    <div className="container mb-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Shampoo Products</h1>
      <div className="card-container flex flex-wrap gap-6 justify-around">
        {/* Card 1 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728066591164.jpg" alt="Shampoo 1" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Loreal Paris Total Repair</h2>
          <p className="text-xl font-bold">$10.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to cart</button>
        </div>
        {/* Card 2 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728066769203.jpg" alt="Shampoo 2" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Loreal Paris Elvive</h2>
          <p className="text-xl font-bold">$12.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to cart</button>
        </div>
        {/* Card 3 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728066891353.jpg" alt="Shampoo 3" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Dove</h2>
          <p className="text-xl font-bold">$15.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to cart</button>
        </div>
        {/* Card 4 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728067048201.jpg" alt="Shampoo 4" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Head and Shoulders</h2>
          <p className="text-xl font-bold">$20.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to cart</button>
        </div>
      </div>
    </div>

    {/* Conditioner Section */}
    <div className="container mb-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Conditioner Products</h1>
      <div className="card-container flex flex-wrap gap-6 justify-around">
        {/* Card 1 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728067978647.jpg" alt="Conditioner 1" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Pantene</h2>
          <p className="text-xl font-bold">$10.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 2 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728068132391.jpg" alt="Conditioner 2" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Tresmme</h2>
          <p className="text-xl font-bold">$12.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 3 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728068271179.jpg" alt="Conditioner 3" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Loreal Paris</h2>
          <p className="text-xl font-bold">$15.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 4 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728068364567.jpg" alt="Conditioner 4" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Mama Earth</h2>
          <p className="text-xl font-bold">$20.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>

    {/* Cream Products Section */}
    <div className="container mb-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Cream Products</h1>
      <div className="card-container flex flex-wrap gap-6 justify-around">
        {/* Card 1 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728068590442.jpg" alt="Cream 1" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Dabur</h2>
          <p className="text-xl font-bold">$10.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 2 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728068796013.jpg" alt="Cream 2" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Ustraa</h2>
          <p className="text-xl font-bold">$12.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 3 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728068915381.jpg" alt="Cream 3" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Himalaya</h2>
          <p className="text-xl font-bold">$15.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 4 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728069020467.jpg" alt="Cream 4" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Curl Up</h2>
          <p className="text-xl font-bold">$20.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>

    {/* Oil Products Section */}
    <div className="container mb-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Oil Products</h1>
      <div className="card-container flex flex-wrap gap-6 justify-around">
        {/* Card 1 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728069163707.jpg" alt="Oil 1" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Parachute</h2>
          <p className="text-xl font-bold">$10.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 2 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728069633666.jpg" alt="Oil 2" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Bajaj Almond</h2>
          <p className="text-xl font-bold">$12.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 3 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728069783106.jpg" alt="Oil 3" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Navratna</h2>
          <p className="text-xl font-bold">$15.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Card 4 */}
        <div className="card w-1/4 p-4 text-center bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <img src="./imresizer-1728069883595.jpg" alt="Oil 4" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Adivasi</h2>
          <p className="text-xl font-bold">$20.00</p>
          <button className="but bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>

    {/* Signup Section */}
    <div className="last text-center bg-gradient-to-b from-pink-200 to-yellow-200 p-8 rounded-lg mt-8">
      <h2 className="text-2xl font-semibold">Join Us for Exclusive Offers!</h2>
      <p className="mb-4">Sign up now to receive the latest updates, discounts, and promotions.</p>
      <form className="flex justify-center items-center">
        <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg text-black" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  </div>
);

export default Home;
