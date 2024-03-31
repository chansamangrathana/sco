import { Metadata } from 'next'
import React from 'react'
import {
  BiGlobe,
  BiLogoFacebook,
  BiLogoTelegram,
  BiLogoYoutube,
  BiPhone,
  BiPointer,
  BiShowAlt,
} from "react-icons/bi";
import { FaTerminal } from "react-icons/fa6";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { List } from "flowbite-react";
import { BsChat } from "react-icons/bs";
import { FaMapMarker } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const metadata: Metadata = {
	title: "Hello CSTAD ",
	description: "CSTAD are providing the best service for you!",
}

export default function page() {
  return (
    <>
    <div className="bg-gray-100 mx-36">
      <div className=" container mx-auto grid grid-cols-1 gap-4 my-8 ">
        <div className="bg-white p-6 grid grid-cols-1 gap-2">
          <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
            <FaTerminal className="text-blue-900" />
            <span className="ml-2">
              WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
            </span>
          </h1>
          <p>
            CSTAD is a noteworthy science and technology center in Cambodia.
            CSTAD has routed Cambodian students to advanced science and
            technology, research, and develop digital skills and our graduates
            have been guaranteed excellent job opportunities with the Top IT
            company. CSTAD will continue to provide high-quality training with
            the latest methodology, and roadmap as well as the best choice for
            those who want to be an IT expert in Cambodia.
          </p>
          <div className="grid place-content-center">
            <img
              src="https://istad.co/resources/img/logo_md.png"
              className="w-80"
            />
          </div>
        </div>
        <div className="bg-white p-6 grid grid-cols-1 gap-2">
          <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
            <BiShowAlt className="text-blue-900" />
            <span className="ml-2 uppercase">vision</span>
          </h1>
          <p>Advanced IT Institute in Cambodia</p>
        </div>
        <div className="bg-white p-6 grid grid-cols-1 gap-2">
          <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
            <GoGoal className="text-blue-900" />
            <span className="ml-2 uppercase">mission</span>
          </h1>
          <List>
            <List.Item>
              Provide the latest methodology with high quality training and
              mentoring
            </List.Item>
            <List.Item>
              Build up the capacity and career of IT experts Cambodia
            </List.Item>
            <List.Item>
              Consult and connect CSTAD trainees to top IT careers
            </List.Item>
          </List>
        </div>
        <div className="bg-white p-6 grid grid-cols-1 gap-2">
          <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
            <BsChat className="text-blue-900" />
            <span className="ml-2 uppercase">Slogan</span>
          </h1>
          <p>Start your IT Career with CSTAD</p>
        </div>
        <h1 className="uppercase text-2xl font-bold text-center text-blue-800 tracking-[0.25rem] ">
          IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
        </h1>
        <div className="bg-white p-6 grid grid-cols-1 gap-2">
          <p className="flex items-center gap-2">
            <FaMapMarker className="text-blue-900" />
            No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh,
            Cambodia
          </p>
          <p className="flex items-center gap-2">
            <BiPhone className="text-blue-900" />
            (+855) 95 990 910 | (+855) 93 990 910
          </p>
          <p className="flex items-center gap-2">
            <BiLogoTelegram className="text-blue-900" />
            Telegram Channel
          </p>
          <p className="flex items-center gap-2">
            <BiLogoFacebook className="text-blue-900" />
            Facebook
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-blue-900" />
            info.istad@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <BiGlobe className="text-blue-900" />
            www.istad.co
          </p>
          <p className="flex items-center gap-2">
            <BiLogoYoutube className="text-blue-900" />
            YouTube
          </p>
        </div>
      </div>
    </div>
  </>
  )
}
