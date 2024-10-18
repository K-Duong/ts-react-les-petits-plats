import { ChangeEvent, useState } from "react";
import InputSearch from "../searchInput";
import "./style.css";

interface PropsDropdownMenu {
  dropdownType: string;
  dropdownList: string[];
  handleAdvancedSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
function DropdownMenu(props: PropsDropdownMenu) {
  const [openedDropdown, setOpenedDropdown] = useState<boolean>(false);
  const { dropdownType, dropdownList, handleAdvancedSearch } = props;
  return (
    <div className="dropdown-menu">
      <div className="dropdown-top">
        <p className="dropdown-type">{dropdownType}</p>
        {/* TODO: separate button component */}
        <button
          onClick={() => setOpenedDropdown(!openedDropdown)}
          className="chevron"
        >
          {openedDropdown ? "Down" : "Up"}
        </button>
      </div>
      {openedDropdown ? (
        <div className="dropdown-down">
          <InputSearch
            placeholder="Search..."
            type="text"
            handleChangeInput={handleAdvancedSearch}
            className="input-advanced-search"
          />
          <ul className="dropdown-list">
            {dropdownList.map((str) => (
              <li key={str}>{str}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropdownMenu;
