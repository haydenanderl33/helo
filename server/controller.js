const bcrypt = require('bcrypt')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        // console.log(req.body)
        const foundUser = await db.check_user(username)
        // console.log(foundUser[0])
        if(foundUser[0]){
            return res.status(400).send('Already registered yo')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.add_user([username, hash, "https://robohash.org/WC0.png?set=set1&size=150x150" ])
        // const response = await db.add_user([username, hash, "https://robohash.org/WC0.png?set=set1&size=150x150" ])
        // console.log(response)
        req.user = {
            id: newUser.id,
            username: newUser.username,
            profile_pic: newUser.profile_pic
        }
        res.status(200).send(req.user)
    },
    login: async (req,res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [foundUser] = await db.check_user(username)
        // console.log(foundUser)
        if(!foundUser){
            return res.status(401).send("Incorrect Login Info")
        }
        const aunthenticated = bcrypt.compareSync(password, foundUser.password)
        if(aunthenticated){
            req.user = {
                id: foundUser.id,
                username: foundUser.username,
                profile_pic: foundUser.profile_pic
            }
            res.status(200).send(req.user)
        } else {
            res.status(401).send("Incorrect Login Info")
        }

    }
}