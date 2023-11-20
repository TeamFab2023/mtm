const SearchInputWithButton = () => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Question Co..."
        className="h-8 w-28 rounded-l py-1 px-[11px] text-customGray-100 text-sm leading-5 border border-[#d9d9d9]"
      />
      <button
        className={`flex px-[15px] pt-[0.1px] h-[32px] leading-7 items-center bg-skyBlue-100 border-skyBlue-100 shadow-[0 2px 0 rgba(0,0,0,.045)] font-normal text-center cursor-pointer transition-all  text-[14px] rounded-r border-[1px solid #d9d9d9] text-white gap-[6px] shrink-0`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInputWithButton;
