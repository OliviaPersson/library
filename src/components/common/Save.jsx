import bookmarkIcon from "../../images/bookmark-darkmode.png";
import bookmarkIconFilled from "../../images/bookmark-filled-darkmode.png";
import "./Save.css";

function Save({ isSaved, onClick }) {
  let bookmark = bookmarkIcon;

  if (isSaved) bookmark = bookmarkIconFilled;
  return <img className="bookmark-icon" src={bookmark} onClick={onClick} />;
}

export default Save;
