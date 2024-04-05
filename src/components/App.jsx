import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Statistics/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerclickStatistic = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: Math.floor((prevState.good * 100) / prevState.total),
    }));
  };

  render() {
    return (
      <div>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.hendlerclickStatistic}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positiveFeedback={this.state.positiveFeedback}
        />
      </div>
    );
  }
}

//**Step 1, 2 before refactoring**//
// import Statistics from './Statistics/Statistics';

// export const App = () => {
//   return (
//     <div>
//       <Statistics></Statistics>
//     </div>
//   );
// };
