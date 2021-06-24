// Generated with util/create-component.js
// Component design from https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
import React, { createRef, useEffect, useState } from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { ITabListProps } from './TabList.types';
import './TabList.scss';

const TabList = ({
  ariaLabel,
  tabs,
  fullWidth = false,
  variant = 'primary',
}: ITabListProps) => {
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

    setTabRefs(
      Array(arrLength)
        .fill(null)
        .map((_, i) => tabRefs[i] || createRef())
    );

    setTabPanelRefs(
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const { keyCode } = event;
    switch (keyCode) {
      case 39:
        event.preventDefault();
        selectNextTab();
        break;

      case 37:
        event.preventDefault();
        selectPreviousTab();
        break;
      case 36:
        event.preventDefault();
        selectFirstTab();
        break;
      case 35:
        event.preventDefault();
        selectLastTab();
        break;
      case 40:
      case 38:
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <div
      data-testid="TabList"
      className={getClassNames({
        'rrui-tablist': true,
        'rrui-tablist--full-width': fullWidth,
        [`rrui-tablist--${variant}`]: true,
      })}
    >
      <div
        role="tablist"
        aria-label={ariaLabel || null}
        className={getClassNames({ 'rrui-tablist__button-group': true })}
      >
        {tabs.map((t, index) => (
          <button
            type="button"
            data-testid="TabListButton"
            tabIndex={activeTab?.tabName !== t.tabId ? -1 : null}
            ref={tabRefs[index]}
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
            className={getClassNames({
              'rrui-tablist__button': true,
              'rrui-tablist__button--active': activeTab?.tabName === t.tabId,
            })}
            role="tab"
            aria-selected={activeTab?.tabName === t.tabId ? 'true' : 'false'}
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
          className={getClassNames({
            'rrui-tablist__panel': true,
            'rrui-tablist__panel--hidden': x.tabId !== activeTab?.tabName,
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
