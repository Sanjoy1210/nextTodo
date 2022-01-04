import HomeLayout from "../../layouts/HomeLayout";
import { useSelector } from "react-redux";
import { todoSelector } from "../../store/slices/todoSlice";
import ItemList from "../../components/SubPage/ItemList";

const List = () => {

    const { list } = useSelector(todoSelector)

    return (
        <HomeLayout>
            <ItemList list={list} />
        </HomeLayout>
    )
}

export default List