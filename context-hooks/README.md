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
Context step run -----------> serviceDiscovery
Context step before start     serviceDiscovery
Context step before end       serviceDiscovery
Context step start            serviceDiscovery
Context step end              serviceDiscovery
Context step after start      serviceDiscovery
Context step after end        serviceDiscovery
Context step complete ------> serviceDiscovery
Context step run -----------> tableDiscovery
Context step before start     tableDiscovery
before:tableDiscovery
Context step before end       tableDiscovery
Context step start            tableDiscovery
Context step end              tableDiscovery
Context step after start      tableDiscovery
after:tableDiscovery
Context step after end        tableDiscovery
Context step complete ------> tableDiscovery
```

## implementation
```js
export default ({ logger }) => {
    return {
        hooks: {
            "before:tableDiscovery": async (context) => {
                logger.info("before:tableDiscovery")
            },
            "after:tableDiscovery": async (context) => {
                logger.info("after:tableDiscovery")
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
    "tableDiscovery": (context) => {
        logger.info("new logic for tableDiscovery")
    }
}
```