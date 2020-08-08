const Commons = require('../../../commons/CommonTest');
const ENV_NAME = process.env.ENV_NAME;
exports.handler = async (event) => {
    console.log('Hello World');
    console.log(ENV_NAME);
    Commons.test('nam nguyen cai meo');
    
    return {statusCode: 200,
        body: JSON.stringify({message: 'Hello CodePipeline'})
    }
}