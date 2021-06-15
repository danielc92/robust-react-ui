### Default

```jsx
import React from 'react';
import Accordion from 'components/Accordion';
import Typography from 'components/Typography';
const { Panel } = Accordion;
const [activePanel, setActivePanel] = React.useState('1');
const onSelectPanelFunction = (panelId) => setActivePanel(panelId);

<Accordion
  activePanel={activePanel}
  onSelectPanelFunction={onSelectPanelFunction}
>
  <Panel panelId="1" panelTitle="Lorem Ipsum">
    <Typography.Paragraph>
      is ex in dolor magna aliqua ex. Consectetur cupidatat ea nostrud consequat
      officia ut ipsum sit proident dolor ipsum aliquipem adipisicing. Mollin
      dolor magna aliqua ex. Consectetur cupidatat ea nostrud consequat officia
      ut ipsum sit proident dolor ipsum aliquipem adipisicing. Mollin dolor
      magna aliqua ex. Consectetur cupidatat ea nostrud consequat officia ut
      ipsum sit proident dolor ipsum aliquipem adipisicing. Mollin dolor magna
      aliqua ex. Consectetur cupidatat ea nostrud consequat officia ut ipsum sit
      proident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
      proident fugiat pariatur officia irure.
    </Typography.Paragraph>
  </Panel>
  <Panel panelId="2" panelTitle="Lorem Ipsum">
    <Typography.Paragraph>
      Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
      fugiat velit adipisicing duis ex in dolor magna aliqua ex. Consectetur
      cupidatat ea nostrud consequat officia ut ipsum sit proident dolor ipsum
      aliquipem adipisicing. Mollit et occaecat dolor proident fugiat pariatur
      officia irure.
    </Typography.Paragraph>
  </Panel>
  <Panel panelId="3" panelTitle="Strud consequat offici">
    <Typography.Paragraph>
      Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
      fugiat velit adipisicing duis ex in dolor magna aliq ua ex. Consectetur
      cupidatat ea nostrud consequat officia ut ipsum sit proident dolor ipsum
      aliquipem adipisicing. Mollit et occaecat dolor proident fugiat pariatur
      officia irure.
    </Typography.Paragraph>
  </Panel>
  <Panel panelId="4" panelTitle="Grud consequat offi">
    <Typography.Paragraph>
      Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
      fugiident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
      proident fugiat pariatur officia irure.
    </Typography.Paragraph>
  </Panel>
</Accordion>;
```

### Full Width

```jsx
import React from 'react';
import Accordion from 'components/Accordion';
import Typography from 'components/Typography';
const { Panel } = Accordion;
const [activePanel, setActivePanel] = React.useState('1');
const onSelectPanelFunction = (panelId) => setActivePanel(panelId);

<Accordion
  fullWidth
  activePanel={activePanel}
  onSelectPanelFunction={onSelectPanelFunction}
>
  <Panel panelId="1" panelTitle="Lorem Ipsum">
    <Typography.Paragraph>
      is ex in dolor magna aliqua ex. Consectetur cupidatat ea nostrud consequat
      officia ut ipsum sit proident dolor ipsum aliquipem adipisicing. Mollin
      dolor magna aliqua ex. Consectetur cupidatat ea nostrud consequat officia
      ut ipsum sit proident dolor ipsum aliquipem adipisicing. Mollin dolor
      magna aliqua ex. Consectetur cupidatat ea nostrud consequat officia ut
      ipsum sit proident dolor ipsum aliquipem adipisicing. Mollin dolor magna
      aliqua ex. Consectetur cupidatat ea nostrud consequat officia ut ipsum sit
      proident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
      proident fugiat pariatur officia irure.
    </Typography.Paragraph>
  </Panel>
  <Panel panelId="2" panelTitle="Lorem Ipsum">
    <Typography.Paragraph>
      Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
      fugiat velit adipisicing duis ex in dolor magna aliqua ex. Consectetur
      cupidatat ea nostrud consequat officia ut ipsum sit proident dolor ipsum
      aliquipem adipisicing. Mollit et occaecat dolor proident fugiat pariatur
      officia irure.
    </Typography.Paragraph>
  </Panel>
  <Panel panelId="3" panelTitle="Strud consequat offici">
    <Typography.Paragraph>
      Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
      fugiat velit adipisicing duis ex in dolor magna aliq ua ex. Consectetur
      cupidatat ea nostrud consequat officia ut ipsum sit proident dolor ipsum
      aliquipem adipisicing. Mollit et occaecat dolor proident fugiat pariatur
      officia irure.
    </Typography.Paragraph>
  </Panel>
  <Panel panelId="4" panelTitle="Grud consequat offi">
    <Typography.Paragraph>
      Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
      fugiident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
      proident fugiat pariatur officia irure.
    </Typography.Paragraph>
  </Panel>
</Accordion>;
```
