# Contribuições
## Tabela de Conteúdos
- [Por onde começar?](#por-onde-come%C3%A7ar)
- [Fluxo](#fluxo)

## Por onde começar?
**1.** Faça o _clone_ do projeto.

**2.** [Entenda nosso fluxo](#fluxo).

**3.** [Leia e pratique as boas práticas](#boas-pr%C3%A1ticas).

## Fluxo
Nós usamos Git Flow com _rebase_:

**1.** Clone o projeto

**2.** Antes de iniciar o processo de contribuição, **crie uma nova branch** a partir da branch **master** para fazer suas alterações.

Alguns exemplos:

- Para novas funcionalidades: `git checkout -b feat/messages`
- Para correções: `git checkout -b fix/messages`
- Para refatoração de código: `git checkout -b refactor/messages`
- Para melhorias de performance: `git checkout -b perf/messages`
- Para alterações em documentação: `git checkout -b docs/messages`
- Para adicionar testes faltantes: `git checkout -b test/messages`
- Para alterações no processo de build ou ferramentas similares: `git checkout -b chore/build-tools`

**3.** Após realizar as alterações, é hora de fazer um commit com uma mensagem coerente do que foi feito. Exemplo:

Usamos o padrão de commit do cz-cli **https://github.com/commitizen/cz-cli**

```
git add --all
git commit -m "feat(messages): adiciona funcionalidade de mensagens"

## Para atualizar a sua branch com a master

## 1 - Faça um rebase da sua branch com a branch master
git pull --rebase origin master

## 2 - Caso tenha conflitos, após resolver os conflitos
## faça isso até que todos os conflitos estejam resolvidos.
git add .
git rebase --continue

## 3 - Após terminar um rebase, precisamos subir nossa branch para o repositótio oficial com --force-with-lease
git push --force-with-lease origin feat/message

## Caso não tenha dado conflitos, podemos subir nossa branch sem o --force-with-lease
```

**4.** Envie um _Pull Request_ com as alterações feitas, fazendo referência para o `master` do repositório oficial.

**5.** Sua contribuição passará pelo processo de codereview. Em alguns casos pediremos algumas alterações antes do merge.

**Merge (squash and merge). 🚀**

**6.** Após ter seu _Pull Request_ aprovado, pode realizar o **merge**, mas sempre selecione a opção :warning: **(squash and merge)** para evitar poluir o histórico da **master**.

Após o merge:

- Delete a branch utilizada (pelo github mesmo).

- Atualize a master do seu repositório com o repositório oficial:

```
git branch -D master
git fetch --all
git checkout master
```
