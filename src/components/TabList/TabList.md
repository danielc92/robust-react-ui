### Features

- uses controlled component pattern
- pressing left will move to previous tab
- pressing right arrow will move to next tab
- pressing tab will move focus to content area
- pressing shift + tab will move focus back to tabs, from content area
- supports multiple colour themes

### Primary

```jsx
import React from 'react';
import Typography from 'robust-react-ui/build/components/Typography';
import TabList from 'robust-react-ui/build/components/TabList';
<TabList
  ariaLabel="Four planets"
  variant="primary"
  tabs={[
    {
      tabId: 'pluto-tab',
      buttonLabel: 'Pluto',
      buttonId: 'pluto',
      tabContent: (
        <Typography.Paragraph>
          Ex deserunt irure in et nisi est fugiat et laborum. Amet esse elit
          excepteur Lorem aute magna aliqua fugiat fugiat eu. Est minim labore
          culpa id ut dolor aliquip occaecat in proident mollit labore nulla.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'earth-tab',
      buttonLabel: 'Earth',
      buttonId: 'earth',

      tabContent: (
        <Typography.Paragraph>
          Dolor pariatur id labore pariatur cillum amet officia in fugiat culpa.
          Voluptate aute magna eu voluptate mollit cupidatat aute enim anim
          tempor. Officia amet tempor irure fugiat commodo dolor id.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'venus-tab',
      buttonLabel: 'Venus',
      buttonId: 'venus',
      tabContent: (
        <Typography.Paragraph>
          Ea minim ex officia pariatur reprehenderit culpa officia in cillum
          voluptate labore id dolor. Exercitation irure ipsum aute qui deserunt
          nisi in in ad tempor do in cupidatat. Reprehenderit sint nulla duis
          enim dolor pariatur eiusmod.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'jupiter-tab',
      buttonLabel: 'Jupiter',
      buttonId: 'jupiter',
      tabContent: (
        <Typography.Paragraph>
          Mollit ex nulla incididunt consectetur aliquip aute duis magna do.
          Culpa reprehenderit cupidatat eiusmod dolor anim in qui anim. In do ex
          culpa ipsum Lorem fugiat enim.
        </Typography.Paragraph>
      ),
    },
  ]}
/>;
```

### Success

```jsx
import React from 'react';
import Typography from 'robust-react-ui/build/components/Typography';
import TabList from 'robust-react-ui/build/components/TabList';
<TabList
  ariaLabel="Four planets"
  variant="success"
  tabs={[
    {
      tabId: 'pluto-tab2',
      buttonLabel: 'Pluto',
      buttonId: 'pluto',
      tabContent: (
        <Typography.Paragraph>
          Ex deserunt irure in et nisi est fugiat et laborum. Amet esse elit
          excepteur Lorem aute magna aliqua fugiat fugiat eu. Est minim labore
          culpa id ut dolor aliquip occaecat in proident mollit labore nulla.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'earth-tab2',
      buttonLabel: 'Earth',
      buttonId: 'earth',

      tabContent: (
        <Typography.Paragraph>
          Dolor pariatur id labore pariatur cillum amet officia in fugiat culpa.
          Voluptate aute magna eu voluptate mollit cupidatat aute enim anim
          tempor. Officia amet tempor irure fugiat commodo dolor id.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'venus-tab2',
      buttonLabel: 'Venus',
      buttonId: 'venus',
      tabContent: (
        <Typography.Paragraph>
          Ea minim ex officia pariatur reprehenderit culpa officia in cillum
          voluptate labore id dolor. Exercitation irure ipsum aute qui deserunt
          nisi in in ad tempor do in cupidatat. Reprehenderit sint nulla duis
          enim dolor pariatur eiusmod.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'jupiter-tab2',
      buttonLabel: 'Jupiter',
      buttonId: 'jupiter',
      tabContent: (
        <Typography.Paragraph>
          Mollit ex nulla incididunt consectetur aliquip aute duis magna do.
          Culpa reprehenderit cupidatat eiusmod dolor anim in qui anim. In do ex
          culpa ipsum Lorem fugiat enim.
        </Typography.Paragraph>
      ),
    },
  ]}
/>;
```

