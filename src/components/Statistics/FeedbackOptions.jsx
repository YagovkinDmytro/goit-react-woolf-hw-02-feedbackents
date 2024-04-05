const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
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

// (option ="total" && option = "positiveFeedback" } ? { underfined } :
