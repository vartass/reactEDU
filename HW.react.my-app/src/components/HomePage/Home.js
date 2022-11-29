import React from 'react';
import {Hearts} from "react-loader-spinner";
import './Home.css';

const Home = () => {
  return (
    <div className="homePage">
      <p>MY HOME PAGE</p>

      <Hearts
        height="500"
        width="500"
        color="#fcf803"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />

    </div>
  );
};

export default Home;