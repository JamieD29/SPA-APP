import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function InputWithDropdown() {


  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src=""
              alt="error1"
              className="h-4 w-4 rounded-full object-cover"
            />
           Nothing here
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          
              <MenuItem
                key={name}
                value="Hello"
                className="flex items-center gap-2"
               
              >
                <img
                  src=""
                  alt="error1"
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">Nohting here</span>
              </MenuItem>
       
        
        </MenuList>
      </Menu>
      <Input
        type="tel"
        placeholder="Mobile Number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
}
