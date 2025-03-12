"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ type, icon, description, features, imageUrl, CheckCircleIcon, ArrowForwardIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full max-w-md rounded-lg overflow-hidden transition-all duration-300 ${isHovered ? "shadow-lg" : ""} h-full flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`${type} visa`}
            fill
            className={`object-cover transition-all duration-300 ${isHovered ? "scale-105 brightness-90" : ""}`}
          />
          <div
            className={`absolute inset-0 ${isHovered ? "bg-blue-900/30" : ""} transition-all duration-300`}
          ></div>
        </div>

        <div
          className={`absolute -bottom-12 left-8 w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-md`}
        >
          <div className="w-12 h-12 relative flex items-center justify-center">
            {React.cloneElement(icon, {
              style: { fontSize: "40px", fill: "#032b66" }, // Custom size and color
            })}
          </div>
          <div
            className={`absolute inset-0 rounded-full bg-blue-500 transition-all duration-900 ${
              isHovered ? "scale-110 opacity-20" : "scale-0 opacity-0"
            }`}
          ></div>
        </div>
      </div>

      <div className="bg-white p-8 pt-16 flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold text-[#032b66] mb-2">{type}</h2>
        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon style={{ fill: "green", fontSize: "24px" }} className="mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            href="#"
            className={`inline-flex items-center font-medium transition-colors ${
              isHovered ? "text-blue-700" : "text-blue-900"
            }`}
          >
            Read More
            <ArrowForwardIcon style={{ fontSize: "20px", fill: "blue" }} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="h-1 bg-gray-200 relative overflow-hidden">
        <span
          className={`absolute top-0 h-[2px] bg-blue-600 transition-all duration-500 ${
            isHovered ? "w-1/2 left-0" : "w-0 left-1/2"
          }`}
        ></span>
        <span
          className={`absolute top-0 h-[2px] bg-blue-600 transition-all duration-500 ${
            isHovered ? "w-1/2 right-0" : "w-0 right-1/2"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Card;
