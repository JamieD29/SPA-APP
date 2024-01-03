import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const CardStuff = () => {
  return (
    <div className="mx-2">
      <Card
        shadow={false}
        className="relative grid h-[22rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://houseofcosmetics.co.za/cdn/shop/products/4059729382795_b9dc5636-120f-48c3-87d1-b30162a0d5c1_800x.jpg?v=1681386172')] bg-contain bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5] uppercase"
          >
            Skin clearing serum
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardStuff;
