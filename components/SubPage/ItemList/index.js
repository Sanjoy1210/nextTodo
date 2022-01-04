import SecondaryButton from "../../form/Button/SecondaryButton"
import ListItem from "../../listItem"
import router from 'next/router';

const ItemList = ({ list }) => {
  return (
    <div className="container mt-10 mx-auto">
      {
        list?.length ?
          list.map((item, index) => (
            <ListItem key={index} item={item} index={index} />
          )) :
          <div className="text-center">
            <h1 className="text-xl font-bold text-green-600">There is no item</h1>
            <SecondaryButton onClick={() => router.push('/')}>Add todos</SecondaryButton>
          </div>
      }
    </div>
  )
}

export default ItemList;