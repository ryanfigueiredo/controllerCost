const sequelize = require("sequelize");
const { Departamento } = require("../models")
const { Op } = sequelize;

module.exports = {

  async create(req, res) {
    const { body } = req;
    try {
      const departamento = await Departamento.create(body);
      console.log(departamento)
      return res.json(departamento);
    } catch (error) {
      return res.json(error);
    }
  },

  async readAll(req, res) {
    try {
      const departamento = await Departamento.findAll();
      return res.json(departamento);
    } catch (error) {
      return res.json(error);
    }
  },

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    try {
      await Departamento.update(body, { where: { id } });
      const departamentoUpdate = await Departamento.findById(id);
      return res.json(departamentoUpdate);
    } catch (error) {
      res.json(error);
    }
  },

  async searchByName(req, res) {
    const { nome } = req.params
    try {
      const departamento = await Departamento.findAll({ where: { nome: { [Op.like]: `%${nome}%` } } })
      return res.json(departamento);
    } catch (error) {
      return res.json(error);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Departamento.destroy({ where: { id } });
      return res.send();
    } catch (error) {
      res.json(error);
    }
  }

}