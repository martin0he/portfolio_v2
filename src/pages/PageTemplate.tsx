import { Link } from "react-router-dom";

const PageTemplate = ({ title }: { title: string }) => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{title}</h1>
      <p>This is a placeholder for the {title.toLowerCase()} page.</p>
      <Link to="/" style={{ color: "#8a393e", textDecoration: "underline" }}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default PageTemplate;
