const sequelize = require("sequelize");
const { Movimentacao, Funcionario } = require("../models")
const { Op } = sequelize;

module.exports = {

    async create(req, res) {
        const { body } = req;
        try {
            const movimentacao = await Movimentacao.create(body);
            return res.json(movimentacao);
        } catch (error) {
            return res.json(error);
        }
    },

    async readAll(req, res) {
        const { nomeFuncionario = '', funcionario = '' } = req.query;
        const options = {
            attributes: ['id', 'descricao', 'valor'],
            include: [
                {
                    model: Funcionario,
                    attributes: ['nomeFuncionario', 'id'],
                    where: { nomeFuncionario: { [Op.like]: `%${funcionario}%` } }
                },
            ],
            where: { descricao: { [Op.like]: `%${nomeFuncionario}%` } },
            order: [['descricao', 'DESC']],
        };
        try {
            const movimentacao = await Movimentacao.findAll(options);
            return res.json(movimentacao);
        } catch (error) {
            return res.json(error);
        }
    },

    async readById(req, res) {
        const { id } = req.params;
        try {
            const movimentacao = await Movimentacao.findById(id);
            return res.json(movimentacao);
        } catch (error) {
            return res.json(error);
        }
    },

    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        try {
            await Movimentacao.update(body, { where: { id } });
            const movimentacaoUpdate = await Movimentacao.findById(id);
            return res.json(movimentacaoUpdate);
        } catch (error) {
            res.json(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await Movimentacao.destroy({ where: { id } });
            return res.send();
        } catch (error) {
            res.json(error);
        }
    },

    async searchByDescription(req, res) {
        const { nomeFuncionario = '', funcionario = '' } = req.query;
        const { descricao } = req.params
        const options = {
            attributes: ['id', 'descricao', 'valor'],
            include: [
                {
                    model: Funcionario,
                    attributes: ['nomeFuncionario', 'id'],
                    where: { nomeFuncionario: { [Op.like]: `%${funcionario}%` } }
                },
            ],
            where: { descricao: { [Op.like]: `%${descricao}%` } },
            order: [['descricao', 'DESC']],
        }

        try {
            const movimentacao = await Movimentacao.findAll(options)
            return res.json(movimentacao);
        } catch (error) {
            return res.json(error);
        }
    },

    async searchByFuncionarioID(req, res) {
        const { nomeFuncionario = '', funcionario = '' } = req.query;
        const { FuncionarioID } = req.params;
        const options = {
            attributes: ['id', 'descricao', 'valor', 'funcionarioId'],
            include: [
                {
                    model: Funcionario,
                    attributes: ['nomeFuncionario', 'id'],
                    where: { nomeFuncionario: { [Op.like]: `%${funcionario}%` } }
                },
            ],
            where: { funcionarioId: { [Op.like]: `%${FuncionarioID}%` } },
            order: [['descricao', 'DESC']],
        }
        try {
            const movimentacao = await Movimentacao.findAll(options);
            return res.json(movimentacao);
        } catch (error) {
            return res.json(error);
        }
    },

}
