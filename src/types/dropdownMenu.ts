import { ChangeEvent } from "react";

export interface PropsDropdownMenu {
  dropdownType: string;
  dropdownList: string[];
  handleAdvancedSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}