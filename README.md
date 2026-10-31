# Coração de Pet

O **Coração de Pet** é um projeto de plataforma web voltada à adoção de animais. Sua proposta é aproximar pessoas que desejam adotar um pet de quem está buscando um novo lar para um animal, reunindo informações, fotos e o contato do responsável em um mesmo lugar.

O projeto busca facilitar o caminho entre conhecer um animal e acolhê-lo em uma nova família. Para isso, organiza a divulgação dos pets e as etapas de interesse, contato e conclusão da adoção, incentivando a adoção responsável.

## Como funciona

Quem deseja divulgar um animal pode criar uma conta e cadastrar o pet com nome, idade, peso, cor e fotos. O cadastro fica associado ao responsável, que pode atualizar as informações, remover o anúncio e registrar a conclusão da adoção.

Quem procura um novo companheiro pode consultar os animais cadastrados e seus detalhes. Ao entrar na conta, pode manifestar interesse em uma visita. Nesse momento, o sistema associa o interessado ao pet e informa o nome e o telefone do responsável para que ambos combinem os próximos passos diretamente.

A etapa chamada de agendamento representa esse registro de interesse: não há definição de data ou horário dentro do sistema. Quando a adoção é concluída, o responsável marca o animal como indisponível para adoção.

## Recursos do projeto

A API reúne a base das seguintes funcionalidades:

- Cadastro e autenticação de usuários.
- Edição de perfil, incluindo dados de contato, foto e senha.
- Consulta pública da listagem de animais e dos detalhes de cada pet.
- Cadastro de animais com informações e múltiplas fotos.
- Edição e exclusão de anúncios pelo usuário responsável.
- Registro de interesse em visitar um animal e indicação do contato do responsável.
- Conclusão da adoção pelo responsável pelo anúncio.

O código também contém consultas para os animais cadastrados pelo usuário e para os pets aos quais ele está associado como interessado na adoção.

## Organização e tecnologias

O repositório reúne as duas partes da aplicação:

- **`api/`**: backend em Node.js e Express, com MongoDB e Mongoose para armazenamento dos dados, JWT para autenticação, bcrypt para hash de senhas e Multer para upload de imagens.
- **`web/`**: interface web iniciada com React, TypeScript e Vite, destinada à experiência de navegação e interação com a plataforma.
- **`compose.yml`**: configuração do MongoDB para o ambiente local com Docker Compose.

## Estado atual

O projeto está em desenvolvimento. A API já contém a implementação dos principais fluxos de usuários, animais e adoção, enquanto a interface web está em sua estrutura inicial e ainda precisa incorporar essas funcionalidades. A descrição acima apresenta a proposta do produto e os fluxos definidos no backend; a experiência completa pela interface ainda está em construção.
