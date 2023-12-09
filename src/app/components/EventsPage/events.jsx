"use client"
import React from 'react'
import Image from "next/image";
import { useState } from "react";
import eventsData from "./event_data"
import Setter from "../eventsSetter"
import EventsList from "../eventsList"

const Events = () => {

  return (
    <div className="flex gap-[30px] justify-start px-[50px] py-[20px]">
      <Setter />
      <EventsList />
    </div>
  )
}

export default Events