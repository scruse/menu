import MenuButton from './MenuButton'

const Menu = ({ categories, filterMenuItems }) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <MenuButton
              category={category}
              filterMenuItems={filterMenuItems}
              key={index}
            />
          )
        })}
      </div>
    </>
  )
}

export default Menu
