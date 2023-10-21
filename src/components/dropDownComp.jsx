import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropDownComp({ handleFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="lg">
        Filter
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleFilter("male")}>Male</DropdownItem>
        <DropdownItem onClick={() => handleFilter("female")}>
          Female
        </DropdownItem>
        <DropdownItem onClick={() => handleFilter("popularity")}>
          Popularity
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
export default DropDownComp;
