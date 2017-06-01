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