import classes from "../components/TabButton.module.css";

function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      onClick={onSelect}
      className={`${classes.btn} ${isSelected && classes.active}`}
    >
      {children}
    </button>
  );
}

export default TabButton;
