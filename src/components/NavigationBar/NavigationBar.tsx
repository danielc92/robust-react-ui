// Generated with util/create-component.js
import React, { createRef, useEffect, useState } from "react";
import { NavigationBarProps, NavigationData } from "./NavigationBar.types";
import "./NavigationBar.scss";

const STYLES = {
  DROPDOWN_LEVEL1: {
    border: "1px solid black",
  },
  DROPDOWN_LEVEL2: {
    border: "1px solid black",
  },
};

type Dir = "LEFT" | "RIGHT" | "UP" | "DOWN";
interface TransformedNavigationNode {
  menuOpen?: boolean;
  hasMenu: boolean;
  parentId: number | null;
  id: number;
  ref: React.RefObject<any>;
  order: number;
}
const NavigationBar = ({ data }: NavigationBarProps) => {
  const [nodes, setNodes] = useState<TransformedNavigationNode[]>([]);

  useEffect(() => {
    let nodes = [];

    const getNode = (x: NavigationData, i: number) => {
      let o: Partial<TransformedNavigationNode> = {};
      if (x.children) {
        o.menuOpen = false;
        o.hasMenu = true;
      } else {
        o.hasMenu = false;
      }
      o.id = x.id;
      o.parentId = x.parentId;
      o.ref = createRef();
      o.order = i;
      return o;
    };

    data.forEach((x, i) => {
      const node = getNode(x, i);
      nodes.push(node);
      x.children?.forEach((x2, i2) => {
        const node = getNode(x2, i2);
        nodes.push(node);
        x2.children?.forEach((x3, i3) => {
          const node = getNode(x3, i3);
          nodes.push(node);
        });
      });
    });

    setNodes(nodes);
  }, []);

  const toggleAnyMenu = (id) => {};
  const traverseTopLevelMenu = (id, dir: Dir) => {
    const menuNodes = nodes.filter((x) => x.parentId === null);
    const max = menuNodes.length - 1;
    if (dir === "LEFT") {
      if (id === 0) {
        const nextOrder = max;
        menuNodes.find((x) => x.order === nextOrder).ref.current.focus();
      } else {
        const nextOrder = id - 1;
        menuNodes.find((x) => x.order === nextOrder).ref.current.focus();
      }
    }
    if (dir === "RIGHT") {
      if (id === max) {
        const nextOrder = max;
        menuNodes.find((x) => x.order === 0).ref.current.focus();
      } else {
        const nextOrder = id + 1;
        menuNodes.find((x) => x.order === nextOrder).ref.current.focus();
      }
    }
  };

  return (
    <nav
      className="dcui-nav"
      data-testid="NavigationBar"
      aria-label="Mythical University"
    >
      {/* Root nav bar */}
      <ul id="menubar1" role="menubar" aria-label="Mythical University">
        {data.map((a, _ai) => {
          const n = nodes.find((n) => n.id === a.id);
          console.log(n);
          return (
            <li role="none" className="dcui-nav__menu-item">
              <a
                ref={n?.ref}
                onKeyDown={(e) => {
                  e.preventDefault();
                  console.log(e);
                  if (e.keyCode === 37) {
                    traverseTopLevelMenu(_ai, "LEFT");
                  }
                  if (e.keyCode === 39) {
                    traverseTopLevelMenu(_ai, "RIGHT");
                  }
                }}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                href={a.linkHref}
                tabIndex={0}
              >
                {a.linkName}
              </a>
              {/* 1st dropdown level*/}
              {a.children && (
                <ul
                  className="dcui-nav__dropdown"
                  role="menu"
                  aria-label={a.linkName}
                  style={STYLES.DROPDOWN_LEVEL1}
                >
                  {a.children.map((b, _bi) => (
                    <li role="none" className="dcui-nav__dropdown-item">
                      <a
                        id={b.id.toString()}
                        role="menuitem"
                        href={b.linkHref}
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={-1}
                      >
                        {b.linkName}
                      </a>
                      {/* 2nd dropdown level*/}
                      {b.children && (
                        <ul
                          className="dcui-nav__dropdown dcui-nav__dropdown--nested"
                          role="menu"
                          aria-label={b.linkName}
                          style={STYLES.DROPDOWN_LEVEL2}
                        >
                          {b.children.map((c, _ci) => (
                            <li role="none" className="dcui-nav__dropdown-item">
                              <a
                                id={c.id.toString()}
                                role="menuitem"
                                href={c.linkHref}
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={-1}
                              >
                                {c.linkName}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
