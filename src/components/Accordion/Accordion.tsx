// Generated with util/create-component.js

import React, { createRef, useEffect, useState } from "react";
import { AccordionProps, AccordionPanelProps } from "./Accordion.types";
import "./Accordion.scss";
import classNames from "classnames";

const Accordion = ({
  children,
  fullWidth,
  activePanel,
  onSelectPanelFunction,
}: AccordionProps) => {
  const [refs, setRefs] = useState<
    { panelId: string; idx: number; ref: any }[]
  >([]);

  const _handleFocusPrevious = (_index: number) => {
    const max = refs.length - 1;
    const newIndex = _index === 0 ? max : _index - 1;
    refs[newIndex]?.ref?.current?.focus();
  };
  const _handleFocusNext = (_index: number) => {
    const max = refs.length - 1;
    const newIndex = _index === max ? 0 : _index + 1;
    refs[newIndex]?.ref?.current?.focus();
  };
  const _handleFocusFirst = () => {
    if (refs.length) refs[0]?.ref?.current?.focus();
  };
  const _handleFocusLast = () => {
    if (refs.length) refs[refs.length - 1]?.ref?.current?.focus();
  };

  useEffect(() => {
    if (React.Children.count(children)) {
      setRefs(
        React.Children.map(children, (child, index) => {
          if (React.isValidElement<AccordionPanelProps>(child)) {
            return {
              panelId: child.props.panelId,
              idx: index,
              ref: createRef(),
            };
          }
        })
      );
    }
  }, []);

  return (
    <div
      data-testid="Accordion"
      id="accordionGroup"
      className={classNames({
        "dcui-accordion": true,
        "dcui-accordion--full-width": fullWidth,
      })}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child as React.ReactElement<any>, {
          activePanel,
          _onSelectPanelFunction: onSelectPanelFunction,
          _handleFocusPrevious,
          _handleFocusNext,
          _handleFocusFirst,
          _handleFocusLast,
          _index: i,
          ref: refs.length ? refs[i].ref : null,
        })
      )}
    </div>
  );
};

const AccordionPanel = React.forwardRef<HTMLButtonElement, AccordionPanelProps>(
  (
    {
      children,
      panelTitle,
      panelId,
      activePanel,
      _onSelectPanelFunction,
      _handleFocusPrevious,
      _handleFocusNext,
      _handleFocusFirst,
      _handleFocusLast,
      _index,
    },
    ref
  ) => {
    const sectionId = panelId + "_section";
    const isCurrent = activePanel === panelId;
    const handleSelectPanel = () => {
      _onSelectPanelFunction(panelId);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      // 38 up
      if (_handleFocusPrevious && event.keyCode === 38) {
        _handleFocusPrevious(_index);
        event.preventDefault();
      }
      // 40 down
      if (_handleFocusNext && event.keyCode === 40) {
        _handleFocusNext(_index);
        event.preventDefault();
      }

      // 13 enter
      if (event.keyCode === 13) {
        handleSelectPanel();
      }

      // home
      if (event.keyCode === 36) {
        event.preventDefault();
        _handleFocusFirst();
      }
      // end
      if (event.keyCode === 35) {
        event.preventDefault();
        _handleFocusLast();
      }
    };
    return (
      <>
        <h3 data-testid="AccordionPanel">
          <button
            data-testid="AccordionTrigger"
            aria-disabled={isCurrent}
            onClick={handleSelectPanel}
            onKeyDown={handleKeyDown}
            ref={ref}
            aria-expanded={isCurrent ? "true" : "false"}
            className="dcui-accordion__trigger"
            aria-controls={sectionId}
            id={panelId}
          >
            <span className="dcui-accordion__title">
              {panelTitle}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={classNames({
                  "dcui-accordion__icon": true,
                  "dcui-accordion__icon--expanded": isCurrent,
                })}
              >
                {isCurrent ? (
                  <>
                    {/* minus */}
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </>
                ) : (
                  <>
                    {/* plus */}
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </>
                )}
              </svg>
            </span>
          </button>
        </h3>

        <div
          id={sectionId}
          role="region"
          aria-labelledby={panelId}
          className="dcui-accordion__panel"
          hidden={!isCurrent}
        >
          <div>{children}</div>
        </div>
      </>
    );
  }
);

AccordionPanel.displayName = "AccordionPanel";

Accordion.Panel = AccordionPanel;

export default Accordion;
