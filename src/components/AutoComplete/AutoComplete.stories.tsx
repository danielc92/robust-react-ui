// // Generated with util/create-component.js

import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import AutoComplete from './AutoComplete';
import { IAutoCompleteProps } from './AutoComplete.types';

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  args: {
    labelId: 'vegetable-autocomplete',
    labelText: 'Search for a vegetable.',
  },
} as Meta<IAutoCompleteProps>;

const Template: Story<IAutoCompleteProps> = (args) => {
  const mockData = [
    'acorn squash',
    'alfalfa sprout',
    'amaranth',
    'anise',
    'artichoke',
    'arugula',
    'asparagus',
    'aubergine',
    'azuki bean',
    'banana squash',
    'basil',
    'bean sprout',
    'beet',
    'black bean',
    'black-eyed pea',
    'bok choy',
    'borlotti bean',
    'broad beans',
    'broccoflower',
    'broccoli',
    'brussels sprout',
    'butternut squash',
    'cabbage',
    'calabrese',
    'caraway',
    'carrot',
    'cauliflower',
    'cayenne pepper',
    'celeriac',
    'celery',
    'chamomile',
    'chard',
    'chayote',
    'chickpea',
    'chives',
    'cilantro',
    'collard green',
    'corn',
    'corn salad',
    'courgette',
    'cucumber',
    'daikon',
    'delicata',
    'dill',
    'eggplant',
    'endive',
    'fennel',
    'fiddlehead',
    'frisee',
    'garlic',
    'gem squash',
    'ginger',
    'green bean',
    'green pepper',
    'habanero',
    'herbs and spice',
    'horseradish',
    'hubbard squash',
    'jalapeno',
    'jerusalem artichoke',
    'jicama',
    'kale',
    'kidney bean',
    'kohlrabi',
    'lavender',
    'leek ',
    'legume',
    'lemon grass',
    'lentils',
    'lettuce',
    'lima bean',
    'mamey',
    'mangetout',
    'marjoram',
    'mung bean',
    'mushroom',
    'mustard green',
    'navy bean',
    'new zealand spinach',
    'nopale',
    'okra',
    'onion',
    'oregano',
    'paprika',
    'parsley',
    'parsnip',
    'patty pan',
    'pea',
    'pinto bean',
    'potato',
    'pumpkin',
    'radicchio',
    'radish',
    'rhubarb',
    'rosemary',
    'runner bean',
    'rutabaga',
    'sage',
    'scallion',
    'shallot',
    'skirret',
    'snap pea',
    'soy bean',
    'spaghetti squash',
    'spinach',
    'squash',
    'sweet potato',
    'tabasco pepper',
    'taro',
    'tat soi',
    'thyme',
    'topinambur',
    'tubers',
    'turnip',
    'wasabi',
    'water chestnut',
    'watercress',
    'white radish',
    'yam',
    'zucchini',
  ];
  const [options, setOptions] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>('');
  const onClearOptionsFunction = () => setOptions([]);
  const onChangeFunction = (newValue: string) => {
    setValue(newValue);
    setOptions(
      mockData.filter(
        (o) => o.toLowerCase().indexOf(newValue.toLowerCase()) > -1
      )
    );
  };
  const onSelectOptionFunction = (newValue: string) => setValue(newValue);
  return (
    <AutoComplete
      {...args}
      options={options}
      onClearOptionsFunction={onClearOptionsFunction}
      onSelectOptionFunction={onSelectOptionFunction}
      onChangeFunction={onChangeFunction}
      value={value}
    />
  );
};

export const Basic: Story<IAutoCompleteProps> = Template.bind({});
