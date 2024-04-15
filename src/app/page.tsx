import Image from "next/image";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {Card, CardBody, Button, Slider} from "@nextui-org/react";

export default function Home() {
  return (
    <div className=" pt-32 h-[100%]" id="inicio">
      <div className=" m-auto w-[350px] xl:w-[500px]">
      <Card
        isBlurred
        className=" animate-pulse p-0 border-none bg-background/60 dark:bg-default-100/50 w-[160px] mb-3 mr-6 ml-auto"
        shadow="none"
        >
          <CardBody className=" text-center p-0 max-w-[160px] m-auto">
            <h2 className=" text-center mt-1 text-small pb-1"><span className=" text-green-500">cuidemos</span> nuestro aire</h2>     
          </CardBody>
        </Card>
        <Card
        isBlurred
        className=" p-0 border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
        >
          <CardBody className=" text-center p-14">
            <Image 
              src="/img/logo.png"
              height={100}
              width={100}
              alt="logo"
              className="m-auto w-[5rem] mb-[-0.5rem] xl:w-[8rem]"
            />
            <h1 className=""><span className=" font-black text-5xl sm:text-7xl">Rayen</span><span className="font-black text-5xl text-green-500 sm:text-7xl">CO2</span></h1>
          </CardBody>
        </Card>
        <Card
        isBlurred
        className="animate-pulse p-0 border-none bg-background/60 dark:bg-default-100/50 w-[180px] mt-3 ml-6"
        shadow="none"
        >
          <CardBody className=" text-center p-0 max-w-[160px] m-auto">
            <h2 className=" text-center text-small pb-1 mt-1 mb-0"> por un <span className=" text-green-500">futuro</span> sostenible</h2>     
          </CardBody>
        </Card>
      </div>
      <div className=" ">
        <div id="objetivo" className="w-[350px] m-auto mt-[10rem] pt-10 content-center flex md:w-[900px]">
        <Card
          isBlurred
          className=" p-0 border-none bg-background/60 dark:bg-default-100/50 invisible md:visible md:mr-5 w-0 md:w-[40%]"
          shadow="sm"
          >
            <CardBody className=" text-center p-14">
              <Image 
                src="/img/logo2-bn.png"
                height={200}
                width={200}
                alt="logo-bn"
                className="m-auto invert opacity-80"
              />
            </CardBody>
        </Card>
        <Card
        isBlurred
        className="p-0 border-none bg-background/60 dark:bg-default-100/50 min-w-[350px] m-auto md:w-[55%]"
        shadow="sm"
        >
          <CardBody className=" p-5">
          <h1 className=" font-sans text-2xl">Objetivos</h1>
          <p className=" text-justify">Lo que nos llevó a crear RayenCO2 es la necesidad de dispositvos accesibles y amigables que detecten gases nocivos
            para nuestro cuerpo, como el humo de cigarros, gas licuado, gas metano y monoxido de carbono. <br/> Ah visto mapas de co2, contaminación? Porque no mostrar 
            esta información de manera fácil y de libre acceso, RayenCO2 ofrece un <a href="#mapa">mapa</a> que muestra la calidad del aire en relación a las párticulas por millón de gases nocivos en el ambiente
          </p>     
          </CardBody>
        </Card>
        </div>
      </div>
      <p className=" pt-96" id="mapa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae quae perspiciatis labore ducimus recusandae fuga, molestias obcaecati impedit beatae, unde est nisi. Voluptate placeat quos, corrupti perferendis voluptatum ab.
      At ullam doloribus debitis eveniet vitae. Quo, voluptatibus, nihil harum veritatis rerum temporibus necessitatibus pariatur accusamus ipsum ipsa consequuntur consequatur quae minima quisquam asperiores? Vel vitae eum quae non autem?
      Culpa ullam deleniti dolores blanditiis id repudiandae unde quaerat voluptatem sint maxime. Dolorem quasi aut nesciunt repellat nisi. Rerum atque quae totam adipisci eum voluptatum nostrum pariatur maiores quaerat soluta!
      Sint consequatur nam ullam, et dignissimos quo harum cumque exercitationem similique ratione! Ipsum porro eaque id facere rerum, consequuntur alias minima vero. Similique, reprehenderit voluptatum animi quibusdam libero debitis nobis.
      Fugiat sed non similique dolores, exercitationem repellat dolore temporibus repudiandae facere quae, maiores harum incidunt illo animi consequatur nobis nulla blanditiis ex possimus a, consectetur quis qui. Voluptatibus, nihil omnis?</p>
    </div>
  );
}
