### Features

- uses the compound component design pattern
- uses native html tags for accessibility
- supports striped mode
- supports grouping table headers together
- support full width mode

### Default

```jsx
import React from 'react';
import Table from 'robust-react-ui/components/Table';
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### Full width

```jsx
import Table from 'robust-react-ui/components/Table';
<Table fullWidth>
  <Table.Head>
    <Table.Row>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### Striped

```jsx
import Table from 'robust-react-ui/components/Table';
<Table striped>
  <Table.Head>
    <Table.Row>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### Centered cells

```jsx
import Table from 'robust-react-ui/components/Table';
<Table centerCellContent>
  <Table.Head>
    <Table.Row>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### Row Span

```jsx
import Table from 'robust-react-ui/components/Table';
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
      <Table.Header>Ipsum</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Header scope="row" rowSpan={3}>
        Lorem
      </Table.Header>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Header scope="row" rowSpan={2}>
        Lipsim
      </Table.Header>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
      <Table.Cell>Lorem</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### With Table.Foot

```jsx
import Table from 'robust-react-ui/components/Table';
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Header>Items</Table.Header>
      <Table.Header scope="col">Expenditure</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Header scope="row">Lorem</Table.Header>
      <Table.Cell>23,000</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Header scope="row">Ipsum</Table.Header>
      <Table.Cell>345,000</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Header scope="row">Delore</Table.Header>
      <Table.Cell>45,000</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Foot>
    <Table.Row>
      <Table.Header scope="row">Septum</Table.Header>
      <Table.Cell>413,000</Table.Cell>
    </Table.Row>
  </Table.Foot>
</Table>;
```
