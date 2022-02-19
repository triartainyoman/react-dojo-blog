import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>Sorry, that page cannot be found</p>
      <div>
        <Link to="/">Back to the homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
