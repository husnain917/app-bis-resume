import ReactStars from 'react-rating-stars-component';

const Rating = ({ size, isHalf, color, activeColor }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={size ? size : 24}
      isHalf={isHalf ? isHalf : true}
      activeColor={activeColor ? activeColor : '#ffd700}'}
      color={color ? color : '#D6DBDF '}
    />
  );
};

export default Rating;
