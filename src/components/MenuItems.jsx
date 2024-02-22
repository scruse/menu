import MenuItem from './MenuItem'
const MenuItems = (props) => {
  console.log(props)
  const { menuItems } = props
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        return <MenuItem {...item} key={item.id} />
      })}
    </div>
  )
}

export default MenuItems
