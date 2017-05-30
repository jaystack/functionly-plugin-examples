export default ({ logger }) => {
    return {
        commands({ commander }) {
            commander
                .command('hello <who>')
                .option('-e, --email <email>', 'email')
                .action(async (who, command) => {
                    logger.info(`hello ${who}`)
                    if(command.email){
                        logger.info(`email: ${who} <${command.email}>`)
                    }
                });
        }
    }
}