import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type NavigationButtonProps = {
  to: string;
  title: string;
  icon: ReactNode;
};

const NavigationButton = ({ to, title, icon }: NavigationButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `navigation-button ${isActive ? "active" : ""}`
      }
    >
      <div className="icon-wrapper">{icon}</div>
      <span className="navigation-title">{title}</span>
    </NavLink>
  );
};

export default NavigationButton;
