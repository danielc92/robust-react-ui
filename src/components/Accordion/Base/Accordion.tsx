// Generated with util/create-component.js

import React, { createRef, useEffect, useState } from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import Panel from 'robust-react-ui/components/Accordion/Panel';
import { IAccordionProps } from './Accordion.types';
import './Accordion.scss';
import { IAccordionPanelProps } from '../Panel/Panel.types';

const Accordion = ({
  children,
  fullWidth,
  activePanel,
  onSelectPanelFunction,
}: IAccordionProps) => {
  const [refs, setRefs] = useState<
    { panelId: string; idx: number; ref: any }[]
  >([]);

  const handleFocusPrevious = (_index: number) => {
    const max = refs.length - 1;
    const newIndex = _index === 0 ? max : _index - 1;
    refs[newIndex]?.ref?.current?.focus();
  };
  const handleFocusNext = (_index: number) => {
    const max = refs.length - 1;
    const newIndex = _index === max ? 0 : _index + 1;
    refs[newIndex]?.ref?.current?.focus();
  };
  const handleFocusFirst = () => {
    if (refs.length) refs[0]?.ref?.current?.focus();
  };
  const handleFocusLast = () => {
    if (refs.length) refs[refs.length - 1]?.ref?.current?.focus();
  };

  useEffect(() => {
    if (React.Children.count(children)) {
      setRefs(
        React.Children.map(children, (child, index) => {
          if (React.isValidElement<IAccordionPanelProps>(child)) {
            return {
              panelId: child.props.panelId,
              idx: index,
              ref: createRef(),
            };
          }
          return null;
        })
      );
    }
  }, []);

  return (
    <div
      data-testid="Accordion"
      id="accordionGroup"
      className={getClassNames({
        'rrui-accordion': true,
        'rrui-accordion--full-width': fullWidth,
      })}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          activePanel,
          onSelectPanelFunction,
          handleFocusPrevious,
          handleFocusNext,
          handleFocusFirst,
          handleFocusLast,
          index,
          ref: refs.length ? refs[index].ref : null,
        })
      )}
    </div>
  );
};

Accordion.Panel = Panel;

export default Accordion;
