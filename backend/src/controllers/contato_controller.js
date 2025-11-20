// /src/controllers/contatoController.js
const { Contato, Empresa } = require('../models');

module.exports = {
    async index(req, res) {
        try {
        const contatos = await Contato.findAll({
            include: [{ model: Empresa, as: 'empresa' }]
        });
        return res.json(contatos);
        } catch (error) {
        console.error('Erro ao listar contatos:', error);
        return res.status(500).json({ error: 'Erro ao listar contatos' });
        }
    },

    async show(req, res) {
        try {
        const { id } = req.params;

        const contato = await Contato.findByPk(id, {
            include: [{ model: Empresa, as: 'empresa' }]
        });

        if (!contato) {
            return res.status(404).json({ error: 'Contato não encontrado' });
        }

        return res.json(contato);
        } catch (error) {
        console.error('Erro ao buscar contato:', error);
        return res.status(500).json({ error: 'Erro ao buscar contato' });
        }
    },

    async store(req, res) {
        try {
        const { nome, email, telefone, fkEmpresaIdEmpresa } = req.body;

        if (!nome || !fkEmpresaIdEmpresa) {
            return res.status(400).json({ error: 'Nome e empresa são obrigatórios.' });
        }

        const empresaExiste = await Empresa.findByPk(fkEmpresaIdEmpresa);

        if (!empresaExiste) {
            return res.status(404).json({ error: 'Empresa não encontrada.' });
        }

        const contato = await Contato.create({
            nome,
            email,
            telefone,
            fkEmpresaIdEmpresa
        });

        return res.status(201).json(contato);
        } catch (error) {
        console.error('Erro ao criar contato:', error);
        return res.status(500).json({ error: 'Erro ao criar contato' });
        }
    },

    async update(req, res) {
        try {
        const { id } = req.params;
        const { nome, email, telefone, fkEmpresaIdEmpresa } = req.body;

        const contato = await Contato.findByPk(id);

        if (!contato) {
            return res.status(404).json({ error: 'Contato não encontrado' });
        }

        if (fkEmpresaIdEmpresa) {
            const empresaExiste = await Empresa.findByPk(fkEmpresaIdEmpresa);
            if (!empresaExiste) {
            return res.status(404).json({ error: 'Empresa informada não existe' });
            }
        }

        await contato.update({
            nome,
            email,
            telefone,
            fkEmpresaIdEmpresa
        });

        return res.json(contato);
        } catch (error) {
        console.error('Erro ao atualizar contato:', error);
        return res.status(500).json({ error: 'Erro ao atualizar contato' });
        }
    },

    async delete(req, res) {
        try {
        const { id } = req.params;

        const contato = await Contato.findByPk(id);

        if (!contato) {
            return res.status(404).json({ error: 'Contato não encontrado' });
        }

        await contato.destroy();

        return res.json({ message: 'Contato removido com sucesso.' });
        } catch (error) {
        console.error('Erro ao deletar contato:', error);
        return res.status(500).json({ error: 'Erro ao deletar contato' });
        }
    }
};
