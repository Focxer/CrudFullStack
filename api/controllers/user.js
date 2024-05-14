import {db} from "../db.js"

export const getUsers = (_, res) => {
    const query = "SELECT * FROM tb_user"
    
    db.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const query = "INSERT INTO tb_user(`name`, `email`, `phone`, `birth_date`) VALUES(?)"

    const values = req.body
    const params = [
        values.name,
        values.email,
        values.phone,
        values.birth_date
    ]

    db.query(query, [params], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário Cadastrado")
    })
}

export const updateUser = (req, res) => {
    const query = "UPDATE tb_user SET `name`=?, `email`=?, `phone`=?, `birth_date`=? WHERE id=?"

    const values = req.body
    const params = [
        values.name,
        values.email,
        values.phone,
        values.birth_date
    ]

    db.query(query, [...params, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário Atualizado")
    })
}

export const deleteUser = (req, res) => {
    const query = "DELETE FROM tb_user WHERE id=?"

    db.query(query, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário Removido")
    })
}