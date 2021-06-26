### Features

- uses the controlled component design pattern
- supports up to 5 star review
- supports clearing review state

### Basic

```jsx
import React from 'react';
import Pagination from 'robust-react-ui/build/components/Pagination';
const [rating, setRating] = useState < number > 0;
const onCrossClickFunction = () => {
  setRating(0);
};
// rating is type number
const onStarClickFunction = (rating) => {
  setRating(rating);
};

<Review
  currentValue={rating}
  onCrossClickFunction={onCrossClickFunction}
  onStarClickFunction={onStarClickFunction}
/>;
```
