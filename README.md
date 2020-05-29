<h1>NodeJs Basics</h1>
<p>Repositório de estudo sobre Node_Js, retirado do curso do professor Jorge Sant Ana disponibilizado na plataforma Udemy. Todos os créditos devem-se a Jorge Sant Ana e seu curso encontra-se no seguinte link:</p>
<p><a href="https://www.udemy.com/user/jorgetadeusantanasilva/">Link</a></p>

<h3>Tutorial e Dicas</h3>
<p>Como proceder para o desenvolvimento em NodeJS:</p>

<p>1) Primeiro Instale o nodeJS com os comandos abaixo:</p>

<p><code>sudo apt update</code></p>
<p><code>sudo apt install nodejs</code></p>
<p><code>nodejs -v</code></p>

<p>2) Agora instale o gerenciador de versão do node:</p>

<p><code>apt-get install build-essential libssl-dev</code></p>
<p><code>curl https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash</b>code></code></p>
<p><code>nvm --version</code></p>

<p>3) Agora instale o gerenciador de pacotes npm:</p>

<p><code>sudo apt install npm</b>code></p>
<p><code>npm -v</code></p>

<p>Vamos precisar instalar alguns outros utilitários/frameworks. </p>
<p>Vamos começar abrindo a pasta do seu projeto (CRIE UM FOLDER ESPECÍFICO!) e depois dentro dele faça o seguinte:</p>

<p>4) Instale o express:</p>

<p><code>npm install express --save</code></p>

<p>5) Instale o EJS:</p>

<p><code>npm install ejs --save</b>code></p>

<p>6) Instale o Nodemon:</p>

<p><code>npm install -g nodemon</code></p>

<p>Com isso já temos o baśico para começar o desenvolvimento. Para inicializar o servidor utilize o seguinte comando:</p>

<p><code>nodemon app.js</code></p>

<p>Agora vamos aos procedimentos para conseguir tornar a aplicação mais dinâmica com a utilização de bancos de dados. Para começar vamos instalar um pacote que visa fazer o plugin da aplicação com o banco de dados em node_modules.</p>

<p>7) Instale o módulo de conexão:</p>

<p><code>npm install mysql --save</code></p>

<p>8) Vamos então, caso não possua o mysql, isntalar o mesmo:</p>

<p><code>sudo apt-get update</code></p>
<p><code>sudo apt-get install mysql-server</code></p>
<p><code>sudo mysql_secure_installation utility</code></p>

<p>9) Para dar start no mysql:</p>

<p><code>sudo systemctl start mysql</code></p>
<p><code>sudo systemctl enable mysql</code></p>

<p>10) Para inicializar o mysql shell:</p>

<p><code>/usr/bin/mysql -u root -p</code></p>

<p>11) Modifique a senha do root:</p>

<p><code>UPDATE mysql.user SET authentication_string = PASSWORD('sua_senha_aqui') WHERE User = 'root';</code></p>

<p>Pronto o banco de dados estará resolvido. Agora precisamos instalar um pacote que nos auxiliará nas rotas de forma a modularizar as mesmas e tornar mais eficiente a manutenção.</p>

<p>12) Instale o consign:</p>

<p><code>npm install consign --save</code></p>

<p>13) instale o body-parser:</p>

<p><code>npm install body-parser --save</code></p>

<p>14) instale o express-validator:</p>

<p><code>npm install express-validator --save</code></p>


<h3>Mongo db</h3>

<p>1) Depois de instalar o mongoDB inicie o serviço:</p>

<p><code>sudo systemctl start mongodb</code></p>

<p>2) Entre no mongo com:</p>

<p><code>mongo</code></p>

<p>3) Para manipular os dados basta você fazer algum dos comandos listados abaixo:</p>

<p><a href="https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm">https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm</a></p>

