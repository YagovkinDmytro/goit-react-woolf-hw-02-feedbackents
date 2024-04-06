const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="block-feedback">
      {options.map(option => {
        if (option !== 'total' && option !== 'positiveFeedback') {
          return (
            <button
              className="button-feedback"
              type="button"
              key={option}
              style={{ textTransform: 'capitalize' }}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        }
        return null;
      })}
    </div>
  );
};

export default FeedbackOptions;
