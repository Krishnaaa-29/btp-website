import coffeee from "../assets/coffee-splash.png";
import { Link } from "react-router-dom";
import { CoffeeCard } from "../components";
import { coffee } from "../components/help.js";

const Home = () => {
  const scroll = () => {
    window.scrollTo(2000, 0);
  };
  return (
    <main className="bg-[#eeeff1] h-full w-full">
      <header className="flex w-full max-w-screen-xl mx-auto items-center h-full">
        <div className="content flex-[1] flex flex-col gap-8 my-[10rem]">
          <h1 className="text-[100px] font-bold leading-none">
            Smart Coffee Maker
          </h1>
          <p className="text-2xl font-semibold">Make your coffee in NO TIME!</p>
          <p className="w-[500px] ">
            Just order what you want to drink and we will make sure it is hot
            and ready at the vending machine so that you don't have to waste
            single minute
          </p>
          <div className="buttons flex justify-center gap-8 ">
            <button className="black-button shadow-md">
              <a href="#card">ORDER NOW</a>
            </button>
            <button className="white-button shadow-md">BROWSE</button>
          </div>
        </div>
        <div className="image flex-[1]">
          <img src={coffeee} alt="coffee" />
        </div>
      </header>
      <section className="bg-white py-6">
        <h1 className="text-center font-bold text-3xl underline mb-4  ">
          Our Favourites
        </h1>
        <div className="flex items-center justify-center gap-8" id="card">
          {coffee?.map((coff) => (
            <CoffeeCard key={coff.id} name={coff.name} price={coff.Price} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
