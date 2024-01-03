import Rate from './Rate';

const Filter = props => {
  const { title, setTitle, rating, setRating } = props;
  return (
    <div className="my-5">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-control"
      />
      <Rate rating={rating} setRating={setRating} />
    </div>
  );
};

export default Filter;
