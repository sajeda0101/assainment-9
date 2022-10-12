import React from "react";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <section className="">
      <div className="mt-32 mx-32">
      <div className="bg-gray-100 p-5 rounded leading-loose">
        <h1 className="text-center text-2xl font-bold">
          What is purpose of use react router?
        </h1>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
          <p>
            {" "}
            <strong>Installing React Router:</strong> React Router can be
            installed via npm in your React application. Follow the steps given
            below to install Router in your React application:{" "}
            <ul>
              <li> Step 1: cd into your project directory i.e geeks.</li>
              <li>
                Step 2: To install the React Router use the following command:
              </li>
              <li>
                {" "}
                <strong>
                  npm install – -save react-router-dom or npm i react-router-dom
                  (its a updated command)
                </strong>
              </li>
            </ul>
          </p>
          <p>
            {" "}
            After installing react-router-dom, add its components to your React
            application. Adding React Router Components: The main Components of
            React Router are:
            <ul>
              <li>
                <strong>BrowserRouter: </strong> BrowserRouter is a router
                implementation that uses the HTML5 history API(pushState,
                replaceState and the popstate event) to keep your UI in sync
                with the URL. It is the parent component that is used to store
                all of the other components.
              </li>
              <li>
                <strong>Routes:</strong> It’s a new component introduced in the
                v6 and a upgrade of the component. The main advantages of Routes
                over Switch are: Relative s and s Routes are chosen based on the
                best match instead of being traversed in order.
              </li>
              <li>
                <strong>Route:</strong> Route is the conditionally shown
                component that renders some UI when its path matches the current
                URL.
              </li>
              <li>
                {" "}
                <strong>Link:</strong> Link component is used to create links to
                different routes and implement navigation around the
                application. It works like HTML anchor tag.
              </li>
            </ul>
          </p>
        </p>
      </div>
      <div className="bg-gray-100 p-5 rounded leading-loose mt-12">
        <p className="text-center text-2xl font-bold">
          What is useContext and how to work its?
        </p>
        <p>
          Context provides a way to pass data or state through the component
          tree without having to pass props down manually through each nested
          component. It is designed to share data that can be considered as
          global data for a tree of React components, such as the current
          authenticated user or theme(e.g. color, paddings, margins,
          font-sizes). Context API uses Context. Provider and Context. Consumer
          Components pass down the data but it is very cumbersome to write the
          long functional code to use this Context API. So useContext hook helps
          to make the code more readable, less verbose and removes the need to
          introduce Consumer Component. The useContext hook is the new addition
          in React 16.8.{" "}
        </p>
      </div>
      <div className="bg-gray-100 p-5 rounded leading-loose mt-12">
        <p className="text-center text-2xl font-bold">What is useRef</p>
        <p>
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue). The returned object
          will persist for the full lifetime of the component.You might be
          familiar with refs primarily as a way to access the DOM. If you pass a
          ref object to React with , React will set its .current property to the
          corresponding DOM node whenever that node changes. However, useRef()
          is useful for more than the ref attribute. It’s handy for keeping any
          mutable value around similar to how you’d use instance fields in
          classes.
        </p>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default Blog;
