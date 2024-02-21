import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Nasa() {
  return (
    <div className="mx-6 flex flex-col gap-4 text-2xl border-r-2 justify-around h-full">
      <div className="flex justify-between items-center">
        <p>Picture of the day</p>
        <ChevronRightIcon className="w-10 h-10" />
      </div>
      <div className="flex justify-between items-center">
        <p>Mars Weather</p>
        <ChevronRightIcon className="w-10 h-10" />
      </div>
      <div className="flex justify-between items-center">
        <p>EONET</p>
        <ChevronRightIcon className="w-10 h-10" />
      </div>
    </div>
  );
}

export default Nasa;
