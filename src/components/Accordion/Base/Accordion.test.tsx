// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion Suite', () => {
  const renderComponent = () =>
    render(
      <Accordion activePanel="panel-2" onSelectPanelFunction={() => {}}>
        <Accordion.Panel panelId="panel-1" panelTitle="Animals">
          <h4>lorem ipsum</h4>
          <p>
            Qui est dolor sunt non nisi amet. Cupidatat labore velit ex aliqua
            exercitation Lorem ad labore in labore nostrud. Mollit pariatur
            nulla exercitation laborum mollit veniam non amet laboris fugiat.
          </p>
        </Accordion.Panel>
        <Accordion.Panel panelId="panel-2" panelTitle="Plants">
          <h4>lorem blipsum</h4>
          <p>
            Qui est dolor sunt non nisi amet. Cupidatat labore velit ex aliqua
            exercitation Lorem ad labore in labore nostrud. Mollit pariatur
            nulla exercitation laborum mollit veniam non amet laboris fugiat.
          </p>
        </Accordion.Panel>
      </Accordion>
    );

  it('should render with correct base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Accordion');

    expect(component).toHaveClass('dcui-accordion');
  });
  it('2 panel should render ', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionPanel');

    expect(component.length).toEqual(2);
  });

  it('panel should render as h3', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionPanel');

    expect(component[0].nodeName).toEqual('H3');
  });

  it('first panel should have text', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionPanel');

    expect(component[0]).toHaveTextContent('Animals');
  });

  it('second panel should have text', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionPanel');

    expect(component[1]).toHaveTextContent('Plants');
  });

  it('second panel should have text', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionPanel');
    expect(component[0]);
  });

  it('trigger should be aria-expanded', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionTrigger');

    expect(component[0].getAttribute('aria-expanded')).toEqual('false');
  });
  it('trigger should be aria-expanded', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionTrigger');

    expect(component[1].getAttribute('aria-expanded')).toEqual('true');
  });
  it('trigger should have correct class', () => {
    const { getAllByTestId } = renderComponent();

    const component = getAllByTestId('AccordionTrigger');

    expect(component[0]).toHaveClass('dcui-accordion__trigger');
  });
});
