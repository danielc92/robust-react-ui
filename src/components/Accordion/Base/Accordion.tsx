// Generated with util/create-component.js

import React, { createRef, useEffect, useState } from "react";
import { AccordionProps, AccordionPanelProps } from "./Accordion.types";
import "./Accordion.scss";
import classNames from "classnames";
import Panel from "../Panel";

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

Accordion.Panel = Panel;

export default Accordion;
