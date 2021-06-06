// Generated with util/create-component.js
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

const { Panel } = Accordion;
export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {},
} as Meta<AccordionProps>;

const Template: Story<AccordionProps> = (args) => {
  const [panel, setPanel] = useState('1');
  const onSelectPanelFunction = (panelId: string) => setPanel(panelId);
  return (
    <Accordion
      {...args}
      activePanel={panel}
      onSelectPanelFunction={onSelectPanelFunction}
    >
      <Panel panelId="1" panelTitle="Lorem Ipsum">
        <p className="dcui-para dcui-para--medium">
          is ex in dolor magna aliqua ex. Consectetur cupidatat ea nostrud
          consequat officia ut ipsum sit proident dolor ipsum aliquipem
          adipisicing. Mollin dolor magna aliqua ex. Consectetur cupidatat ea
          nostrud consequat officia ut ipsum sit proident dolor ipsum aliquipem
          adipisicing. Mollin dolor magna aliqua ex. Consectetur cupidatat ea
          nostrud consequat officia ut ipsum sit proident dolor ipsum aliquipem
          adipisicing. Mollin dolor magna aliqua ex. Consectetur cupidatat ea
          nostrud consequat officia ut ipsum sit proident dolor ipsum aliquipem
          adipisicing. Mollit et occaecat dolor proident fugiat pariatur officia
          irure.
        </p>
      </Panel>
      <Panel panelId="2" panelTitle="Lorem Ipsum">
        <p className="dcui-para dcui-para--medium">
          Id ullamco commodo sunt velit in ea consequat ut aliquip consequat.
          Elit fugiat velit adipisicing duis ex in dolor magna aliqua ex.
          Consectetur cupidatat ea nostrud consequat officia ut ipsum sit
          proident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
          proident fugiat pariatur officia irure.
        </p>
      </Panel>
      <Panel panelId="3" panelTitle="Strud consequat offici">
        <p className="dcui-para dcui-para--medium">
          Id ullamco commodo sunt velit in ea consequat ut aliquip consequat.
          Elit fugiat velit adipisicing duis ex in dolor magna aliq ua ex.
          Consectetur cupidatat ea nostrud consequat officia ut ipsum sit
          proident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
          proident fugiat pariatur officia irure.
        </p>
      </Panel>
      <Panel panelId="4" panelTitle="Grud consequat offi">
        <p className="dcui-para dcui-para--medium">
          Id ullamco commodo sunt velit in ea consequat ut aliquip consequat.
          Elit fugiident dolor ipsum aliquipem adipisicing. Mollit et occaecat
          dolor proident fugiat pariatur officia irure.
        </p>
      </Panel>
    </Accordion>
  );
};

export const Basic: Story<AccordionProps> = Template.bind({});
Basic.args = {};
export const FullWidth: Story<AccordionProps> = Template.bind({});
FullWidth.args = { fullWidth: true };
