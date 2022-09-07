


//USAR DEPENDENCIES QUE EQUIVALE AO OBJETO MODELS.PESSOA QUE VEM DE  MODELS/INDEX OU USAR DESTRUCT ASSIGNMENT {PESSOA}
const index = async({Pessoa}, req, res) => {
    const pessoas = await Pessoa.findAll()
    //renderizar retorno dos dados
    res.render('pessoas/index', {pessoas})
}

//RENDERIZA FORMULÁRIO
const createForm = (req,res)=> {
    res.render('pessoas/create')
}

//CRIA DADOS NO FORMULÁRIO  redirecionar pra rota /pessoas apos inserir dados
const createProcess = async({Pessoa}, req, res) => {
    await Pessoa.create(req.body)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    createForm,
    createProcess
   
}