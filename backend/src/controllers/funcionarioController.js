const sequelize = require("sequelize");
const { Funcionario, Departamento } = require("../models")
const { Op } = sequelize;

module.exports = {

    async create(req, res) {
        const { body } = req;
        try {
            const funcionario = await Funcionario.create(body);
            return res.json(funcionario);
        } catch (error) {
            return res.json(error);
        }
    },

    async readAll(req, res) {
        const { nomeDepartamento = '', departamento = '', } = req.query;
        const options = {
            attributes: ['id', 'nomeFuncionario', 'departamentoId'],
            include: [
                {
                    model: Departamento,
                    attributes: ['nomeDepartamento', 'id'],
                    where: { nomeDepartamento: { [Op.like]: `%${departamento}%` } }
                },
            ],
            where: { nomeFuncionario: { [Op.like]: `%${nomeDepartamento}%` } },
            order: [['nomeFuncionario', 'DESC']],
        };
        try {
            const funcionario = await Funcionario.findAll(options);
            return res.json(funcionario);
        } catch (error) {
            return res.json(error);
        }
    },

    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        try {
            await Funcionario.update(body, { where: { id } });
            const funcionarioUpdate = await Funcionario.findById(id);
            return res.json(funcionarioUpdate);
        } catch (error) {
            res.json(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await Funcionario.destroy({ where: { id } });
            return res.send();
        } catch (error) {
            res.json(error);
        }
    },

    async searchByName(req, res) {
        const { nomeDepartamento = '', departamento = '', } = req.query;
        const { nomeFuncionario } = req.params
        const options = {
            include: [{
                model: Departamento,
                attributes: ['nomeDepartamento', 'id'],
                where: { nomeDepartamento: { [Op.like]: `%${departamento}%` } }
            }],
            where: { nomeFuncionario: { [Op.like]: `%${nomeFuncionario}%` } },
            order: [['nomeFuncionario', 'DESC']]
        }
        try {
            const funcionario = await Funcionario.findAll(options)
            return res.json(funcionario);
        } catch (error) {
            return res.json(error);
        }
    }

}