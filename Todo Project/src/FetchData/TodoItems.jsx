import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function TodoItems({ todo, getTodoId }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h5">{todo.todo}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              getTodoId(todo.id);
            }}
            sx={{
              backgroundColor: "#000",
              color: "white",
              opacity: "0.75",
              "&:hover": {
                backgroundColor: "#000",
                color: "white",
                opacity: "1",
              },
            }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default TodoItems;
