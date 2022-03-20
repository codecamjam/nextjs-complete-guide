import { useRef, useState } from 'react';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  async function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback,
    };
    // fetch('/api/feedback', {
    //   method: 'POST',
    //   body: JSON.stringify(reqBody),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
  }

  async function loadFeedbackHandler() {
    // fetch('/api/feedback')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setFeedbackItems(data.feedback);
    //   });

    const response = await fetch('/api/feedback');
    const data = await response.json();
    setFeedbackItems(data.feedback);
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your email address</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>LoadFeedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
