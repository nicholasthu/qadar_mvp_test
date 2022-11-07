import styles from "./Search.module.scss";
import SearchForm from "../SearchForm";

const SearchBox = () => {
  return (
    <div className="container">
      <div className={`${styles["search-wrapper"]} relative flex items-center`}>
        <div className="w-full px-[40px] py-[30px]">
          <h2 className="font-[700] text-[48px] leading-[48px]">Welcome.</h2>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
