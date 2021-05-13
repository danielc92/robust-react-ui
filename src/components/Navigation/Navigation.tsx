// Generated with util/create-component.js
import React, { ReactNode, useEffect, useRef, useState } from "react";

import { NavigationProps } from "./Navigation.types";

import "./Navigation.scss";
import classNames from "classnames";
import { KEY_CODES } from "../../constants";

const Navigation = ({ children }: NavigationProps) => {
  const [activeMenuItem, setActiveMenuState] = useState<number>(0);

  const setActiveMenu = (dir: "right" | "left") => {
    const len = React.Children.map(children, (_child) => 1).length;
    const max = len - 1;
    const min = 0;
    if (dir === "right") {
      if (activeMenuItem === max) {
        setActiveMenuState((activeMenuItem) => 0);
      } else {
        setActiveMenuState((activeMenuItem) => activeMenuItem + 1);
      }
    }
    if (dir === "left") {
      if (activeMenuItem === min) {
        setActiveMenuState((activeMenuItem) => max);
      } else {
        setActiveMenuState((activeMenuItem) => activeMenuItem - 1);
      }
    }
  };
  return (
    <nav
      aria-label="INSERTHERE"
      data-testid="Navigation"
      className="dcui-navigation"
    >
      <ul
        className="dcui-navigation__menubar"
        id="menubar1"
        role="menubar"
        aria-label="Mythical University"
      >
        {React.Children.count(children)
          ? React.Children.map(children, (child, index) =>
              React.cloneElement(child as React.ReactElement<any>, {
                navKey: index,
                setActiveMenu,
                currentActiveMenuItem: activeMenuItem,
              })
            )
          : null}
      </ul>
    </nav>
  );
};

interface MenuItemProps {
  text: string;
  href: string;
  children?: ReactNode;
  setActiveMenu?: (x: "right" | "left") => void;
  currentActiveMenuItem?: number;
  navKey?: number;
}
const MenuItem = ({
  text,
  href,
  children,
  navKey,
  setActiveMenu,
  currentActiveMenuItem,
}: MenuItemProps) => {
  const [showing, setShowing] = useState(false);
  const toggleDropdownShowing = () => {
    setShowing(!showing);
    if (!showing === false) {
      ref.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const keyName = KEY_CODES[event.keyCode];
    console.log(keyName, "pressing...");
    if (keyName === "right arrow") setActiveMenu("right");

    if (keyName === "left arrow") setActiveMenu("left");
    if (keyName === "enter") setShowing(!showing);
  };

  const ref = useRef(null);

  useEffect(() => {
    if (currentActiveMenuItem === navKey) ref.current.focus();
  }, [currentActiveMenuItem]);
  return (
    <li role="none" className="dcui-navigation__menu-item">
      <a
        ref={ref}
        tabIndex={navKey === currentActiveMenuItem ? 0 : -1}
        role="menuitem"
        className="dcui-navigation__menu-link"
        href={href}
        onKeyDown={handleKeyDown}
        aria-haspopup={children ? "true" : "false"}
        aria-expanded={!children ? null : showing ? "true" : "false"}
      >
        {text}
        {React.isValidElement(children) ? "_" : ""}
      </a>
      {React.isValidElement(children)
        ? React.Children.map(children, (child) =>
            React.cloneElement(child, {
              showing,
              toggleDropdownShowing,
              setActiveMenu,
            })
          )
        : null}
    </li>
  );
};

interface MenuDropdownProps {
  children: ReactNode;
  showing?: boolean;
  right?: boolean;
  toggleDropdownShowing?: () => void;
  setActiveMenu?: (dir: "left" | "right") => void;
}
const MenuDropdown = ({
  children,
  showing,
  right,
  toggleDropdownShowing,
  setActiveMenu,
}: MenuDropdownProps) => {
  const [activeItem, setActive] = useState(0);

  const setActiveDropdownItem = (dir: "up" | "down") => {
    const len = React.Children.map(children, (_child) => 1).length;
    const max = len - 1;
    const min = 0;

    if (dir === "down") {
      if (activeItem === max) {
        setActive((activeItem) => 0);
      } else {
        setActive((activeItem) => activeItem + 1);
      }
    }
    if (dir === "up") {
      if (activeItem === min) {
        setActive((activeItem) => max);
      } else {
        setActive((activeItem) => activeItem - 1);
      }
    }
  };

  return (
    <ul
      role="menu"
      aria-label="INSERTHERE"
      className={classNames({
        "dcui-navigation__dropdown": true,
        "dcui-navigation__dropdown--showing": showing,
        "dcui-navigation__dropdown--right": right,
      })}
    >
      {/* {children} */}
      {React.Children.count(children)
        ? React.Children.map(children, (child, index) =>
            React.cloneElement(child as React.ReactElement<any>, {
              dropdownKey: index,
              activeItem,
              dropdownShowing: showing,
              isHighlighted: index === activeItem,
              setActiveDropdownItem,
              toggleDropdownShowing,
              setActiveMenu,
            })
          )
        : null}
    </ul>
  );
};

interface MenuDropdownItemProps {
  text: string;
  href: string;
  children?: ReactNode;
  dropdownShowing?: boolean;
  isHighlighted?: boolean;
  setActiveDropdownItem?: (dir: "up" | "down") => void;
  toggleDropdownShowing?: () => void;
  setActiveMenu?: (dir: "left" | "right") => void;
}

const MenuDropdownItem = ({
  text,
  href,
  children,
  setActiveDropdownItem,
  dropdownShowing,
  isHighlighted,
  toggleDropdownShowing,
  setActiveMenu,
}: MenuDropdownItemProps) => {
  const [showing, setShowing] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const keyName = KEY_CODES[event.keyCode];
    if (keyName === "up arrow") setActiveDropdownItem("up");
    if (keyName === "down arrow") setActiveDropdownItem("down");
    if (keyName === "right arrow") {
      setActiveMenu("left");
    }
    if (keyName === "left arrow") {
      setActiveMenu("right");
    }
    if (keyName === "escape") {
      toggleDropdownShowing();
    }
  };
  const ref = useRef(null);

  useEffect(() => {
    if (isHighlighted && dropdownShowing) {
      ref.current.focus();
    }
  }, [isHighlighted, dropdownShowing]);

  return (
    <li className="dcui-navigation__dropdown-item" role="none">
      <a
        tabIndex={-1}
        ref={ref}
        className="dcui-navigation__dropdown-link"
        role="menuitem"
        href={href}
        onKeyDown={handleKeyDown}
      >
        {text}
        {React.isValidElement(children) ? "_" : ""}
      </a>

      {React.isValidElement(children)
        ? React.cloneElement(children, { showing, right: true })
        : null}
    </li>
  );
};

interface MenuDropdownDividerProps {}

const MenuDropdownDivider = ({}: MenuDropdownDividerProps) => {
  return <li role="separator"></li>;
};

Navigation.MenuItem = MenuItem;
Navigation.MenuDropdown = MenuDropdown;
Navigation.MenuDropdownItem = MenuDropdownItem;
Navigation.MenuDropdownDivider = MenuDropdownDivider;

export default Navigation;
