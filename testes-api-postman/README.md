# 📡 Testes de API - JSONPlaceholder
Este projeto demonstra a automação de testes de API utilizando **Postman**.

## 🛠️ O que foi testado:
- **Endpoint:** `/users`
- **Verificações Realizadas (Scripts):**
  1. **Status Code:** Validação se a API retorna `200 OK`.
  2. **Tempo de Resposta:** Verificação se o retorno ocorre em menos de 500ms.
  3. **Validação de Contrato:** Checagem se os campos obrigatórios (id, name, email) estão presentes no JSON.

## 🚀 Como executar:
1. Importe o arquivo `jsonplaceholder_tests.json` para o seu Postman.
2. Clique em 'Run Collection'.
