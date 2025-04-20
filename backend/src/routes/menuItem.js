const {
    handleAllMenu,
handleCreateMenuItem,
    handleMenuItem,
    handleUpdateMenuItem,
    handleDeleteMenuItem,
    handleAllMenuItemByCategory
} = require("../controllers/menuItem")
const express = require("express");

const router = express.Router();

router.route('/')
.get(handleAllMenu)
.post(handleCreateMenuItem)

router.route('/:id')
    .get(handleMenuItem)
    .put(handleUpdateMenuItem)
    .delete(handleDeleteMenuItem)

router.route('/category/:category')
    .get(handleAllMenuItemByCategory)

module.exports = router;