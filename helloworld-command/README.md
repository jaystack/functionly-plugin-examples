# how to use in project

## install
```sh
npm install functionly-plugin-examples-helloworld --save-dev
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


