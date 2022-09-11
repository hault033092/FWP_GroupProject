import React from "react";
import closeIcon from "../assets/svg/close-icon.svg";
export default function PersonDetailsPopup({ person, closeHandler }) {
  console.log(person);
  return (
    <div className="bg-[#E8AA0C] rounded-[40px] shadow-md border border-yellow-500 p-9 absolute  md:mx-auto md:max-w-3xl xl:max-w-5xl inset-0 top-10 mx-9 z-20 overflow-auto mb-10">
      <div className="space-y-5 relative">
        <div className="absolute -top-6 -right-6 cursor-pointer border border-black rounded-full p-2">
          <img
            src={closeIcon}
            className="w-3 h-3"
            alt="close icon"
            onClick={closeHandler}
          />
        </div>
        <div className="flex justify-end gap-3 font-bold text-lg italic !mt-0">
          {person.tags.map((e) => {
            return <p className="text-[#0000FF]"> {e}</p>;
          })}
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase font-bold text-white">
          {person.name}
        </h1>
        <h2 className="text-xl  lg:text-2xl xl:text-3xl">
          {person.occupation}
        </h2>
        <div className="flex gap-4 text-base flex-col md:flex-row sm:text-lg">
          <div className="basis-1/2">
            <h3 className="uppercase mb-4 font-semibold text-lg border-b border-white">
              About Me
            </h3>
            <p>{person.about}</p>
          </div>
          <div className="basis-1/2">
            <h3 className="uppercase mb-4 font-semibold text-lg border-b border-white">
              Needs
            </h3>
            <ul className="">
              {person.needs.map((e, i) => {
                return (
                  <li className="flex gap-3 ">
                    <p className="font-bold mt-[1px]">{i + 1} </p>
                    <p>{e}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <List
            title="What likes the most"
            data={person.likes}
            bgColor={"bg-[#BBF38F]"}
          />
          <List
            title="Frustrations"
            data={person.frustrations}
            bgColor={"bg-[#DE8B95]"}
          />
        </div>
      </div>
    </div>
  );
}
function List({ title, data, bgColor }) {
  return (
    <div className={` rounded-[40px] overflow-hidden basis-1/2 `}>
      <h3 className={`${bgColor} p-4 font-bold text-lg sm:text-xl text-center`}>
        {title}
      </h3>
      <ul className="bg-white space-y-8 p-4 h-full">
        {data.map((e, i) => {
          return (
            <li className="flex gap-3 ">
              <p className="font-bold mt-[1px]">{i + 1} </p>
              <p>{e}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
