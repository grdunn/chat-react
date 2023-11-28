/** @format */

import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  console.log(data.user);

  return (
    <>
      <div
        className={` ${
          data.user.displayName ? "w-2/3" : "w-full"
        } chat w-full flex flex-col bg-slate-50`}
      >
        <div className="chat__recipient bg-slate-50 h-20 border-b flex-none px-10 flex items-center">
          <p className="font-light text-slate-900">
            To: {data.user?.displayName}
          </p>
        </div>
        <div className="chat__inner bg-slate-50 p-10 relative overflow-scroll h-full">
          <Messages />
        </div>
        {data.chatId != "null" && (
          <div className="p-8">
            <Input />
          </div>
        )}
      </div>
      <div
        className={` ${
          data.user.displayName ? "w-1/3" : "hidden"
        } h-full overflow-scroll p-8 border-l chat flex flex-col bg-slate-50 items-center`}
      >
        {data.user && (
          <>
            <div className="rounded-full overflow-hidden flex-none justify-center items-center w-36 h-36">
              <img className="h-full" src={data.user.photoURL} alt="" />
            </div>
            <div className="pt-5 text-center">
              <h3 className="font-bold">{data.user.displayName}</h3>
              <p className="">test@gmail.com</p>
            </div>
            <div className="mt-6 w-full pt-5">
              <h3 className="font-bold">About</h3>
              <p className="mt-4 text-sm font-light leading-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsum quibusdam illum, voluptas praesentium cum delectus ad
                dicta accusantium adipisci exercitationem cupiditate esse
              </p>
            </div>
            <div className="mt-6 w-full pt-5">
              <h3 className="font-bold">Personal Information</h3>

              <div class="mt-6 relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-0 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Phone
                      </th>
                      <td class="px-0 py-2">914-486-0871</td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-0 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        DOB
                      </th>
                      <td class="px-0 py-2">01/08/1989</td>
                    </tr>
                    <tr class=" dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-0 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Language
                      </th>
                      <td class="px-0 py-2">English</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chat;
