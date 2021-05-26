// Generated with util/create-component.js
import React from "react";
import Accordion from "./Accordion";
export default {
  title: "Accordion",
};
const { Panel } = Accordion;
export const Basic = () => (
  <Accordion
    activePanel="1"
    onSelectPanelFunction={() => alert("selecting panel function triggered")}
  >
    <Panel panelId="1" panelTitle="Lorem Ipsum">
      <p className="dcui-para">
        is ex in dolor magna aliqua ex. Consectetur cupidatat ea nostrud
        consequat officia ut ipsum sit proident dolor ipsum aliquipem
        adipisicing. Mollit et occaecat dolor proident fugiat pariatur officia
        irure.
      </p>
    </Panel>
    <Panel panelId="2" panelTitle="Lorem Ipsum">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiat velit adipisicing duis ex in dolor magna aliqua ex. Consectetur
        cupidatat ea nostrud consequat officia ut ipsum sit proident dolor ipsum
        aliquipem adipisicing. Mollit et occaecat dolor proident fugiat pariatur
        officia irure.
      </p>
    </Panel>
    <Panel panelId="3" panelTitle="Strud consequat offici">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiat velit adipisicing duis ex in dolor magna aliq ua ex. Consectetur
        cupidatat ea nostrud consequat officia ut ipsum sit proident dolor ipsum
        aliquipem adipisicing. Mollit et occaecat dolor proident fugiat pariatur
        officia irure.
      </p>
    </Panel>
    <Panel panelId="4" panelTitle="Grud consequat offi">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiident dolor ipsum aliquipem adipisicing. Mollit et occaecat dolor
        proident fugiat pariatur officia irure.
      </p>
    </Panel>
  </Accordion>
);
export const FullWidth = () => (
  <Accordion
    activePanel="1"
    fullWidth
    onSelectPanelFunction={() => alert("selecting panel function triggered")}
  >
    <Panel panelId="1" panelTitle="Lorem Ipsum">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiat velit adolor magna aliqua ex. Consectetur cupidatat ea nostrud
        consequat officia ut ipsum sit proident dolor ipsum aliquipem
        adipisicing. Mollit et occaecat dolor proident fugiat pariatur officia
        irure.
      </p>
    </Panel>
    <Panel panelId="2" panelTitle="Lorem Ipsum">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiat velit ia ut ipsum sit proident dolor ipsum aliquipem adipisicing.
        Mollit et occaecat dolor proident fugiat pariatur officia irure.
      </p>
    </Panel>
    <Panel panelId="3" panelTitle="Strud consequat offici">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiat velit adipisicing duis ex in dolor magna aliq ua ex. Consectetur
        cup
      </p>
    </Panel>
    <Panel panelId="4" panelTitle="Grud consequat offi">
      <p className="dcui-para">
        Id ullamco commodo sunt velit in ea consequat ut aliquip consequat. Elit
        fugiat velit officia ut ipsum sit proident dolor ipsum aliquipem
        adipisicing. Mollit et occaecat dolor proident fugiat pariatur officia
        irure.
      </p>
    </Panel>
  </Accordion>
);
