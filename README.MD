####Projeto Final PPW-II

Desenvolvido por Arnaldo Paganni / Cristoferson Luiz / Vinicius Mangili

##Link Heroku https://projeto-final-ppw.herokuapp.com/
NOTICIAS
-----------------------------
# BUSCAR TODOS OS OBJETOS
rotas.get('/',rotas.getAll())
# BUSCAR UM OBJETO ESPECIFICO
rotas.get('/:id',rotas.getOne())
# INSERIR UMA NOTICIA
rotas.post('/',rotas.save())
# ATUALIZAR NOTICIA
rotas.put('/:id',rotas.save())
# DELETAR NOTICIA ESPECIFICA
rotas.post('/:id',rotas.remove())

----------------------------------
USUÁRIOS
# BUSCAR TODOS OS USUÁRIOS
rotas.get('/',rotas.getAll())
# BUSCAR UM USUÁRIO ESPECIFICO
rotas.get('/:id',rotas.getOne())
# INSERIR UM USUÁRIO
rotas.post('/',rotas.save())
# ATUALIZAR USUÁRIO
rotas.put('/:id',rotas.save())
# DELETAR USUÁRIO ESPECIFICO
rotas.post('/:id',rotas.remove())