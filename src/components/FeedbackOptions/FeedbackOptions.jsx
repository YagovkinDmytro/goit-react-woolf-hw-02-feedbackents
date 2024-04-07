const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="block-feedback">
      {options.map(option => (
        <button
          className="button-feedback"
          type="button"
          key={option}
          style={{ textTransform: 'capitalize' }}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
