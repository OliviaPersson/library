import MyBookshelf from "./../navbar/navBarComponents/MyBookshelf";
import CurrentlyReading from "./../navbar/navBarComponents/CurrentlyReading";
import Read from "./../navbar/navBarComponents/Read";
import "./Profile.css";

function Profile({ wantToReadBooks, currentlyReadingBooks, readBooks }) {
  return (
    <div className="my-profile">
      <h1 className="my-profile-header">My Profile</h1>
      <MyBookshelf books={wantToReadBooks} />
      <CurrentlyReading books={currentlyReadingBooks} />
      <Read books={readBooks} />
    </div>
  );
}

export default Profile;
