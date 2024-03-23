import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);

  // Function to extract the substring before '@'
  const getUsernameFromEmail = (email) => {
    if (!email) return ""; // Return empty string if email is not provided
    return email.split("@")[0];
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome
            {user
              ? `, ${getUsernameFromEmail(user.email) || "Bro"}`
              : " Bro"}
          </h1>
          <p className="mb-5">
          My name is Tuhin, and I am a software developer. I recently implemented Firebase-based authentication into my projects. Leveraging Firebase's authentication services, I've created secure login systems, allowing users to sign up, log in, and access personalized content. Integrating Firebase's authentication features has streamlined the user authentication process, enhancing the security and usability of my applications.
          </p>
          {user ? (
            <Link to="/profile">
              <button className="btn btn-primary">Continue</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
