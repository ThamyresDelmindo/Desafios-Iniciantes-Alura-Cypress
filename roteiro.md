
Funcionalidade: Cadastro CORRETO no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "Email" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preencge o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados: 

O sistema processa as informações fornecidas.

Regra de Negócio:

E-mail e senha são campos obrigatórios para o cadastro.





Funcionalidade: Cadastro INCORRETO no site Adopet


Cenário: Falha na tentativa de cadastro

Passos:

O usuário acessa a página de cadastro.
o usuário deixa os campos obrigatórios (Nome, Email, Senha, Confirmação da senha) em branco.
O usuário clica em cadastrar.


Resultados Esperados:

O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.



Funcionalidade: Login CORRETO no site Adopet

Cenário: Obter sucesso ao realizar o Login no site

Passos:

O usuário acessa a página de login.
O usuário preenche os campos obrigatórios corretamente com o email "estefano@email.com" e senha "Senha123"
O usuário clica no botão"Entrar".

Resultados Esperados:

Ao inserir os dados corretos nos campos de email e senha e clicar no botão "Entrar", o usuário é direcionado a página inicial do site.


Funcionalidade: Login INCORRETO no site Adopet


Cenário: Falha na tentativa de login

Passos:

O usuário acessa a página de login.
o usuário deixa os campos obrigatórios (Email, Senha) em branco.
O usuário clica em "Entrar".


Resultados Esperados:

O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagem de erro indicando que os campos obrigatórios devem ser preenchidos.