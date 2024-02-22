import { useState } from 'react'
import Title from './components/Title'
import Menu from './components/Menu'
import MenuItems from './components/MenuItems'
import menu from './data'

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const tempCategories = menu.map((item) => item.category)

  const categories = new Set(tempCategories)
  const tempItems = ['all', ...categories]

  const filterMenuItems = (category) => {
    console.log('filter', category)
    if (category !== 'all') {
      const filteredItems = menu.filter((item) => item.category === category)
      setMenuItems(filteredItems)
    } else {
      setMenuItems(menu)
    }
  }

  return (
    <main>
      <Title />
      <Menu categories={tempItems} filterMenuItems={filterMenuItems} />
      <MenuItems menuItems={menuItems} />
    </main>
  )
}
export default App
