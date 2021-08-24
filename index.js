const element = (
  // Write your code here.
  <div>
    <div className="appBackground">
      <h1 className="heading">Congratulations</h1>
      <div class="id-card">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <h1 className="name">Kiran V</h1>
        <p className="description">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image2"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
