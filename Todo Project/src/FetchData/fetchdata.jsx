import { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
import TodoDetailsShow from "./todoDetails.jsx";
import classes from "./styles.module.css";

export default function FetchTodoData() {
  const [getData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setDialog] = useState(false);
  const [todoDetails, settodoDetails] = useState(null);

  async function fetchTodoData() {
    setLoading(true); // Start loading before fetching data
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();
      if (result && result.todos) {
        setData(result.todos);
      } else {
        setData([]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false); // End loading after data is fetched
    }
  }

  async function fetchTodoId(getid) {
    console.log(getid);
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getid}`);
      const details = await apiResponse.json();
      console.log(details);

      if (details) {
        settodoDetails(details); // Set details fetched from API
        setDialog(true); // Open the dialog
      } else {
        settodoDetails(null); // Reset details if no data
        setDialog(false); // Close the dialog
      }
    } catch (e) {
      console.log(e);
    }
  }
  console.log(openDialog);

  useEffect(() => {
    fetchTodoData();
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        {loading ? (
          <p>Loading...</p> // Show loading state
        ) : getData && getData.length > 0 ? (
          getData.map((item) => (
            <TodoItems getTodoId={fetchTodoId} key={item.id} todo={item} /> // Add key to each item
          ))
        ) : (
          <p>No Todos Found</p>
        )}
      </div>
      {openDialog && todoDetails && (
        <TodoDetailsShow
          openDialog={openDialog}
          todoDetails={todoDetails}
          onClose={() => setDialog(false)} // Close dialog handler
        />
      )}
    </>
  );
}
