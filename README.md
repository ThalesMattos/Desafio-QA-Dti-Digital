# DESAFIO TÉCNICO - ESTÁGIO QUALITY ASSURANCE ENGINEER

## 📄 Descrição
Este projeto contém a automação de testes para validação das funcionalidades de um sistema de autenticação e cadastro de usuários. Ele foi desenvolvido utilizando o framework **Cypress** para garantir a qualidade e a confiabilidade das principais funcionalidades do sistema.

---

## 🚀 Funcionalidades testadas
As seguintes funcionalidades foram abordadas nos testes automatizados:

1. **Login no sistema**
   - Login com credenciais inválidas.
   - Verificação de mensagens de erro e comportamento esperado.

2. **Criar uma conta**
   - Tentativa de criar uma conta utilizando um email já registrado.
   - Mensagens de erro apropriadas para cenários de falha.

3. **Esqueceu a senha?**
   - Recuperação de senha com emails não cadastrados.
   - Mensagens de erro e comportamento esperado.

---

## 🧪 Estrutura dos testes
Os testes seguem a estrutura Gherkin e foram escritos no formato de **Behavior Driven Development (BDD)**, garantindo clareza e alinhamento entre equipes técnicas e de negócio.

## ⚙️ Tecnologias e ferramentas utilizadas
 - Cypress: Framework de automação de testes end-to-end.
 - Cucumber: Integração do Cypress com Gherkin para BDD.
 - JavaScript: Linguagem de programação utilizada nos testes.
 - Node.js: Ambiente de execução para o projeto.
