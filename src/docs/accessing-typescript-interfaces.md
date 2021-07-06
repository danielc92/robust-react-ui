### Why it is important to use interfaces

Each component in Robust React UI has a set of [Typescript interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html). These can be used to add intellisense and increase productivity whilst using Robust React UI compoennts in your project. All interfaces are exported from the root of the project and every single interface is prefixed with a capital 'I', for example `IButtonProps`.

### Example: Importing types for `Accordion` and `Carousel` components

```shell
import {
  IAccordionPanelProps,
  IAccordionProps,
  ICarouselProps,
  ICarouselSlideProps,
} from "robust-react-ui";
```
