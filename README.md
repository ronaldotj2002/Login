projeto de login com autenticação e consumindo uma api de news
*****************************************************
*****************************************************
# baixar as dependências 
npm install

# rodar o projeto
ng s -o

# login e senha
login: rtj@gmail.com
senha: 123
*******************************************************
*******************************************************

Mapa do Projeto

[Componente Login login.ts / login.html]
[Componente Logado logado.ts / logado.html]
[Service autentication.ts] 
[Service authGuard.ts]
[Classe Modelo usuario.ts]

[instalar a criptografia da senha]
[vou disponibilizar ou ativar localStorage]

# instalação de criptografia para senha
# angular-cli
npm install --save md5-typescript

# criando o componentes pelo terminal
ng g c login

ng g c logado

# criando serviços
ng g service service/authentication

ng g service service/autGuard


# instalando o material bootastrap
npm i npm-registry-client
ng add angular-bootstrap-md

# layout - Framework
https://mdbootstrap.com/ 

# api news
https://newsapi.org/
