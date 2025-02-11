# COMO EXECUTAR 

### BACKEND
Após clonar, navegue até /backend

Abra o terminal e execute:

```python3 -m venv venv```

```source venv/bin/activate```

```pip install -r requirements.txt```

Com isto, você deve ter criado um ambiente virtual, executado ele e instalado as dependências

Navegue até ```app.py```:

Preencha as variáveis com o nome de usuário, senha, host, porta e nome do banco de dados:
```    
user = ""
password = ""
host = ""
port = ""
database = ""
```


Para iniciar o backend, execute:

```python3 app.py```

Existem scripts SQL para iniciar a tabela e populá-la, na pasta ```sql```


### FRONTEND
Navegue até /frontend

Abra o terminal e xecute:

```npm install```

Isto irá instalar as dependências do frontend.
Este app assume que o backend está rodando no endereço ```http://127.0.0.1:5000```

Caso o backend esteja em outro endereço, altere a variável de ambiente ```VITE_API_BASE_URL``` no arquivo ```.env```


Para executar o frontend, abra o terminal e execute:
```npm run dev```
