import coffee from "../assets/coffee-splash.png";

const Home = () => {
  return (
    <main className="bg-[#eeeff1] h-screen w-full">
      <header className="flex w-full max-w-screen-xl mx-auto items-center h-full">
        <div className="content flex-[1] flex flex-col gap-8">
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
            <button className="black-button shadow-md">ORDER NOW</button>
            <button className="white-button shadow-md">BROWSE</button>
          </div>
        </div>
        <div className="image flex-[1]">
          <img src={coffee} alt="coffee" />
        </div>
      </header>
    </main>
  );
};
export default Home;
