## implementation
```js
export default ({ logger }) => {
    return {
        deployProviders: {
            customaws: {
                FUNCTIONAL_ENVIRONMENT: 'aws',
                async createEnvironment(context) {
                    logger.info('customaws provider logic...')
                }
            }
        }
    }
}
```
## commandline 
```sh
functionly deploy customaws ./lib/todoDB.js
```