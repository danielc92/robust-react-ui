// Generated with util/create-component.js
import React, { createRef, useEffect, useState } from 'react';
import { NavigationBarProps, NavigationData } from './NavigationBar.types';
import './NavigationBar.scss';
import getClassNames from 'utils/getClassNames';

const FOCUS_DELAY = 120;
type Dir = 'LEFT' | 'RIGHT' | 'UP' | 'DOWN';
interface TransformedNavigationNode {
  menuOpen?: boolean;
  hasMenu: boolean;
  parentId: number | null;
  id: number;
  ref: React.RefObject<any>;
  order: number;
  name: string;
  menuId?: number;
  lv: number;
}
const NavigationBar = ({
  data,
  onEnterLinkFunction,
  ariaLabel,
  id,
}: NavigationBarProps) => {
  const [nodes, setNodes] = useState<TransformedNavigationNode[]>([]);
  const [closeAll, setCloseAll] = useState(false);
  useEffect(() => {
    const nodes = [];

    const getNode = (x: NavigationData, i: number) => {
      const o: Partial<TransformedNavigationNode> = {};
      if (x.children && x.children.length && x.children.length > 0) {
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
      const node = { ...getNode(x, i), lv: 1 };
      nodes.push(node);
      x.children?.forEach((x2, i2) => {
        const node = { ...getNode(x2, i2), menuId: x.id, lv: 2 };
        nodes.push(node);
        x2.children?.forEach((x3, i3) => {
          const node = { ...getNode(x3, i3), menuId: x.id, lv: 3 };
          nodes.push(node);
        });
      });
    });

    setNodes(nodes);
  }, []);

  const closeAllMenuButOne = (id: number) => {
    setNodes((nodes) =>
      nodes.map((n) => {
        if (n.id === id) {
          return { ...n, menuOpen: true };
        }
        return { ...n, menuOpen: false };
      })
    );
  };

  const traverseTopLevelMenu = (menuId, dir: Dir) => {
    const menuNodes = nodes.filter((x) => x.parentId === null);
    const max = menuNodes.length - 1;
    const ord = menuNodes.find((x) => x.id === menuId).order;
    const next = ord === max ? 0 : ord + 1;
    const prev = ord === 0 ? max : ord - 1;

    if (dir === 'LEFT') {
      const m = menuNodes.find((x) => x.order === prev);
      m.ref.current.focus();
      if (closeAll) closeAllMenuButOne(m.id);
    }

    if (dir === 'RIGHT') {
      const m = menuNodes.find((x) => x.order === next);
      m.ref.current.focus();
      if (closeAll) closeAllMenuButOne(m.id);
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
        }
        return n;
      })
    );

    // focus on first child
    setTimeout(() => {
      const exists = nodes.find((n) => n.parentId === id);
      exists?.ref?.current?.focus();
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
    // if has children has parent close the current dropdown
    // focus on parent node
    const foundNode = nodes.find((n) => n.id === node.id);

    if (foundNode.lv > 2) {
      setNodes((nodes) =>
        nodes.map((n) => {
          if (n.id === node.parentId) {
            return { ...n, menuOpen: false };
          }
          return n;
        })
      );

      setTimeout(() => {
        nodes.find((n) => n.id === node.parentId)?.ref?.current?.focus();
      }, FOCUS_DELAY);
    } else {
      // else navigate to the previous TOPLEVEL nav item

      if (!closeAll) setCloseAll(true);
      traverseTopLevelMenu(foundNode.menuId, 'LEFT');
    }
  };
  const handleRightPress = (node: NavigationData) => {
    // if has children open the menu
    const foundNode = nodes.find((n) => n.id === node.id);
    if (foundNode.hasMenu) {
      // open menu
      openMenu(node.id);
      //  focus on the first

      setTimeout(() => {
        nodes.find((n) => n.parentId === node.id)?.ref?.current?.focus();
      }, FOCUS_DELAY);
    } else {
      // else navigate to the next TOPLEVEL nav item
      if (!closeAll) setCloseAll(true);
      traverseTopLevelMenu(foundNode.menuId, 'RIGHT');
    }
  };

  const handleLinkDefaultAction = (href: string) => {
    if (onEnterLinkFunction) {
      onEnterLinkFunction(href);
      return;
    }
    if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  const closeAllAndFocusTopMenu = (node: NavigationData) => {
    // node.parentId

    setNodes((nodes) => nodes.map((x) => ({ ...x, menuOpen: false })));

    nodes.find((n) => n.id === node.parentId).ref.current.focus();
  };
  const handleBlur = () => {
    setNodes(nodes.map((x) => ({ ...x, menuOpen: false })));
  };

  return (
    <nav
      className="dcui-nav"
      data-testid="NavigationBar"
      aria-label={ariaLabel}
    >
      {/* Root nav bar */}
      <ul id={id || null} role="menubar" aria-label={ariaLabel}>
        {data.map((a, _ai) => {
          const n = nodes.find((n) => n.id === a.id);
          return (
            <li
              role="none"
              className={getClassNames({
                'dcui-nav__menu-item': true,
                'dcui-nav__menu-item--expanded': n?.menuOpen,
                'dcui-nav__menu-item--has-menu': n?.hasMenu,
              })}
              key={`menuitem${_ai}`}
            >
              <a
                ref={n?.ref}
                onKeyDown={(e) => {
                  // left
                  if (e.keyCode === 37) {
                    traverseTopLevelMenu(a.id, 'LEFT');
                  }
                  // right
                  if (e.keyCode === 39) {
                    traverseTopLevelMenu(a.id, 'RIGHT');
                  }
                  // enter
                  if (e.keyCode === 13) {
                    if (n.hasMenu) {
                      openMenu(a.id);
                    } else {
                      handleLinkDefaultAction(a.linkHref);
                    }
                  }
                }}
                role="menuitem"
                aria-haspopup={n?.hasMenu ? 'true' : 'false'}
                aria-expanded={
                  !n?.hasMenu ? null : n?.menuOpen ? 'true' : 'false'
                }
                href={a.linkHref ? a.linkHref : '#'}
                tabIndex={0}
              >
                {a.linkName}
                {n?.hasMenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={getClassNames({
                      'dcui-nav__chevron': true,
                    })}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </a>
              {/* 1st dropdown level */}
              {a.children && (
                <ul
                  className={getClassNames({
                    'dcui-nav__dropdown': true,
                    'dcui-nav__dropdown--open': nodes.find((n) => n.id === a.id)
                      ?.menuOpen,
                  })}
                  role="menu"
                  aria-label={a.linkName}
                >
                  {a.children.map((b, _bi) => {
                    const n2 = nodes.find((n) => n.id === b.id);
                    return (
                      <React.Fragment key={`dropitem${_bi}`}>
                        <li
                          role="none"
                          className={getClassNames({
                            'dcui-nav__dropdown-item': true,
                            'dcui-nav__dropdown-item--expanded': n2?.menuOpen,
                          })}
                        >
                          <a
                            ref={n2?.ref}
                            id={b.id.toString()}
                            role="menuitem"
                            href={b.linkHref ? b.linkHref : '#'}
                            aria-haspopup={n2?.hasMenu ? 'true' : 'false'}
                            aria-expanded={
                              !n2?.hasMenu
                                ? null
                                : n2?.menuOpen
                                ? 'true'
                                : 'false'
                            }
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

                              // right
                              if (e.keyCode === 39) {
                                handleRightPress(b);
                              }

                              // left
                              if (e.keyCode === 37) {
                                handleLeftPress(b);
                              }

                              // escape

                              if (e.keyCode === 27) {
                                closeAllAndFocusTopMenu(b);
                              }

                              // enter
                              if (e.keyCode === 13) {
                                if (n2.hasMenu) {
                                  handleRightPress(b);
                                } else {
                                  handleLinkDefaultAction(b.linkHref);
                                }
                              }
                            }}
                          >
                            {b.linkName}
                            {n2?.hasMenu && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={getClassNames({
                                  'dcui-nav__chevron': true,
                                  'dcui-nav__chevron--submenu': true,
                                  'dcui-nav__chevron--expanded': n2?.menuOpen,
                                })}
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            )}
                          </a>
                          {/* 2nd dropdown level */}
                          {b.children && (
                            <ul
                              className={getClassNames({
                                'dcui-nav__dropdown': true,
                                'dcui-nav__dropdown--nested': true,
                                'dcui-nav__dropdown--open': nodes.find(
                                  (n) => n.id === b.id
                                )?.menuOpen,
                              })}
                              role="menu"
                              aria-label={b.linkName}
                            >
                              {b.children.map((c, _ci) => {
                                const n3 = nodes.find((n) => n.id === c.id);
                                return (
                                  <React.Fragment key={`dropitem2nd${_ci}`}>
                                    <li
                                      role="none"
                                      className="dcui-nav__dropdown-item"
                                    >
                                      <a
                                        onKeyDown={(e) => {
                                          e.preventDefault();
                                          // up
                                          if (e.keyCode === 38) {
                                            focusUpNode(c);
                                          }
                                          // down
                                          if (e.keyCode === 40) {
                                            focusDownNode(c);
                                          }

                                          // right
                                          if (e.keyCode === 39) {
                                            handleRightPress(c);
                                          }

                                          // left or escape
                                          if (
                                            e.keyCode === 37 ||
                                            e.keyCode === 27
                                          ) {
                                            handleLeftPress(c);
                                          }

                                          // enter
                                          if (e.keyCode === 13) {
                                            if (n3.hasMenu) {
                                              handleRightPress(c);
                                            } else {
                                              handleLinkDefaultAction(
                                                c.linkHref
                                              );
                                            }
                                          }
                                        }}
                                        ref={n3?.ref}
                                        id={c.id.toString()}
                                        role="menuitem"
                                        href={c.linkHref ? c.linkHref : '#'}
                                        aria-haspopup="false"
                                        aria-expanded={null}
                                        tabIndex={-1}
                                      >
                                        {c.linkName}
                                      </a>
                                    </li>

                                    {c.hasSeparator && (
                                      <li
                                        role="separator"
                                        className="dcui-nav__separator"
                                      />
                                    )}
                                  </React.Fragment>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                        {b.hasSeparator && (
                          <li
                            role="separator"
                            className="dcui-nav__separator"
                          />
                        )}
                      </React.Fragment>
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
