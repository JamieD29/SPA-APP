import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { InputWithDropdown } from "./InputDropDown";

export default function AppointmentForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="uppercase text-center text-pink-200" color="blue-gray">
        get an appointment
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to easily contact.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Jamie Dang"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Phone number
          </Typography>
          <Input
            size="lg"
            placeholder="+84..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Choosing Services
          </Typography>
          <InputWithDropdown/>
        </div>

        <Button className="mt-6" color="pink" fullWidth>
          DONE!!
        </Button>
      </form>
    </Card>
  );
}
