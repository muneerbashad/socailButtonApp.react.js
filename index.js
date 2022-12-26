const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
  //  Write your code here.
};

const element = (
  <div className="main-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="Share" className="share-button " />
      </div>
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
