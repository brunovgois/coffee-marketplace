import { coffeeType } from "../mock/coffe";

type CoffeeCardProps = {
  coffee: coffeeType;
};
export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <div key={coffee.id} className='bg-gray-100 opacity-95 px-5 pb-5 rounded-tr-md rounded-bl-md flex flex-col items-center gap-2'>
      <img
        src={`/src/assets/coffees/${coffee.photo}`}
        alt={`Photo image for ${coffee.name}`}
        className='-mt-5'
        />
        <div className="flex gap-2">
          {
            coffee.tags.map(tag => {
              return (
                <div className="rounded-full bg-yellow-200 px-2 py-1 w-fit" key={tag}>
                  <p className="text-yellow-600 font-bold font-sans text-xs">{tag}</p>
                </div>
              )
            })
          }
        </div>
        <h2 className="text-gray-700 text-xl">{coffee.name}</h2>
        
        <p className="text-gray-400 text-sm">{coffee.description}</p>

        <div className="flex">
          {coffee.price}
        </div>
    </div>
  );
}
