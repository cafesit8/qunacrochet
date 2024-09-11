export interface DropdownProps {
  name: string,
  list: DropdownList[]
}

interface DropdownList {
  name: string,
  to: string
}