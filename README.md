<h1>Node_Js</h1>
<p>Repositório de estudo sobre Node_Js, retirado do curso do professor Jorge Sant Ana disponibilizado na plataforma Udemy. Todos os créditos devem-se a Jorge Sant Ana e seu curso encontra-se no seguinte link:</p>
<p><a href="https://www.udemy.com/user/jorgetadeusantanasilva/">Link</a></p>

<h3>Tutorial e Dicas</h3>
<p>Como proceder para o desenvolvimento em NodeJS:</p>

<p>1) Primeiro Instale o nodeJS com os comandos abaixo:</p>

<p><b>sudo apt update</b></p>
<p><b>sudo apt install nodejs</b></p>
<p><b>nodejs -v</b></p>

<p>2) Agora instale o gerenciador de versão do node:</p>

<p><b>apt-get install build-essential libssl-dev</b></p>
<p><b>curl https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash</b></p>
<p><b>nvm --version</b></p>

<p>3) Agora instale o gerenciador de pacotes npm:</p>

<p><b>sudo apt install npm</b></p>
<p><b>npm -v</b></p>

<p>Vamos precisar instalar alguns outros utilitários/frameworks. </p>
<p>Vamos começar abrindo a pasta do seu projeto (CRIE UM FOLDER ESPECÍFICO!) e depois dentro dele faça o seguinte:</p>

<p>4) Instale o express:</p>

<p><b>npm install express --save</b></p>

<p>5) Instale o EJS:</p>

<p><b>npm install ejs --save</b></p>

<p>6) Instale o Nodemon:</p>

<p><b>npm install -g nodemon</b></p>

<p>Com isso já temos o baśico para começar o desenvolvimento. Para inicializar o servidor utilize o seguinte comando:</p>

<p><b>nodemon app.js</b></p>

<p>Agora vamos aos procedimentos para conseguir tornar a aplicação mais dinâmica com a utilização de bancos de dados. Para começar vamos instalar um pacote que visa fazer o plugin da aplicação com o banco de dados em node_modules.</p>

<p>7) Instale o módulo de conexão:</p>

<p><b>npm install mysql --save</b></p>

<p>8) Vamos então, caso não possua o mysql, isntalar o mesmo:</p>

<p><b>sudo apt-get update</b></p>
<p><b>sudo apt-get install mysql-server</b></p>
<p><b>sudo mysql_secure_installation utility</b></p>

<p>9) Para dar start no mysql:</p>

<p><b>sudo systemctl start mysql</b></p>
<p><b>sudo systemctl enable mysql</b></p>

<p>10) Para inicializar o mysql shell:</p>

<p><b>/usr/bin/mysql -u root -p</b></p>

<p>11) Modifique a senha do root:</p>

<p><b>UPDATE mysql.user SET authentication_string = PASSWORD('sua_senha_aqui') WHERE User = 'root';</b></p>

<p>Pronto o banco de dados estará resolvido. Agora precisamos instalar um pacote que nos auxiliará nas rotas de forma a modularizar as mesmas e tornar mais eficiente a manutenção.</p>

<p>12) Instale o consign:</p>

<p><b>npm install consign --save</b></p>

<p>13) instale o body-parser:</p>

<p><b>npm install body-parser --save</b></p>

<p>14) instale o express-validator:</p>

<p><b>npm install express-validator --save</b></p>


<h3>Mongo db</h3>

<p>1) Depois de instalar o mongoDB inicie o serviço:</p>

<p><b>sudo systemctl start mongodb</b></p>

<p>2) Entre no mongo com:</p>

<p><b>mongo</b></p>

<p>3) Para manipular os dados basta você fazer algum dos comandos listados abaixo:</p>

<p><a href="https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm">https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm</a></p>

