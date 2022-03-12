import List from '../../components/List';
import { useStore } from '../../store/StoreProvider';

const TodoList = () => {
  const store = useStore();

  return <List {...store} />;
};

export default TodoList;
