const MenuButton = ({ category, filterMenuItems }) => {
  //const { category } = props
  return (
    <button className="btn" onClick={() => filterMenuItems(category)}>
      {category}
    </button>
  )
}
export default MenuButton
