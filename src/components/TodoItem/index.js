import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteItem} = props
  const {title, id} = itemDetails
  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item-container">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
