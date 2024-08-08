const express = require("express");
const router = express.Router();
const Dados = require("../models/dados");

/* GET home page. */
// Listar contatos
router.get("/", async function (req, res, next) {
  const dados = await Dados.findAll();

  res.render("list", { data: dados });
});

/* GET id contato - form criar*/
// Página do contato, permitindo editar
router.get("/novo", async function (req, res, next) {
  res.render("novoItem");
});

router.get("/limpar", function (req, res, next) {
  res.render("limpar");
});

router.post("/limpar", async (req, res, next) => {
  await Dados.drop();
  await Dados.sync();
  res.redirect("/");
});

/* GET id contato */
// Página do contato, com edit e delete
router.get("/:id", async function (req, res, next) {
  const dados = await Dados.findByPk(req.params.id);
  if (dados === null) res.render("fail_find");
  else res.render("item", { data: dados });
});

/* GET id contato - form editar*/
// Página do contato, permitindo editar
router.get("/:id/edit", async function (req, res, next) {
  const dados = await Dados.findByPk(req.params.id);
  if (dados === null) res.render("fail_find");
  else res.render("editItem", { data: dados });
});

/* PUT id contato */
// Altera contato e volta para sua página
router.put("/:id", async function (req, res, next) {
  let dados = await Dados.findByPk(req.params.id);
  if (dados === null) res.render("fail_find");
  else {
    dados = {
      nome: req.body.nome,
      email: req.body.email,
      tel: req.body.tel,
    };
    await Dados.update(dados, { where: { id: req.params.id } });
    res.redirect(`/${req.params.id}`);
  }
});

/* DELETE id contato */
// Remove contato e volta para home
router.delete("/:id", async function (req, res, next) {
  const dados = await Dados.findByPk(req.params.id);
  if (dados === null) res.render("fail_find");
  else {
    Dados.destroy({ where: { id: req.params.id } });
    res.redirect("/");
  }
});

/* POST home */
// Cria contato e mostra sua página
router.post("/", async function (req, res, next) {
  const novo = {
    nome: req.body.nome,
    email: req.body.email,
    tel: req.body.tel,
    cpf: req.body.cpf,
    data: req.body.data,
    relato: req.body.relato,
  };
  const resultado = await Dados.create(novo);
  if (resultado === null) res.render("create_fail");
  else res.redirect(`/${resultado.id}`);
});

module.exports = router;
