"use client"
import React from 'react'
import Image from "next/image";
import { useState } from "react";
import eventsData from "./event_data"
import Setter from "../eventsSetter"
import EventsList from "../eventsList"

const Events = () => {

  return (
    <div className="flex flex-col-reverse md:flex-row gap-[30px] justify-start px-[20px] md:px-[40px] py-[20px]">
      <Setter />
      <EventsList />
    </div>
  )
}

export default Events