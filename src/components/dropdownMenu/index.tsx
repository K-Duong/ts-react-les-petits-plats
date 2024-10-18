import { useState } from "react";
import { PropsDropdownMenu } from "../../types/dropdownMenu";
import InputSearch from "../searchInput";
import "./style.css";

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
