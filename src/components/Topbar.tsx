function Topbar() {

  return (
<div className="w-full flex flex-col md:flex-row items-start md:items-center pb-10 gap-4 md:gap-10 text-sm">
  <a href="https://ourgreenway.ca/"><img src="/OurGreenwayCombinationMarkHorizontal.svg" className="pl-5 h-10.5" /></a>
  <div className="md:pl-0">
    <a href="/"><h1 className="text-xl font-semibold text-black">Brand & Component Development Kit</h1></a>
  </div>
</div>
  );
}
export default Topbar;