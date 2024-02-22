import MenuButton from './MenuButton'

const Menu = ({ categories, filterMenuItems }) => {
  //console.log(menuItems)
  //const { categories } = props
  return (
    <>
      <div className="btn-container">
        {categories.map((category) => {
          return (
            <MenuButton category={category} filterMenuItems={filterMenuItems} />
          )
        })}
      </div>
    </>
  )
}

export default Menu
