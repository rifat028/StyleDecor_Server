const { client } = require('../config/db');
const decoratorController = require('../controllers/decoratorController');
const agentController = require('../controllers/agentController');

async function testControllers() {
  try {
    await client.connect();

    console.log('Testing GET /decorators/tanvir.ahmed.dec1@styledecor.com');
    let decRes = {};
    await decoratorController.getDecoratorById(
      { params: { id: 'tanvir.ahmed.dec1@styledecor.com' } },
      {
        send: (data) => { decRes = data; },
        status: (code) => ({ send: (data) => { decRes = { code, ...data }; } })
      }
    );
    console.log('Decorator Lookup Result:', JSON.stringify(decRes, null, 2));

    const decoratorId = decRes.data?._id?.toString() || decRes._id?.toString();
    console.log('Resolved Decorator ID:', decoratorId);

    if (decoratorId) {
      console.log('\nTesting GET /agents/decorator/' + decoratorId);
      let agentsRes = {};
      await agentController.getAgentsByDecorator(
        { params: { decoratorId } },
        {
          send: (data) => { agentsRes = data; },
          status: (code) => ({ send: (data) => { agentsRes = { code, ...data }; } })
        }
      );
      console.log('Agents Lookup Result:', JSON.stringify(agentsRes, null, 2));
    }
  } finally {
    await client.close();
  }
}
testControllers();
