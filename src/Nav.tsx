import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/alt">AltText</Link>
        </li>
        <li>
          <Link to="/contrast">Contrast</Link>
        </li>
        <li>
          <Link to="/empty-buttons">EmptyButtons</Link>
        </li>
        <li>
          <Link to="/empty-links">EmptyLinks</Link>
        </li>
        <li>
          <Link to="/labels">Labels</Link>
        </li>
        <li>
          <Link to="/lang">Lang</Link>
        </li>
      </ol>
    </nav>
  );
};
