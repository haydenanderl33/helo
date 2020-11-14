const bcrypt = require('bcrypt')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const foundUser = await db.check_user(id)
        if(foundUser[0]){
            return res.status(400).send('Already registered')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(salt, password)
        const[newUser] = await db.add_user([username, hash])
        req.user = {
            id: newUser.id,
            username: newUser.username,
            profile_pic: "https://robohash.org/WC0.png?set=set1&size=150x150"
        }
        res.status(200).send(req.user)
    }
}