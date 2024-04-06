import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import './FeedbackOptions/feedbackOptions.css';
import './Section/section.css';
import './Statistics/statistics.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  isOpen = false;

  hendlerclickStatistic = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    this.isOpen = true;
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

  openStatistic(isOpen) {
    return isOpen;
  }

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.hendlerclickStatistic}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positiveFeedback={this.state.positiveFeedback}
            isOpen={this.isOpen}
          >
            <Notification message="There is no feedback" />
          </Statistics>
        </Section>
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
