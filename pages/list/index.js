import HomeLayout from "../../layouts/HomeLayout";
import { useSelector, useDispatch } from "react-redux";
import { todoSelector, toggleStatusAction, deleteTodoAction } from "../../store/slices/todoSlice";
import ListItem from "../../components/listItem";

const List = () => {

    const { list } = useSelector(todoSelector)

    return (
        <HomeLayout>
            <div className="container mt-10 mx-auto">
                {
                    list.length ?
                        list.map((item, index) => (
                            <ListItem key={index} item={item} index={index} />
                        )) :
                        <h1>There is no item</h1>
                }
            </div>

        </HomeLayout>
    )
}

export default List