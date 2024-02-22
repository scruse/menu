import MenuItem from './MenuItem'
const MenuItems = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        return <MenuItem {...item} key={item.id} />
      })}
    </div>
  )
}

export default MenuItems
