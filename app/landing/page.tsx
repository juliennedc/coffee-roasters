import Image from "next/image";
import Navbar from "../../components/navbar";
import Collection from "../../components/collection";
import Card from "../../components/card";
export default function Home() {
  const cardList = [
    {
      icon: "/static/images/home/desktop/icon-coffee-bean.svg",
      title: "Best quality",
      dscp: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      icon: "/static/images/home/desktop/icon-gift.svg",
      title: "Exclusive benefits",
      dscp: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      icon: "/static/images/home/desktop/icon-truck.svg",
      title: "Free shipping",
      dscp: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
  ];
  const collection = [
    {
      name: "Gran Espreso",
      image: "/static/images/home/desktop/image-gran-espresso.png",
      dscp: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
      name: "Planalto",
      image: "/static/images/home/desktop/image-planalto.png",
      dscp: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    },
    {
      name: "Piccollo",
      image: "/static/images/home/desktop/image-piccollo.png",
      dscp: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    },
    {
      name: "Danche",
      image: "/static/images/home/desktop/image-danche.png",
      dscp: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
  ];
  return (
    <div>
      <Navbar />
      <section className="bg-base-100 mx-6 ">
        <main className="flex flex-col gap-[7.5rem]">
          <div className="relative  mt-2 min-h-[31.25rem] overflow-hidden ">
            <Image
              className="rounded-xl w- object-cover w-max"
              fill
              alt=""
              src="/static/images/home/mobile/image-hero-coffeepress.jpg"
            />
            <div className="absolute p-6 flex items-center flex-col h-full justify-center">
              <h1 className="font-black text-[2.5rem] text-base-content">
                Great coffee made simple
              </h1>

              <p className="mt-4 text-base-content">
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
              <button className="rounded-md mt-10 font-bold bg-primary text-cream-100 pt-[15px] pb-4 px-[31px] transition-all hover:bg-primary-focus">
                Create Your Plan
              </button>
            </div>
          </div>
          <div>
            <h2
              className="text-center font-black text-[2.5rem] leading-[4.5rem] bg-clip-text bg-gradient-to-t from-[#fefcf7]/[0.0001] to-[#83888F]/100 
             text-transparent"
            >
              our collection
            </h2>
            <div className="flex flex-col items-center justify-center gap-12">
              {collection.map(({ name, image, dscp }) => {
                return (
                  <Collection
                    key={name}
                    name={name}
                    image={image}
                    dscp={dscp}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="rounded-t-lg bg-info-content px-6 pt-16  pb-8 flex flex-col items-center ">
              <h2 className="text-[1.75rem] text-base-content font-black ">
                Why choose us?
              </h2>
              <p className="text-base-content text-center mt-6 leading-[25px]">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
            <div className="bg-[#2C343E] px-6 py-[1.875rem] flex flex-col gap-6">
              {cardList.map((card) => {
                return <Card key={card.title} item={card} />;
              })}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
