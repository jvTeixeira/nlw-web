import "./Styles/main.css";
import logo from "./assets/Logo.svg";
import lol from "./assets/image1.png";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} />

      <h1 className="text-6xl text-white font-black mt-20">
        seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative roundend-lg overflow-hidden">
          <img src={lol} />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              league of legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg  overflow-hidden ">
        <div className="bg-[#2A2634] px-8 py-6 self-stretch flex justify-between items-center">
          <div className="">
            <strong className="text-2xl text-white font-black block">
              Não encotrou o seu duo?
            </strong>
            <span className=" text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded-lg hover:bg-violet-400 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
