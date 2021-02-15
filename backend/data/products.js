const Product = require("../models/Product");

const products = [
    {
      name: "DEMECLOCYCLINE HCL 150MG",
      imageUrl:
        "https://images.unsplash.com/photo-1522422263604-6c2ac26bfdf7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHRhYmxldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "AMNEAL",
      price: 49,
      countInStock: 15,
    },
    {
      name: "URSODIOL 250MG",
      imageUrl:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRhYmxldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "TEVA",
      price: 10,
      countInStock: 10,
    },
    {
      name: "RISEDRONATE SOD 5MG",
      imageUrl:
        "https://images.unsplash.com/photo-1588718889344-f7bd7a565d20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fHRhYmxldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "GREENSTON",
      price: 35,
      countInStock: 5,
    },
    {
      name: "CAMRESE 0.15MG/0.03MG-0.01MG",
      imageUrl:
        "https://images.unsplash.com/photo-1600709206776-d0ddb1cb788c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHRhYmxldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "TEVA",
      price: 50,
      countInStock: 25,
    },
    {
      name: "LINEZOLID 600MG",
      imageUrl:
        "https://images.unsplash.com/photo-https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHRhYmxldHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "GREENSTONE",
      price: 23,
      countInStock: 4,
    },
    {
      name: "SUCRALFATE 1GM",
      imageUrl:
        "https://images.unsplash.com/photo-1597068596627-717bd7124319?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHRhYmxldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "TEVA",
      price: 14,
      countInStock: 10,
    },
  ];
  
  module.exports = products