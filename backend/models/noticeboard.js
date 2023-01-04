/*model and schema for noticeboard messages*/

const express = require("express");
const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    description: String,
    date: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  },
);

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
