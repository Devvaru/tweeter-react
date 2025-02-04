import React from 'react'; //optional

function TweetForm() {
  const inputMessage = 'What are you humming about?';

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onClick={(event) => {event.preventDefault()}}>
        <textarea className="form__textarea" name="text" placeholder={inputMessage}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
