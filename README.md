# Assignment_Cypress_API



## Getting started

Basic demonstration for Api Test in Cypress

## Add your files

- After the git repo have been cloned you need to add node_modules files in your folders.
- You only need to add mocha and chai for assertions.
- For running the user.json in your local server you need to 
    json-server library


```bash
git clone git@git.bajratechnologies.com:rujanshakya/assignment_cypress_api.git

npm install cypress 
npm install chai 
npm install mocha 
npm install json-server 
```

## To start your local json server
- Make sure that you are in the directory where you have json file.
- You need to run the json-server. This will create a mock api that can be used for testing.

```bash
json-server --watch user.json
```

## Cypress Dashboard
- To run the cypress dashboard
```bash
npx cypress open
```
## Other Cypress commands
- Some other useful cypress commands
```bash
npx cypress run
npx cypress run --spec filename
npx cypress run --browser chrome --headed --spec filename
```



