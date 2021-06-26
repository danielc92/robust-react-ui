// Generated with util/create-component.js
export interface IReviewProps {
  /**
   * The wrapping form's id
   * @default star_rating
   */
  formId?: string;
  /**
   * Function to set controlled state of Review
   */
  onStarClickFunction: (rating: number) => void;
  /**
   * Function to clear the controlled state of Review
   */
  onCrossClickFunction: () => void;
  /**
   * @default 0
   */
  currentValue: number;
  /**
   * Size of review stars
   * @default medium
   *
   *
   * */
  size?: 'small' | 'medium' | 'large';
}
