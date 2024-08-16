import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../../data/admin/dummy";
import  useGeneralContext  from "../../context/GeneralContext";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Languages = [
  { id: 'rtl', name: 'fa' },
  { id: 'ltr', name: 'en' },
];

const ThemeSettings = () => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
    setLng,
    setCurrentLng,
    currentLng,
  } = useGeneralContext();

  console.log(currentLng);

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 ltr:right-0 rtl:left-0">
      <div className="ltr:float-right rtl:float-left h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 lrt:ml-4 rtl:mr-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ltr:ml-4 rtl:mr-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="light"
              className="ltr:ml-2 rtl:mr-2 text-md cursor-pointer"
            >
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="dark"
              className="ltr:ml-2 rtl:mr-2 text-md cursor-pointer"
            >
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ltr:ml-4 rtl:mr-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ltr:ml-2 rtl:mr-2 text-2xl text-white ${item.color === currentColor ? "block" : "hidden"
                        }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ltr:ml-4 rtl:mr-4">
          <div className="pt-2 w-full">
            <p className="font-semibold text-xl pb-4">Language</p>
            <Listbox value={currentLng} onChange={setLng}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 ltr:pl-3 rtl:pr-3 ltr:pr-10 rtl:pl-10 ltr:text-left rtl:text-right shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate uppercase">{currentLng.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-2 rtl:pl-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {Languages.map((language, languageIdx) => (
                      <Listbox.Option
                        key={languageIdx}
                        className="relative cursor-default select-none py-2 ltr:pr-10 rtl:pl-10 ltr:pl-4 rtl:pr-4 text-gray-900"
                        value={language}
                      >
                        <span lassName="block truncate font-medium">
                          {language.name}
                        </span>
                        {currentLng.name == language.name ? (
                          <span
                            style={{ color: currentColor }}
                            className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-3 rtl:pl-3">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}


                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;