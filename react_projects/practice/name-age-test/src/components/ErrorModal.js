import Card from "./Card";

const ErrorModal = (props) => {
  const okayHandler = () => {
    props.onAccept();
  };
  return (
    <Card>
      {console.log(props)}
      <div>{props.message}</div>
      <button onClick={okayHandler}>Okay</button>
    </Card>
  );
};

export default ErrorModal;
