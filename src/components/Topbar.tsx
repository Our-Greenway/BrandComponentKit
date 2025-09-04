function Topbar() {

  return (
    <div className="w-full flex flex-col items-center text-center gap-4 pb-10 sm:pt-0 pt-10 text-sm md:flex-row md:items-center md:text-left md:gap-10">
  <a href="https://ourgreenway.ca/">
    <img src="/OurGreenwayCombinationMarkHorizontal.svg" className="h-10.5" />
  </a>
  <div className="md:pl-0">
    <a href="/">
      <h1 className="text-xl font-semibold text-black">
        Brand & Component Development Kit
      </h1>
    </a>
  </div>
</div>
  );
}
export default Topbar;