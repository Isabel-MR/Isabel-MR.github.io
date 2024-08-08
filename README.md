O trabalho de criação do site Petdot, feito em conjunto das matérias Programação III e Projeto Integrador e teve como realização o FrontEnd do projeto com  HTML, CSS e JS. 
A construção do BackEnd foi usado o framework Node.js e o express generator, assim como o banco de dados SQLite. Para a execução terá que ser feita separadamente, para executar o backend instale o framework do Node.js e digite a sequência: npx express-generator pasta –view ejs; cd pasta npm i ou npm install; npm sequelize sqlite3; npm nodemon e npm start.
Minha contribuição com o trabalho foi a criação das páginas FrontEnd (com exceção do POST e TextArea)
O formulário pode ser achado no: http://localhost:3000/


HTML do Código das Páginas Iniciais:

Possui head;
Body com header; possuindo uma seção de navegação, Banner, conteúdo, container de animais, parceria/ONGs e footer.

HTML do Código das Páginas Adotar:

Possui head;
Body com header; possuindo um container de pesquisa, seção de campanha, conteúdo, seção de pets e footer. 

Funcionalidade do HTML:

HTML Estruturado: Define a estrutura e o conteúdo da página.
CSS Externo: adotar.css e adotar-gatos.css.
Links: Links para páginas específicas de cada animal.
Imagens e Formulários: Imagens e formulários melhoram a interatividade e a usabilidade do site.


Estrutura das Páginas Adoção e Animais:
Importação de Fontes:
Importa fontes do Google Fonts (Imprima e Italiana) para estilizar o texto.
Body:
Define margens e a fonte padrão para o body.
Header:
Define o estilo do cabeçalho, adicionando cor de fundo, altura, largura, e alinhamento.
Container-pesquisa:
Estiliza o container da barra de pesquisa com bordas, arredondamento, sombra e alinhamento.
Barra-pesquisa:
Define estilos para a barra de pesquisa, incluindo tamanho da fonte, padding, e placeholder.
Sessões de Conteúdo e Imagens de Pets:
Estiliza seções como .campanha, .conteudo, .sessao-dogs, .dog, com margens, cores, e alinhamento.
Footer:
Estiliza o rodapé com display flex, alinhamento, cor de fundo, e seções internas.
Funcionalidade das Páginas Adoção e Animais:
Layout Responsivo: Uso de flex para garantir que o layout seja responsivo.
Interatividade: Transições e efeitos hover.
