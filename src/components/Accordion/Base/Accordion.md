### Default 
```jsx
initialState = {
    activePanel: '1'
};
const onSelectPanelFunction = (panelId) => setState({ activePanel: panelId});
;<Accordion
      activePanel={state.activePanel}
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

```


### Full Width 
```jsx
initialState = {
    activePanel: '1'
};
const onSelectPanelFunction = (panelId) => setState({ activePanel: panelId});
;<Accordion
fullWidth
      activePanel={state.activePanel}
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

```