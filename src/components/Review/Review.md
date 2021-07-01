### Features

- Uses the controlled component design pattern
- Supports up to 5 star review
- Supports clearing review state

### Default

```jsx
import React from 'react';
import Review from 'robust-react-ui/build/components/Review';
const [rating, setRating] = React.useState(0);
const onCrossClickFunction = () => {
  setRating(0);
};
// rating is type number
const onStarClickFunction = (newRating) => {
  setRating(newRating);
};

<Review
  size="medium"
  currentValue={rating}
  onCrossClickFunction={onCrossClickFunction}
  onStarClickFunction={onStarClickFunction}
/>;
```
