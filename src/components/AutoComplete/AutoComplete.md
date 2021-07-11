### Features

- Uses controlled component pattern
- Display a list of results from the parent component
- Pressing up or down key will focus and select
- Mouse hover will focus and select
- If down is pressed and last item is selected, the first item will be selected
- If up is pressed and first item is selected, the last item will be selected
- Pressing escape closes the popup
- Clicking away from popup will close the popup (blur)

### Default

```jsx
import React from 'react';
import AutoComplete from 'robust-react-ui/build/components/AutoComplete';
const [options, setOptions] = React.useState([]);
const [mockData, setMockData] = React.useState([
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
]);
const [value, setValue] = React.useState('');
const onChangeFunction = (newValue) => {
  setValue(newValue);
  setOptions(
    mockData.filter((o) => o.toLowerCase().indexOf(newValue.toLowerCase()) > -1)
  );
};
const onSelectOptionFunction = (newValue) => setValue(newValue);
const onClearOptionsFunction = () => setOptions([]);
<AutoComplete
  labelText="Choose a vegetable"
  options={options}
  value={value}
  onClearOptionsFunction={onClearOptionsFunction}
  onSelectOptionFunction={onSelectOptionFunction}
  onChangeFunction={onChangeFunction}
/>;
```
