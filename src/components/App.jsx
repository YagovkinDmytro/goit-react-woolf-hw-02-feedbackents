import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Statistics/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  hendlerclickStatistic = () => {
    this.setState(prevState => {
      // return {
      //   [option]: prevState[option] + 1,
      // };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.countGood + prevState.countNeutral + prevState.countBad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: Math.floor(
        (prevState.countGood * 100) / prevState.total
      ),
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
          good={this.state.countGood}
          neutral={this.state.countNeutral}
          bad={this.state.countBad}
          total={this.state.total}
          positivePercentage={this.state.positiveFeedback}
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
