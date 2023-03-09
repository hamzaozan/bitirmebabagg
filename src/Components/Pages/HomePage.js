import React from "react";

const HomePage = () => {
  return(
    <div>
      <h2>Welcome</h2>
      <a href='/creation'>
        <button>Create your own form</button>
      </a>
      <a href='/templates'>
        <button>Use template</button>
      </a>
    </div>
  );
}

export default HomePage;