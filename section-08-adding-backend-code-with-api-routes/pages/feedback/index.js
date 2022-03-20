import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

//DONT USE FETCH IN GETSTATICPROPS OR
//GETSERVERSIDEPROPS TO TALK TO YOUR
//OWN API!!!!!!
//instead write node logic that should
//execute here directly in this function
export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
