import PropTypes from "prop-types";

function MessageBox(props) {
  const type = props.type;
  const addLineBreak = (str) =>
    str.split("\n").map((subStr) => {
      return (
        <>
          {subStr}
          <br />
        </>
      );
    });
    

  return type === "user" ? (
    <div className="message-box user-message-style">
      <p>{props.text}</p>
    </div>
  ) : (
    <div className="message-box bot-message-style">
      <p>{addLineBreak(props.text)}</p>
    </div>
  );
}

MessageBox.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default MessageBox;
