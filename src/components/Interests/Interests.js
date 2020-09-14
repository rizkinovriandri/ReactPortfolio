import React from 'react';

import './Interests.css';


const Interests = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="card-body">
          
          <div className="title"><h1>INTERESTS</h1></div>
          
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida massa, a venenatis purus. Proin urna lectus, dignissim sed iaculis at, aliquam quis risus. Quisque id odio tincidunt, hendrerit turpis id, semper ligula. Phasellus mauris lacus, congue sed quam ut, pharetra ultrices urna. Integer ultricies tincidunt urna vitae porttitor. Curabitur interdum faucibus pretium. Ut euismod posuere quam sed laoreet. Cras aliquam ultrices leo, a volutpat metus porta vel. Nulla metus sem, condimentum eget gravida non, scelerisque suscipit odio. Ut lacus urna, venenatis ac augue vel, fermentum egestas leo.</p>
          <center>
            <img className="img" alt="imginterest" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Interests;