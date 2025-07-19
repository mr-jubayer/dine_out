function Header() {
  return (
    <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center ">
        <div className="text-primary mr-2">
          <img src="https://raw.githubusercontent.com/Learn-with-Sumit/rnext/62590dfb49943e952ebf209e799517880b807415/assets/logo.svg" />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <img
          src="https://raw.githubusercontent.com/Learn-with-Sumit/rnext/62590dfb49943e952ebf209e799517880b807415/assets/user-icon.svg"
          className="h-10"
        />
      </div>
    </nav>
  );
}
export default Header;