### Danger

```jsx
import React from 'react';
import Typography from 'robust-react-ui/build/components/Typography';
import TabList from 'robust-react-ui/build/components/TabList';
<TabList
  ariaLabel="Four planets"
  variant="danger"
  tabs={[
    {
      tabId: 'pluto-tab3',
      buttonLabel: 'Pluto',
      buttonId: 'pluto',
      tabContent: (
        <Typography.Paragraph>
          Ex deserunt irure in et nisi est fugiat et laborum. Amet esse elit
          excepteur Lorem aute magna aliqua fugiat fugiat eu. Est minim labore
          culpa id ut dolor aliquip occaecat in proident mollit labore nulla.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'earth-tab3',
      buttonLabel: 'Earth',
      buttonId: 'earth',

      tabContent: (
        <Typography.Paragraph>
          Dolor pariatur id labore pariatur cillum amet officia in fugiat culpa.
          Voluptate aute magna eu voluptate mollit cupidatat aute enim anim
          tempor. Officia amet tempor irure fugiat commodo dolor id.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'venus-tab3',
      buttonLabel: 'Venus',
      buttonId: 'venus',
      tabContent: (
        <Typography.Paragraph>
          Ea minim ex officia pariatur reprehenderit culpa officia in cillum
          voluptate labore id dolor. Exercitation irure ipsum aute qui deserunt
          nisi in in ad tempor do in cupidatat. Reprehenderit sint nulla duis
          enim dolor pariatur eiusmod.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'jupiter-tab3',
      buttonLabel: 'Jupiter',
      buttonId: 'jupiter',
      tabContent: (
        <Typography.Paragraph>
          Mollit ex nulla incididunt consectetur aliquip aute duis magna do.
          Culpa reprehenderit cupidatat eiusmod dolor anim in qui anim. In do ex
          culpa ipsum Lorem fugiat enim.
        </Typography.Paragraph>
      ),
    },
  ]}
/>;
```

### Secondary

```jsx
import React from 'react';
import Typography from 'robust-react-ui/build/components/Typography';
import TabList from 'robust-react-ui/build/components/TabList';
<TabList
  ariaLabel="Four planets"
  variant="secondary"
  tabs={[
    {
      tabId: 'pluto-tab4',
      buttonLabel: 'Pluto',
      buttonId: 'pluto',
      tabContent: (
        <Typography.Paragraph>
          Ex deserunt irure in et nisi est fugiat et laborum. Amet esse elit
          excepteur Lorem aute magna aliqua fugiat fugiat eu. Est minim labore
          culpa id ut dolor aliquip occaecat in proident mollit labore nulla.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'earth-tab4',
      buttonLabel: 'Earth',
      buttonId: 'earth',

      tabContent: (
        <Typography.Paragraph>
          Dolor pariatur id labore pariatur cillum amet officia in fugiat culpa.
          Voluptate aute magna eu voluptate mollit cupidatat aute enim anim
          tempor. Officia amet tempor irure fugiat commodo dolor id.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'venus-tab4',
      buttonLabel: 'Venus',
      buttonId: 'venus',
      tabContent: (
        <Typography.Paragraph>
          Ea minim ex officia pariatur reprehenderit culpa officia in cillum
          voluptate labore id dolor. Exercitation irure ipsum aute qui deserunt
          nisi in in ad tempor do in cupidatat. Reprehenderit sint nulla duis
          enim dolor pariatur eiusmod.
        </Typography.Paragraph>
      ),
    },
    {
      tabId: 'jupiter-tab4',
      buttonLabel: 'Jupiter',
      buttonId: 'jupiter',
      tabContent: (
        <Typography.Paragraph>
          Mollit ex nulla incididunt consectetur aliquip aute duis magna do.
          Culpa reprehenderit cupidatat eiusmod dolor anim in qui anim. In do ex
          culpa ipsum Lorem fugiat enim.
        </Typography.Paragraph>
      ),
    },
  ]}
/>;
```
