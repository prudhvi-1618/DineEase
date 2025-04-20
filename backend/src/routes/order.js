const express = require("express");
const { handleCreateOrder, handleGetAllOrder, handleGetOrderById, handleGetOrderByPhone_num } = require("../controllers/order");

const router = express.Router();


router.route("/")
    .post(handleCreateOrder)
    .get(handleGetAllOrder)

router.route("/:id")
    .get(handleGetOrderById)

router.route("/history/:phone_number")
    .get(handleGetOrderByPhone_num)

module.exports = router;