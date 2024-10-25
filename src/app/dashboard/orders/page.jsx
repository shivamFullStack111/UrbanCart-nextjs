"use client";
import { Aref_Ruqaa } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import SideBar from "../Sidebar";
import Header from "../Header";
import Image from "next/image";
import { FaBoxes, FaPencilAlt, FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Line_Chart_Products_Analytics from "./Line_Chart_for_Orders";
import { TbShoppingCartCancel, TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import axios from "axios";
import moment from "moment";

const orderss = [
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,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",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,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",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,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",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,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",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,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",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVGBYVFxUWFRUWFRUVFRUWFhUXGBUYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGhAQGjAgHyYtKy0tLSstLS0rLS0tLS0tLS0tLSstKy0tLS0tLS0tKy0tLS0tLS8tLS0tLS0tLS0tLf/AABEIARwAsQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAwYEAwcCBgMAAAABAgADEQQSITEFQVEGEyJhcYEHMpGhFLHRI0JSYoLB8HKyM0OSosLhU2Nz/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgIBBAECBQUAAAAAAAAAAAECEQMEEiExQRNhIjJRcYGRsdHh8P/aAAwDAQACEQMRAD8A6fmPUwzGJCaGYuYwzGJCALmMMxiQkAC3nGlj1iynxXHpQpNVc2Cj6k7AeZOkggg4txqlhheq4B5LmAY+gJmncS+J6KW7kBgALFs3iY+YPhAF+pJnOeOcVbFV3qO4DbWubCxIuByNph6lrkg+50+oiy6R1LC/FdgwFSmpWxJIzA76KBc67fWbXwbt3hcQVUMUZr6OQLW21vznn1nvpHKxFukCj1KlS4uDcHYg3B947Mes478Me1pp1fw9Z2yMLJdrqp0tYE2UCx23zeU7DJRDFzHrDMesSEkgXMesMx6xIQBcx6xcx6xsIAuY9T9YZj1iQgC5j1hEhACEIQAhCEAIQhDAk538Xcay06afutdtwAWUgDTcnXlOiTn/AMVsEav4UAXu7LYbm4U29LKZV8ExVujjQ1PLnf3lrC4Ave2pAvbmQPLrNtwXY16jKyiw0DjmCDrYEazoWD7F0gA2UB7C5tvaYPMvB1LC/JxE4cKofWw0JtsfWSYbCmqSF9Z1XH8JwmGcgkGo4KlLizryDLzI67zG4fhiUVIWmUFyRc3385V5nXReOBN9nO3otTYNbVSD9DPR3CsT3tClV08aI+huPEoOhnHeL4Zbgkb3G06h2KKjBYdMwJ7sEC4uVubEDpa01xTtcnPmhtZnIQhNjEIQhACEIQAhCEAIQhACEICAEIQgBCEIAkxnHsEKtMHnSdaq/wBB8Q91LCZMyvjUdqbLTIVyCFYi4BI3tKtWE6dmu4r8SjXoKh9d7DnL+C4u1RGzWVlBuOlpyDtT+IVyrvVG4AZm1ANvCToRy0mb+FvDXd375M1MC4DgkZzzAOm043CldnoqVuqExnaKhQq1anctWrEkAk5VW2nzan6CR8G7Q18VWCGmgUgk6nwjmb8+lrDUjaZDiXYoV8QwpVBTJ1KkG1+ZW23pLeC7FthbsaoN97XGg5SG47fcslPd7DMVhASRvbf0idlFzYmnlJGR8tvLISfrMpw6mCGvz09pP2F4QwP4h1I3y33Ym4J9ANIxptoTkoqVm5whCd55gQhCAEIQgBCEIAQhCAJeF42EggdC8bCQB14XjbxbwAiGF40mSDH43CU2sHUFddCOZNzDGBqaL+HRLgjQnKLczoDrLlVLiYriVaoEy0/mNhf+EX1P0nFmjtlZ6GnnuVMxtDCYkVc9Solg2cADULqCpN9by5xquGWwM1qpgWL3Nas7+XgVfU6kmXaqsEAJLEDc7mYs63Edw5rNbrabN2ZW2HVf4Sy/RjNOoYlKZ7yo2VV+pPIAc5snY7iAq035HOWA/ladGB8nFqFas2GES8LzrOKxYRIQBYQhJAQhCAEIQgDYRYSCBLQtFi2gDIR1oWkAYYySkRjCAMlbEYe5uPcS1aR166ILuyqL2BYgXJ2AvuZWcVJUy8JuLtGMqcVw9IG7KPcTT+O9qkNxT19JkuKcLSsucLo3iHofOa5iOzpvoNJ5560VwYWpiXrvdjfoOQHlNm4Ljnw7Ky623HUHcRlHgXd8o7iLLRTMxAvcC5A1tvrLJ88CSVcnRuF8RSugdPQg2uD0NpcnBeN9qGKilhmamgFmcFleqfXcJ5bnn0l7sx8R8RhgtOqvfUhpqT3qjyc/NbofqJ3Rba5PKnFJ8HbLwvMbwTjlDF0+8oVAw5jZlPRlOoMyMsZi3hEhAFi3jYQB14kSEkD4QhJJCEIQAhCAgCRhkHEuIUqFM1azhEHM8z0A3J8hOS9qviNVxF6WGvRp7Fv+a/uPlHpr5yoSs3btV22oYS6JarW2yA+FD/O3L0GvpOcLxerWetiq7lnp0yUGyq9RlprlXkBnJ9hrffWqGpJ5D7mZHheIXM9N2yrVRqeY7K2hQtroLi1/OVZdKjcuB9usPTopSrLUBRQmYKHByiwOhvsBykmJ7fYJdaa1qh5DKEHuWP8AYznmOwNWk2WpTYHS2lw19QVYaMD1Es4bgxC97iG7mlfKCbGo7ZcwC0r5treIiwzA6zL0os3WaaVGeqdssTXYlFTD0hbPUI7woCQN2spbXQW1mt8Z4y+IZbs2RQAoY3JNvEx5AnoNBykOPxneWCoKdNflQcupJ3JPn/7lMy6il0ZynJ9sLyUCRLJLyxUucL4lVwzirRqGm45jmOhB0YeRnU+y/wATaNW1PFgUn27wX7pj58097jznHqh284kmyGj1EpuLg3B1B6iLacc+HPbk4cjC4lr0Dojneieh/wDr/wBvpt2QHpJKNCWhaLC0kgS0ItoQBYQhJJCEIQAixJrnxB4g1DA1WTRmy079A5s1vPLeQwcv+I/aM4quVRv2VO6J0J/ef35eQE1CmOnOPqa2kiC0oaIU6Cw5SOPdCLEggHYkGxtvY846lQBGYuqr1O59ALn8h5yG6C56JMPxevTXJTqsqnTLoRbpYg29pBXqM7ZndnY7s7Fjvfc+smpJh/46jH/Qq/8AkZOKFFtO8ZfVLj6hr39pMeSs5be/5McRI2EuYnD5dmVh1U6j1XcSq6next19doJUk1aGGDHUQjWPiEEjn3HvC8TNr7RTAEuZ3n4W4w1OHUsxuaZenruArHKP+krOEsNJ1H4K8S1r4YncLWX28D/+ElESOpQhCXKBCEIAQgYQAhCEAJzP4x8WstLCqdz3r+11Qf7j7CdLZranQDczzz2t4r+KxNStyZjl8kXwp9gD7yrJRiEjyZAh1MyvBMKtR2zDNkp1amS5UMadMsoLAggXte2sqWbo6Fh+HYU4WjRqP3lk7xlRGqBhc2dSFuFNr2IvrrMFwDsUuMrhAwSkt8zKGzsP3QqsN+twNBpflmuxOPoGktKvXFAI9Sjl74pnKOVGRC1y1itwo3Nze9h0mlxPCUE8Ja4tdjRqgnpdsgEiT4ISrlmm4n4N4XvwqYuoisoPdlVZtL57OdBfw2uDs2/Krxj4VYbD0nqjE1KhCnIhCAFrEeJhuL8hb3ju0XxC7xQaVQJaoBYMM6WG9txzFusw/Cu1Skp3tVVVLgBmBKobghRuzG3/AHDkJEb2uT/TzRlkyvcoxXfF+LNY4LTpCr+0oDMmhNTNYfyrmNieV/p1je2eJzOhCFAy7HNdgDa+uu6zo+H4fSxrF6aUnGpyB1zMvMEoC2v+XtNY7XURXq08GUFFkDVLhNKQCtlQ3WmchWmxJsflFr7HRy8FYY90lNnOZG3zCPB9vKR1N5U6SRNyfSOURtE7nz/tJFgA82HsJxL8PjqDk2Ut3bf6avg+gJU+0154/l0/tAZ6htEmO7N8S/E4WjX5uilvJwLOPZgZkZoZhCEIAkLxsLypA68W8ZeLeSDWviNxX8PgaljZ6v7Ff675z7IG+04RXnQPi7xLPiUoA+GilyP56mv2UL9TOe1TrKs0RGkucPrupdUBL1Eaktt71Blt15yonOZLgNWmtam1UHKtRGLAtcBTe1l32+0q3SssuztjdhMJg8PQrd3+3o1ErVKzbkuw75mFyuVQzEDW2X3Oqdquzi16rs+IqgXt4TlttYgahxpztvym9cP7SpxCmyoMtRPCyMdbkXBsp0+u95V4F2KpZjUqsxy6LSFUiium2S5012nPLfKVxdfgtKMdtNX9PZnNuyPZNa+KrUaqVcQtFCRkqENeq1qZaoCuwQnL1c9DMBhOGu2Vqldqap4bqL3qDw1M7Ag5w3Mggj6TtfapMKi0aVKnU8FRO8/CiwSldswc7G9zoLv4riWeMcBwVelmphVzKMtWmSzHSwLqbiobAC7XM6IyoiMI8Obf4/s5HXamcP3LVs7OygMReoGzC7r/AAkAE38pRrYt8Ni/2tRmVkC94wzkL+Hq0tf4mzVAdTrpLGK4NUWo5DiqqnKH+QjroPD76ypxegpQkPnZCunXe6nW43/PqJb4KfPJXU6jLkzRko/B1z2/PP7GuVCL6Xt5m59SZXxBkxlXGHaQCbCHwn1MnWVsE2hEsiABj4yPgHXvg1xLPh6uHJ1pPmUfyVdf9wf6zoU4X8MOJ9xxBFJstcGielz4kP8A1KB/VO6S6KPsIQhJIG2haOiSCBtoCOmJ7V41qOErVEVmfIVUKCTdvCDYche/tIBw/tPjO+xdere4ao1j/KDlX7ATBVDrLDmVnlTUdT2MnouRZhc5dtzrqQB5k305yvSOhl/guTvl7x8i63YaEWFxry1trJSt0Q2krfRtvZXB0HPemtUSpc01Sm/dsw5lyVLZrnYWtoNZJ2gFfClRTr1GzHModsxZi2xJ0528iRvnBmt9rsMFqrUvZaoFRTqtmIuGv+7cAEHTaP43x818KudgamY2ta9wDr5DNlP0m7jFJo8xZJzlGabaf4r/AHk3LAduatSmC1jp8hCg6HpzG495r1bjDVqtlApqTbKtx3j77C+gAudDyAFyLTcASm+G/aoSS5cEFSrsAoqAaaNqdNjdemmKF6XEP2i5LHwDldRfS+5DKh9ROXdVtI9NY7W1s3LA9jKts7YuorbqFUZV8nuSWNr6A29dprXayiqUkZXBIqPRIuC2YKjm5tqMtQDqDcdLQcQ49isZjKRou6ojL3aKxVTltnZgDqS1wSeVvc7YYelSVKKUr1FIqVa2YsWZ1sVIt4RoDYabHQkg8cJT9RKbtvml4O2eOPp3BUlx9zVjKmM3EtmVsStzO44xmCaxtMhMWhsZk1aALFjlQnYfaJi6TIhe2gt6am0jci211YUqrIyupsyMHU9GUhh9wJ6U4PxFMTQp10+WooYeR5g+YNx7Ti/Y34e4jG0xXquKFFtV8Oao4/iCkgKvQnfpadj7PcGTB4dMPTZmVM1i5BYlmLHYAbky6M5GRhCEsVCEIQAhCEA13tR2WwuJRi9FBVIstQAqwY7ElbZrb2N5zPjXw2rUhelVWoOhGVv/AHOyYk3YDprMdxAfacmTI1KkduHCnC2ef6/DatH/AIiFQ2x5HrIae83/AOJNUGlSFtQ518ipmhUhNIS3KzLLBRlReNUVEy1GdgBc38WXKQqqtztqOlvOOwfBqbmxbxBVazC3hsoUX5m1voZSD2zDqLeniDf+MkXFEOHXQi1vYW/L85sp12cU8Ld7XRmRxlqIVEQIEqLUCkk3sCG1t8rrl5aW0lXjONpYqo1VyQXJyrr4VGgFtrWHvvMLiGtpGoSbeQtKp07R3YMrxLpP7mf4Dj/wYdlVSzI2Vv4fGoGn7w8RO8pcc4w1eozBmyGwF1RGIAHz5Pm12uTKVXEHUcrZR5DOr/msgvMViipudcl8mom1sTpBIqg/KSmRPz9DNTnKtp2D4Y9l0FAYmvTVnqWNMOAclPk1jzbf0tOedkuD/i8TSokeEnNU/wDzXVvrov8AVPQeUIumgGgH5TDNOlSOjBC3uZrvaWnTy2yL9BIuAcJoVWWjVpK6ZA+VhcFrhhcc9QNJBxtyzazLdlsIe+d+Sqqe/wDgmWD5jfU8QNsGkI2F53Hlj4kbeLAHwhCWJCEIQCle7sfb6TG8WewIl+gdz6max2kxxW9p5rduz1scapGgdv8AFZnRB+6CT72A/vNYQaS3xuvnqsb35SpynXjVRRw5nc2NMFiXi8jLmZWrnWPpyFzrJ0EAY5jbx1SRwB95Gx1jryGqYB1L4NcN8FXEHckU19F8TfdgP6Z0HiuIyrbrMT2E4ccNgqSMLNlzv5M5zEe17e0j43i7mcOSVtnpYoVFGMa9SqFAvr9fKb/w/CCmgXnux6sd5rfY7h2ZjXYaDRfM9fabfadGnhSs5NXkuW1eBtolo6Fp0nGNtFjrRIAsIQkkhG1TYE+R/KOkWIPh9dJWTpMtFW0imxyr7TnHa7FHNkS5ZiFAG5JNgB9Zu/HMXkQzV+xXDu/rvjqg/Z0L92OrgXLf0j7nynBCO50etKShByOX4ukVqOjbqzKeeqkg6+okbxzPmJc7sSx9WNz+cjadp5bd8jYtTaKokWJMArrvLKyvTGsswCJowiOJhAI5sfYHgX4rFrmF6dG1R+hN/AvuRf0UzW6eZ3CIpZmIVVAuWJ0AE7p2R4IMBhcrWNVvHUI/jI0UHoBYe3nM8s9sTbDDdIy+PxQVcomu0KDYiqEXbmegG5icQxBOnMza+yeDRaC1FOY1QHzdVOq28uc5cWNzl7HZmyenH3MthqC00CKLBRYSSEJ6SVHkhCEIAQhCAJeEjDRQ0ggfIMU2w95MDKlY3c+QAmWZ1E306uaNH7W4l6jChTF3dgijzPOba+BXC4B6Sf8ALoVNerZGLN7m5lLh3Ch+Oas2tqfgHQk2Zvpp/VMl2orZMHiW6Uav+wgfeUwRqNm2ryXJR+h512Fo2OaIJqc45BKdc6y620x7nWAOoiPr1QBGI1gTG4TC1KzhFRqjn5UUXJ9eg84BF3pOwma4B2UxuN8VFAE/+RyVp+xtdvYGbv2T+HSIVqY/IzH5MONVB38ZHzn+Uaes6WCqAKLAAWAGgAHQchMZ5Uujohgb5kab2I7Cpgf21ZlqV9gQPBTB3y31JPX201vk+LYu7ZfrLfE+IWuB/hmp8b4mlGm1Z7kCwsN2Y7KP82BnNJubO2EY417GA7W8Sfw4akf2tchdNwrHKAPNjp6AztuDw4p00pjZFVB6KAB+U5d8K+B/iqr8Ur2uHKUUGoUqAM2vQGw87mdXndihtVHl5sm+VhCEJqZBCEIAQhCAVrxbxsJUgcDKpewLHS5k1ZrKT0BmD7TYnLRUC/iZVFtwWNh95z530jt0cbbZYxVXLVosDqXCW6hrg/r7SL4g1LcOxHmqj61FH95IrK2KRSPkV2HqMq3/AO4yj8Sntw6t5mkPrVSWw/KV1Xzr7HEiI0RzGCCaGIlfa0qZZbqmVyYA0gAX6Tcuy/bylhcOKVPAIKoAVqwYDvLfvObZr+VyPSaXVGhjsFSOnnIasmMnF2jp3YbjNbF4ypUrPpTpnKg0UF2UXA6gAj+qbhicWq3tqT/nsJoPYzBPTBdTcMNj/abHXxOmWzL6KXvb3/vKZNNPuKOjDrMfUnyQYjEXN76+U0Lt5xMVGTDprkOdz/ORYL7Am/8Aqm5VqgGwbrcrv0v0H6zm3E8Lkqs2viJOu9215+8rjwyi7ki2fUwmtsWdh+CuJDcOyDenWqA/1ZXH2b7Tfpz74M8MNLCVKxItiKmZQOQp3Qk+ZbN7AToM6UcLCEISSAhCEAIQhAKsIQlSBHFwQec0/tUhFOhVYllo1EFQAWGUVLtUa21gR9JuMxmNwpGY2zI2jL1Eyyp9o69LKNtNlpKCGoKy2+TKCDe4Yqbjy0mp/FrFBcGtPnUqqPZAXP3AmS4DUFGoMOrHuyt6am5yD+EE7AWOh8pe7RcDo4ymtOqpOVsykEgg2I5estCmuDPOpRn8XJwK0com/cV7AZNabFh95gavZ4ruHB/zymnpsx9WJrbDWRPNkHCkVhmUnXW95DW4VlqXX5djoLAkC35yfTfkeovBh6eAqtshA6nT85leEcHJYLbN6bAf3maw2Cdjltcf59JtfBOGikLldZpHEjKWVk2Fw60qYUJtvIcRlOmW3t772mSqOdZQr0KhGg+ptNjnMRjEBNg1h6GVcdwEV6FUIhNQKHS27Muy++0yFTAW+bfoJa4LX7vEU13BuCehJFvXaUmuDSDpm4dkuFHCYOjQa2ZFu1ts7Eu33Yj2mXjbwvOc6R0Il4XiwLCF4SQEIRIBWhCEqQEIQgCZRe9hfrJF2MZHLzkrsiXRDUlCsOlpeqLKdQCbxMGYjjOEDU30F7aG2swHDsIGTbxAgMTrysp8tPyM2vEAG+5lKlhFV9AQGFjvrz/WXpFLY3A8MI10P6zIFeRH0lyjhrKMpjHuDtFiijU05Ss9Q8wekyNR/KV6gG9v8vIJoxNSppt6+sxVK5fPzXUf9VvaZTG1hqNZQ4ZTzO46qfXckfl9ol0EdHpvcA9QD9RHAytgf+Gn+lfyk85jqHho4NIrwvIBMGi3kN4oaATXiSPNCSCDMdSRZRzJOu22lra8yDpttdVuWG9vQCwtzubnUchz95ZGHANxe/8AqNuXLbl0ifhlvfW/qbbW+Xb7SCSqocgaDMcg5WGYgE5Q1za53tfLHa2Ug6E2NxqfHluNrddtfvJ1wqi9r62v4iTptqTp7RRhVFt9Ndzve9yb3JvzN5BJWQm5vtfKBz+UG5PqbW5WvrsFTNka5AKhGZiPCAwYsBryA3J0zAkcpZ/Drp5EkeRIyk+emmsKeDTXS/ynUk3y6rqeh1t11kohlF2Jy768jlB12JzEZRbW2+vIi0gaiSTvqHI0sAKd/mPU2/7l03MyNbAod7n1Zjf118XobyvWwi3La311vfcWOh0BtpcdT1M0TZk0jFVV85UetlUEHYj3mYqYBTuW+36SHE8OQC2v2/SbKSMWmXqNmAYbEfYxmISwknZ+iO6sSdCRy2v6S3iMKOp+36Sm7kuo8GEddJUrATNtg16n7fpK9Xh6m+p0Vjy5AnpJ3IKJpuOe5OmkfwYX1At4gD9W/WZbE8KQndvqP0k3C+GorAAtuNyP0kOXAUeTPU1sAOmkWWDRHnE7kdTy+9/0mB0UQQk/cjzh3I84FEEWTdyPOHcjzgEN4SfuR5wkkH//2Q==",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
  {
    _id: {
      $oid: "670faabae445ffd2a3f97237",
    },
    user: {
      _id: "6705243455ba66de6054f5c0",
      name: "shivam",
      email: "shivam@gmail.com",
      phoneNumber: 9417313393,
      password: "$2b$10$MeyczX122taqtQkdxnm7ouWNbnhPh5alGrKQ9Z/SNUL5L2SUb0Dwe",
      __v: 5,
      isAdmin: true,
      addressess: [],
      addresses: [
        {
          addressType: "home",
          name: "hno16 new bashirpura jalandhar",
          phoneNumber: "07838972340",
          country: "IN",
          pincode: "144001",
          state: "MP",
          appartment: "yghh",
        },
      ],
      updatedAt: "2024-10-15T10:21:14.664Z",
    },
    userEmail: "shivam@gmail.com",
    orderid: "order_P9hXDQ2ITw5ET5",
    totalMRP: 376,
    subTotal: 402.32,
    cart: [
      {
        _id: "670bf4cead142dbfc8831323",
        title: "fdbjf",
        gender: "men",
        category: "clothing",
        brand: "fcdjnk",
        clothType: "sleepwear",
        stockKeepingUnit: 2343,
        mrpPrice: 21,
        sellingPrice: 324,
        stock: 43324,
        totalSale: 0,
        description: "fvdmbfkv",
        images: [
          "data:image/webp;base64,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",
        ],
        totalRating: 0,
        colors: [
          {
            name: "Gold",
            color: "#FFD700",
            _id: "670bf4cead142dbfc8831324",
          },
          {
            name: "Brown",
            color: "#A52A2A",
            _id: "670bf4cead142dbfc8831325",
          },
          {
            name: "Slate Gray",
            color: "#708090",
            _id: "670bf4cead142dbfc8831326",
          },
          {
            name: "Dark Orange",
            color: "#FF8C00",
            _id: "670bf4cead142dbfc8831327",
          },
        ],
        sizes: ["XXL", "XL"],
        material: "leather",
        clothPattern: "striped",
        fitType: "relaxed fit",
        neckType: "round neck",
        heelHeight: 0,
        soleMaterial: "",
        createdAt: "2024-10-13T16:26:54.415Z",
        updatedAt: "2024-10-13T16:26:54.415Z",
        __v: 0,
      },
      {
        totalSale: 0,
        totalRating: 0,
        heelHeight: 0,
        soleMaterial: "",
        _id: "67092b6e8dbe25aca727c997",
        tittle: "fdv",
        gender: "women",
        category: "clothing",
        brand: "efd",
        clothType: "romper",
        stockKeepingUnit: 23,
        mrpPrice: 42,
        sellingPrice: 52,
        stock: 65,
        description: "d ",
        images: [
          "data:image/jpeg;base64,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",
        ],
        colors: [],
        sizes: [],
        __v: 0,
      },
    ],
    discount: 11.28,
    delivery: 0,
    address: {
      addressType: "home",
      name: "hno16 new bashirpura jalandhar",
      phoneNumber: "07838972340",
      country: "IN",
      pincode: "144001",
      state: "MP",
      appartment: "yghh",
    },
    status: "cancel",
    createdAt: {
      $date: "2024-10-16T11:59:54.378Z",
    },
    updatedAt: {
      $date: "2024-10-16T13:02:45.183Z",
    },
    __v: 0,
    reason: "i dont know why",
  },
];

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Orders = ({ active = 1 }) => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [orders, setorders] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalOrders, settotalOrders] = useState(1);

  const getOrders = async (pageNumber) => {
    try {
      const res = await axios.post("/api/get-orders-by-pageNumber", {
        pageNumber,
      });
      settotalOrders(res?.data?.totalOrders);
      setorders(res?.data?.orders);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => [getOrders(1)], []);

  const handleExport = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save as Excel file
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "users.xlsx");
  };

  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <SideBar collapse={collapse} setcollapse={setcollapse} active={5} />

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <Header collapse={collapse} setcollapse={setcollapse} />

        {/* Right main */}
        <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover bg-white overflow-y-scroll">
          {/* boxes  */}
          <div className="grid grid-cols-1 500px:grid-cols-2  1000px:grid-cols-4 pl-10 pr-20 500px:pl-4 500px:pr-14  mt-4">
            {/* box 1  */}
            <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
              <div className="relative h-20 w-20">
                <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-orange-200">
                  <FaBoxes className="text-gray-600 text-3xl" />
                </div>
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                <p className="text-sm ">TOTAL ORDERS</p>
                <p className="font-semibold">4,832</p>
              </div>
            </div>
            {/* box 1  */}
            <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
              <div className="relative h-20 w-20">
                <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-green-200">
                  <TbShoppingCartCancel className="text-gray-600 text-3xl" />
                </div>
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                <p className="text-sm ">CANCEL ORDERS</p>
                <p className="font-semibold">4,832</p>
              </div>
            </div>
            {/* box 1  */}

            {/* box 1  */}
            <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
              <div className="relative h-20 w-20">
                <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-orange-200">
                  <TbTruckDelivery className="text-gray-600 text-3xl" />
                </div>
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                <p className="text-sm ">ORDER DELIVERING</p>
                <p className="font-semibold">4,832</p>
              </div>
            </div>
            {/* box 1  */}
            <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
              <div className="relative h-20 w-20">
                <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-green-200">
                  <AiOutlineDeliveredProcedure className="text-gray-600 text-3xl" />
                </div>
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                <p className="text-sm ">ORDER DELIVERED</p>
                <p className="font-semibold">4,832</p>
              </div>
            </div>
          </div>

          <h1 className=" text-xl m-3 600px:text-2xl 800px:text-3xl font-extrabold text-gray-600">
            Orders Analytics
          </h1>

          <div className="flex justify-center mt-6 800px:mt-10 ">
            <div className=" w-[80vw] max-w-[85vw]  h-[60vw]  800px:w-[60vw] 1200px:w-[50vw] 800px:h-[30vw]">
              {/* chart here......  */}
              <Line_Chart_Products_Analytics />
            </div>
          </div>

          {/* map all users list  */}
          <h1 className=" text-lg m-3 600px:text-xl 800px:text-xl font-bold text-gray-600">
            Users
          </h1>
          <div className="overflow-x-scroll p-2 max-w-[85vw]  overflow-visible w-full">
            <table className="w-full">
              <thead className="w-full">
                <tr>
                  <th className="px-2">Order Id</th>
                  <th className="px-2">Order On</th>
                  <th className="px-2">Coustomer </th>
                  <th className="px-2">Total</th>
                  <th className="px-2">Payment Type</th>
                  <th className="px-2">Items</th>
                  <th className="px-2">Status</th>
                  <th className="px-2">Actions</th>
                </tr>
              </thead>
              <tbody className="w-full  ">
                {orders?.map((order, i) => {
                  return (
                    <tr
                      key={i}
                      // className=""
                      className="py-10"
                    >
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>#{order?._id}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4 min-w-36">
                        <div className="flex justify-center">
                          <p>{moment(new Date()).format("MMM Do YYYY")}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{order?.user?.name}</p>
                        </div>
                      </td>

                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{order?.subTotal}</p>
                        </div>
                      </td>

                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>Online</p>
                        </div>
                      </td>

                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{order?.cart?.length}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{order?.status}</p>
                        </div>
                      </td>

                      <td className="py-2 px-4">
                        <div className="flex justify-center items-center gap-2">
                          <div className="flex gap-3 ">
                            <div className="px-3 rounded-lg py-1 bg-blue-200">
                              <FaEye
                                size={22}
                                className=" hover:scale-110 cursor-pointer transition-all duration-200 text-gray-500 "
                              />
                            </div>
                            <div className="px-3 rounded-lg py-1 bg-orange-200">
                              <FaPencilAlt
                                size={22}
                                className="hover:scale-110 cursor-pointer transition-all duration-200 text-orange-400           "
                              />
                            </div>
                            <div className="px-3 rounded-lg py-1 bg-red-200">
                              <MdDelete
                                size={22}
                                className=" hover:scale-110 cursor-pointer transition-all duration-200 text-red-400 "
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* prev next button  */}
          </div>
          {/* prev next button  */}
          <div className="w-full  flex justify-end pb-10">
            <div className="ml-auto flex p-3 ">
              {[
                ...Array(
                  totalOrders / 8 > Math.floor(totalOrders / 8)
                    ? Math.floor(totalOrders / 8) + 1
                    : Math.floor(totalOrders / 8)
                ).keys(),
              ].map((i) => (
                <p
                  onClick={() => {
                    setcurrentPage(i + 1);
                    getOrders(i + 1);
                  }}
                  key={i}
                  className={`px-4 py-1   border hover:bg-orange-100 cursor-pointer text-orange-400  ${
                    currentPage == i + 1 && "bg-orange-400 text-white"
                  }`}
                >
                  {i + 1}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
