# how to use in project

## install
```sh
npm install functionly-plugin-examples-helloworld-command --save-dev
```


## update functionly.json file

add plugin into collection
```js
{
    "plugins": [
        ...
        examples-helloworld-command
        ...
    ]
}
```
## use it from command line
```sh
functionly hello John
```
result:
```sh
> hello John
```

## with commandline options
```sh
functionly hello John --email john@admin.com
```
result:
```sh
> hello John
> email: John <john@admin.com>
```
# implementation
```js
export default ({ logger }) => {
    return {
        commands({ commander }) {
            commander
                .command('hello <who>')
                .option('-e, --email <email>', 'email')
                .action(async (who, command) => {
                    logger.info(`hello ${who}`)
                    if (command.email) {
                        logger.info(`email: ${who} <${command.email}>`)
                    }
                });
        }
    }
}
```
