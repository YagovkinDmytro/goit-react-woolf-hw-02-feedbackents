const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

//**Step 1, 2 before refactoring**//
// import { Component } from 'react';

// class Statistics extends Component {
//   state = {
//     countGood: 0,
//     countNeutral: 0,
//     countBad: 0,
//     total: 0,
//     positiveFeedback: 0,
//   };

//   hendlerclickStatistic = evt => {
//     switch (evt.currentTarget.id) {
//       case 'good':
//         this.setState(prevState => ({
//           countGood: prevState.countGood + 1,
//         }));
//         break;
//       case 'neutral':
//         this.setState(prevState => ({
//           countNeutral: prevState.countNeutral + 1,
//         }));
//         break;
//       case 'bad':
//         this.setState(prevState => ({
//           countBad: prevState.countBad + 1,
//         }));
//         break;
//       default:
//         console.log('hendlerclickStatistic is broken');
//     }
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };

//   countTotalFeedback = () => {
//     this.setState(prevState => ({
//       total: prevState.countGood + prevState.countNeutral + prevState.countBad,
//     }));
//   };

//   countPositiveFeedbackPercentage = () => {
//     this.setState(prevState => ({
//       positiveFeedback: Math.floor(prevState.countGood * 100) / prevState.total,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h2>Please leave feedback</h2>
//           <button id="good" onClick={this.hendlerclickStatistic}>
//             Good
//           </button>
//           <button id="neutral" onClick={this.hendlerclickStatistic}>
//             Neutral
//           </button>
//           <button id="bad" onClick={this.hendlerclickStatistic}>
//             Bad
//           </button>
//         </div>
//         <div>
//           <h2>Statistics</h2>
//           <p>Good: {this.state.countGood}</p>
//           <p>Neutral: {this.state.countNeutral} </p>
//           <p>Bad: {this.state.countBad}</p>
//           <p>Total: {this.state.total}</p>
//           <p>Positive Feedback: {this.state.positiveFeedback}%</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Statistics;
