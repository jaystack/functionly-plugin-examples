export default ({ logger }) => {
    return {
        hooks: {
            "before:TableDiscovery": async (context) => {
                logger.info("before:TableDiscovery")
            },
            "after:TableDiscovery": async (context) => {
                logger.info("after:TableDiscovery")
            }
        },
        deployProviders: {
            example: {
                async createEnvironment(context) {
                    logger.info('example deploy...')
                }
            }
        }
    }
}