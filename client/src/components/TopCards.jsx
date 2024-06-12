const TopCards = ({ topCards }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 mt-2">
      {topCards.map((topCard, idx) => (
        <div
          key={idx}
          className="flex p-4 space-x-4 rounded-md md:space-x-6 bg-white shadow-md text-gray-800 capitalize border-transparent hover:border-blue-500 border duration-150 transition-colors cursor-pointer"
        >
          {topCard}
        </div>
      ))}
    </div>
  );
};

export default TopCards;
