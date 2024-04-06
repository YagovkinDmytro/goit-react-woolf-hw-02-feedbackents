const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        if (option !== 'total' && option !== 'positiveFeedback') {
          return (
            <button
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
