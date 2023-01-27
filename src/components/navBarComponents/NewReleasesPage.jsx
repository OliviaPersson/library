import "./NewReleasesPage.css";
import BookList from "./../BookList";

function NewReleases({ books }) {
  return (
    <div className="page-content-container">
      <h1 className="page-header">New Releases</h1>
      <BookList books={books} />
    </div>
  );
}

export default NewReleases;
