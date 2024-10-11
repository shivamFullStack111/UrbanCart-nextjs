import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DropDown({ items, heading, onSelect }) {
  return (
    <Dropdown className="w-[300px] rounded-lg h-full ">
      <DropdownTrigger className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100 w-full h-full justify-start">
        <Button className="text-gray-400" variant="bordered">
          {heading}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        className="border-2 border-gray-200 rounded-lg bg-white"
        items={items}
      >
        {(item) => (
          <DropdownItem
            onPress={() => onSelect(item.key)}
            color={item.key === "delete" ? "danger" : "default"}
            className={`${
              item.key === "delete" ? "text-danger" : ""
            } border-b-2 py-1 text-gray-600 hover:bg-violet-400 hover:text-white`}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
