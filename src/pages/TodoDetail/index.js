import { useParams, Link } from "react-router-dom";

const TodoDetail = () => {
  const { todoId } = useParams();

  return (
    <div className="todo-detail">
      <h2>Todo Detail</h2>
      <h4>Todo {todoId}</h4>
      
      {/* Thêm nút Back */}
      <Link to="/">Back to Todo List</Link>
    </div>
  );
};

export default TodoDetail;
