// Generated with util/create-component.js
import React, { createRef, useEffect, useState } from "react";
import { NavigationBarProps, NavigationData } from "./NavigationBar.types";
import "./NavigationBar.scss";
import classNames from "classnames";

const STYLES = {
  DROPDOWN_LEVEL1: {
    border: "1px solid black",
  },
  DROPDOWN_LEVEL2: {
    border: "1px solid black",
  },
};

const FOCUS_DELAY = 100;
type Dir = "LEFT" | "RIGHT" | "UP" | "DOWN";
interface TransformedNavigationNode {
  menuOpen?: boolean;
  hasMenu: boolean;
  parentId: number | null;
  id: number;
  ref: React.RefObject<any>;
  order: number;
  name: string;
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
      o.name = x.linkName;
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

  const openMenu = (id: number) => {
    setNodes((nodes) =>
      nodes.map((n) => {
        if (n.id === id) {
          return {
            ...n,
            menuOpen: true,
          };
        } else {
          return n;
        }
      })
    );

    // focus on first child
    setTimeout(() => {
      nodes.find((n) => n.parentId === id).ref.current.focus();
    }, FOCUS_DELAY);
  };

  const focusDownNode = (node: NavigationData) => {
    // get nodes at the level
    const filtered = nodes.filter((n) => n.parentId === node.parentId);
    // find the current pos

    const currentNode = filtered.find((n) => n.id === node.id);
    const max = filtered.length - 1;

    // set the next pos and focus
    if (currentNode.order === max) {
      filtered[0].ref.current.focus();
    } else {
      filtered[currentNode.order + 1].ref.current.focus();
    }
  };
  const focusUpNode = (node: NavigationData) => {
    // get nodes at the level
    const filtered = nodes.filter((n) => n.parentId === node.parentId);

    // find the current pos
    const currentNode = filtered.find((n) => n.id === node.id);
    const max = filtered.length - 1;

    // set the next pos and focus

    if (currentNode.order === 0) {
      filtered[max].ref.current.focus();
    } else {
      filtered[currentNode.order - 1].ref.current.focus();
    }
  };

  const handleLeftPress = (node: NavigationData) => {
    // if has children has parent
    // close the current dropdown
    // focus on parent node
    // else navigate to the previous nav item
  };
  const handleRightPress = (node: NavigationData) => {
    // if has children open the menu
    // else navigate to the next nav item
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
          return (
            <li role="none" className="dcui-nav__menu-item">
              <a
                ref={n?.ref}
                onKeyDown={(e) => {
                  e.preventDefault();
                  //left
                  if (e.keyCode === 37) {
                    traverseTopLevelMenu(_ai, "LEFT");
                  }
                  //right
                  if (e.keyCode === 39) {
                    traverseTopLevelMenu(_ai, "RIGHT");
                  }
                  //enter
                  if (e.keyCode === 13) openMenu(a.id);
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
                  className={classNames({
                    "dcui-nav__dropdown": true,
                    "dcui-nav__dropdown--open": nodes.find((n) => n.id === a.id)
                      ?.menuOpen,
                  })}
                  role="menu"
                  aria-label={a.linkName}
                  style={STYLES.DROPDOWN_LEVEL1}
                >
                  {a.children.map((b, _bi) => {
                    const n2 = nodes.find((n) => n.id === b.id);
                    return (
                      <li role="none" className="dcui-nav__dropdown-item">
                        <a
                          ref={n2?.ref}
                          id={b.id.toString()}
                          role="menuitem"
                          href={b.linkHref}
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          onKeyDown={(e) => {
                            e.preventDefault();
                            // up
                            if (e.keyCode === 38) {
                              focusUpNode(b);
                            }
                            // down
                            if (e.keyCode === 40) {
                              focusDownNode(b);
                            }
                          }}
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
                              <li
                                role="none"
                                className="dcui-nav__dropdown-item"
                              >
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
                    );
                  })}
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
