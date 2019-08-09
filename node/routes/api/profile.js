const express = require("../../node_modules/express")
const router = express.Router()
const passport = require("../../node_modules/passport/lib")

const Profile = require("../../database/schema/Profile")
/**
 * 添加信息
 */
//passport 验证token 
router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
    const profileFields = {}
    if (res.body.type) profileFields.type = req.body.type
    if (res.body.describe) profileFields.describe = req.body.describe
    if (res.body.income) profileFields.income = req.body.income
    if (res.body.expend) profileFields.expend = req.body.expend
    if (res.body.cash) profileFields.cash = req.body.cash
    if (res.body.remark) profileFields.remark = req.body.remark

    new Profile(profileFields).save().then(profile => {
        res.json(profile)
    })
})

/**
 * 获取所有信息
 */
router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    Profile.find()
        .then(profile => {
            if (!profile) {
                return res.status(404).json("没有更多内容")
            }
            res.json(profile)
        })
        .catch(err => res.status(404).json(err))
})

/**
 * 获取单个信息
 */
router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Profile.findOne({ _id: req.params.id })
        .then(profile => {
            if (!profile) {
                return res.status(404).json("没有更多内容")
            }
            res.json(profile)
        })
        .catch(err => res.status(404).json(err))
})

/**
 * 编辑信息
 */
router.post("/edit/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    const profileFields = {}
    if (res.body.type) profileFields.type = req.body.type
    if (res.body.describe) profileFields.describe = req.body.describe
    if (res.body.income) profileFields.income = req.body.income
    if (res.body.expend) profileFields.expend = req.body.expend
    if (res.body.cash) profileFields.cash = req.body.cash
    if (res.body.remark) profileFields.remark = req.body.remark

    Profile.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileFields },
        { new: true })
        .then(profile => res.json(profile))
})

/**
 * 删除信息
 */
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Profile.findOneAndRemove({ _id: req.params.id })
        .then(profile => {
            profile.save().then(profile => res.json(profile))
        })
        .catch(err => res.status(404).json("删除失败"))
})

module.exports = router