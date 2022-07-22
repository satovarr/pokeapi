import "./selectPage.css";

export default function SelectPage({ currentPage, setCurrentPage }) {
  
  const hadleButton = (e) => {
    if (e.target.name === "back" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    else if (e.target.name === "forward") {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <div className="app__leftButton leftButton">
        <button
          className="leftButton__button button button--left"
          onClick={hadleButton}
          name="back"
        >
          <span className="button__label">{"< "}</span> {" Atras"}
        </button>
      </div>
      <div className="app__rightButton rightButton">
        <button
          className="rightButton_button button button--right"
          onClick={hadleButton}
          name="forward"
        >
          {" Siguiente"}
          <span className="button__label">{"> "}</span>
        </button>
      </div>
    </>
  );
}
