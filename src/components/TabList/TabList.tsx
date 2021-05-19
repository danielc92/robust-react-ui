// Generated with util/create-component.js
// Component design from https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
import React, { createRef, useEffect, useState } from "react";

import { TabListProps } from "./TabList.types";

import "./TabList.scss";
import classNames from "classnames";
import { KEY_CODES } from "../../constants";

const TabList = ({ ariaLabel, tabs, fullWidth }: TabListProps) => {
  const [activeTab, setActiveTab] =
    useState<{
      tabName: string;
      tabIndex: number;
    } | null>(null);

  const arrLength = tabs.length;

  const [tabRefs, setTabRefs] = React.useState([]);
  const [tabPanelRefs, setTabPanelRefs] = React.useState([]);

  useEffect(() => {
    if (tabs.length > 0)
      setActiveTab({
        tabIndex: 0,
        tabName: tabs[0].tabId,
      });

    setTabRefs((tabRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => tabRefs[i] || createRef())
    );

    setTabPanelRefs((tabPanelRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => tabPanelRefs[i] || createRef())
    );
  }, [arrLength]);

  const selectFirstTab = () => {
    setActiveTab({
      tabIndex: 0,
      tabName: tabs[0].tabId,
    });
    tabRefs[0].current.focus();
  };
  const selectLastTab = () => {
    const lastIndex = tabs.length - 1;
    setActiveTab({
      tabIndex: lastIndex,
      tabName: tabs[lastIndex].tabId,
    });
    tabRefs[lastIndex].current.focus();
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
      tabRefs[nextIndex].current.focus();
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
      tabRefs[nextIndex].current.focus();
    }
  };

  const focusTabPanel = (index: number) => {
    tabPanelRefs[index].current.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    const keyName = KEY_CODES[event.keyCode];

    if (keyName === "right arrow") selectNextTab();

    if (keyName === "left arrow") selectPreviousTab();

    if (keyName === "home") selectFirstTab();

    if (keyName === "end") selectLastTab();

    if (keyName === "tab") focusTabPanel(index);
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
        aria-label={ariaLabel || null}
        className={classNames({ "dcui-tablist__button-group": true })}
      >
        {tabs.map((t, index) => (
          <button
            data-testid="TabListButton"
            tabIndex={activeTab?.tabName !== t.tabId ? -1 : null}
            ref={tabRefs[index]}
            key={t.tabId}
            onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) =>
              handleKeyDown(event, index)
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
            aria-controls={t.tabId}
            id={t.buttonId}
          >
            {t.buttonLabel}
          </button>
        ))}
      </div>
      {tabs.map((x, i) => (
        <div
          data-testid="TabListPanel"
          ref={tabPanelRefs[i]}
          key={x.tabId}
          className={classNames({
            "dcui-tablist__panel": true,
            "dcui-tablist__panel--hidden": x.tabId !== activeTab?.tabName,
          })}
          tabIndex={0}
          role="tabpanel"
          id={x.tabId}
          aria-labelledby={x.tabId}
        >
          {x.tabContent}
        </div>
      ))}
    </div>
  );
};

export default TabList;
