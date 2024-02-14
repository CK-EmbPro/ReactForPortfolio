import Header from "./components/Header"
import Overview from "./components/Overview"
import Switch from "./components/Switch"
import TopCardsList from "./components/TopCardsList"
import "./styles/global.css"

const App = () => {
  return (
    <div>
      <Header>
        <Switch />
      </Header>
      <TopCardsList/>
      <Overview/>
    </div>
  )
}

export default App