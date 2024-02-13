import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways } from "./data";
import Button from "./components/Button/Button";


export default function App() {
  function handleClick() {
    console.log('button clicked');
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Hello React!!</h1>
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            {/* <WayToTeach title={ways[1].title} description={ways[1].description} />
            <WayToTeach title={ways[2].title} description={ways[2].description} />
            <WayToTeach title={ways[3].title} description={ways[3].description} /> */}
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Lorem, ipsum.</h3>
          <Button><span>Подход</span><span>! </span></Button>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>
        </section>

      </main>

    </div>
  )
}
