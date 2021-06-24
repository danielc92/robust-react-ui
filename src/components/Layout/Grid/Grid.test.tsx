// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Grid from './Grid';
import { IGridProps } from './Grid.types';

describe('Test Component', () => {
  let props: Partial<IGridProps>;

  beforeEach(() => {
    props = {
      gap: 'm',
    };
  });

  const renderComponent = () =>
    render(
      <Grid {...props}>
        <Grid.GridItem>
          <p>Cillum cillum excepteur</p>
        </Grid.GridItem>
        <Grid.GridItem>
          <p>Cillum cillum excepteur</p>
        </Grid.GridItem>
      </Grid>
    );

  it('should render base class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Grid');

    expect(component).toHaveClass('rrui-grid');
  });

  it('should render gap modifier class', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Grid');

    expect(component).toHaveClass('rrui-grid--gap-m');
  });
  it('should render gap (l) modifier class', () => {
    props.gap = 'l';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Grid');

    expect(component).toHaveClass('rrui-grid--gap-l');
  });
  it('should render exactly 2 grid items ', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Grid');

    expect(component.getElementsByClassName('rrui-grid__item').length).toEqual(
      2
    );
  });
});
