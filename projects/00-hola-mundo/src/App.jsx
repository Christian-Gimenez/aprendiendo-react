import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
//VOY POR 1:18:40 = https://youtu.be/7iobxzd_2wY?si=ALtGFr24F3GeXkPO&t=4720

export function App() {//Creamos el componente y lo exportamos
  return (
    //<> Como poner <React.Fragment> pero abreviado
    <section className="App"> 
      <TwitterFollowCard isFollowing userName="goku" name="Son Goku" />
      <TwitterFollowCard isFollowing={false} userName="Christian-Gimenez" name="Christian Giménez" />
      <TwitterFollowCard isFollowing userName="songohanda" name="Son Gohan" />
      <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Duran" />
    </section>

  )
}