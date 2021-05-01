// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import { TabListProps } from "./TabList.types";

import "./TabList.scss";
import classNames from "classnames";
import { KEY_CODES, KEY_CODES_TRANS } from "../../constants";

const TabList = ({ ariaLabel, tabs, fullWidth }: TabListProps) => {
  const [activeTab, setActiveTab] = useState<{
    tabName: string;
    tabIndex: number;
  } | null>(null);

  useEffect(() => {
    if (tabs.length > 0)
      setActiveTab({
        tabIndex: 0,
        tabName: tabs[0].tabId,
      });
  }, [tabs]);

  const selectFirstTab = () => {
    setActiveTab({
      tabIndex: 0,
      tabName: tabs[0].tabId,
    });
  };
  const selectLastTab = () => {
    const lastIndex = tabs.length - 1;
    setActiveTab({
      tabIndex: lastIndex,
      tabName: tabs[lastIndex].tabId,
    });
  };

  const selectNextTab = () => {
    if (activeTab.tabIndex === tabs.length - 1) {
      selectFirstTab();
    } else {
      const nextIndex = activeTab.tabIndex + 1;
      setActiveTab({
        tabIndex: nextIndex,
        tabName: tabs[nextIndex].tabId,
      });
    }
  };
  const selectPreviousTab = () => {
    if (activeTab.tabIndex === 0) {
      selectLastTab();
    } else {
      const nextIndex = activeTab.tabIndex - 1;
      setActiveTab({
        tabIndex: nextIndex,
        tabName: tabs[nextIndex].tabId,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event.keyCode);
    const _keyName = KEY_CODES[event.keyCode];
    console.log(_keyName);

    if (_keyName === "right arrow") selectNextTab();

    if (_keyName === "left arrow") selectPreviousTab();
  };

  return (
    <div
      data-testid="TabList"
      className={classNames({
        "dcui-tablist": true,
        "dcui-tablist--full-width": fullWidth,
      })}
    >
      <div
        role="tablist"
        aria-label={ariaLabel ? ariaLabel : null}
        className={classNames({ "dcui-tablist__button-group": true })}
      >
        {tabs.map((t, index) => (
          <button
            key={t.tabId}
            onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) =>
              handleKeyDown(event)
            }
            onClick={() =>
              setActiveTab({
                tabIndex: index,
                tabName: t.tabId,
              })
            }
            className={classNames({
              "dcui-tablist__button": true,
              "dcui-tablist__button--active": activeTab?.tabName === t.tabId,
            })}
            role="tab"
            aria-selected={activeTab?.tabName === t.tabId ? "true" : "false"}
            aria-controls={t.ariaControlsId}
            id={t.tabId}
          >
            {t.buttonLabel}
          </button>
        ))}
      </div>
      {tabs.map((x) => (
        <div
          key={x.tabId}
          className={classNames({
            "dcui-tablist__panel": true,
            "dcui-tablist__panel--hidden": x.tabId !== activeTab?.tabName,
          })}
          tabIndex={0}
          role="tabpanel"
          id={x.ariaControlsId}
          aria-labelledby={x.tabId}
        >
          {x.tabContent}
        </div>
      ))}
    </div>
  );
};

export default TabList;
