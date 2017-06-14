# how to use in project

## install
```sh
npm install functionly-plugin-examples-context-hooks --save-dev
```


## update functionly.json file

add plugin into collection
```js
{
    "plugins": [
        ...
        examples-context-hooks
        ...
    ]
}
```
you can set the `debug` property and the overridable context steppes will show for the specific command when it runs
```js
{
    "plugins": [
        ...
    ],
    "debug": true
}
```
```sh
executor  |   run -----------> ServiceDiscovery
executor  |   before start     ServiceDiscovery
executor  |   before end       ServiceDiscovery
executor  |   start            ServiceDiscovery
executor  |   end              ServiceDiscovery
executor  |   after start      ServiceDiscovery
executor  |   after end        ServiceDiscovery
executor  |   complete ------> ServiceDiscovery
executor  |   run -----------> TableDiscovery
executor  |   before start     TableDiscovery
before:TableDiscovery
executor  |   before end       TableDiscovery
executor  |   start            TableDiscovery
executor  |   end              TableDiscovery
executor  |   after start      TableDiscovery
after:TableDiscovery
executor  |   after end        TableDiscovery
executor  |   complete ------> TableDiscovery
```

## implementation
```js
export default ({ logger }) => {
    return {
        hooks: {
            "before:TableDiscovery": async (context) => {
                logger.info("before:TableDiscovery")
            },
            "after:TableDiscovery": async (context) => {
                logger.info("after:TableDiscovery")
            }
        }
    }
}
```
modifiers can be
* before
* after
* default

`default` modifier is skippable, it will replace the step logic
```js
hooks: {
    "TableDiscovery": (context) => {
        logger.info("new logic for TableDiscovery")
    }
}
```