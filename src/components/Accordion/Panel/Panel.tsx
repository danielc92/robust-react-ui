// Generated with util/create-component.js

import React from 'react';
import { AccordionPanelProps } from './Panel.types';
import './Panel.scss';
import getClassNames from 'utils/getClassNames';

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
    const sectionId = `${panelId}_section`;
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
            aria-expanded={isCurrent ? 'true' : 'false'}
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
                className={getClassNames({
                  'dcui-accordion__icon': true,
                  'dcui-accordion__icon--expanded': isCurrent,
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

AccordionPanel.displayName = 'AccordionPanel';
export default AccordionPanel;
