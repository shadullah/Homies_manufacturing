import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my-14 font-bold">Blog</h1>
      <div className="mx-5">
        <div className="collapse collapse-arrow my-10 container rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <b>How will you improve the performance of a React Application?</b>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>1. Not overloading the DOM</p>
            <p>2. Components should be cleaner</p>
            <p>3. Giving all props reference equality</p>
          </div>
        </div>

        <div className="collapse collapse-arrow my-10 container rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <b>What are the different ways to manage a state in a React application?</b>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Four ways to manage state in react application. They are:</p>
            <ul>
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow my-10 container rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <b>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</b>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>There can be many ways to do this. One of the common ways to do this with 'Query Selector by Name'.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow my-10 container rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <b>What is a unit test? Why should write unit tests?</b>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>unit testing means to see if a small chunk of code is running properly. Programmmers should write unit test of their code because it helps their code to fix bugs and running the program.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow my-10 container rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <b>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</b>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>It is a fatal decision to set the state directly in React. Because setting the state directly will replace the set that has been made. And for all components you might lose the control of the state.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
