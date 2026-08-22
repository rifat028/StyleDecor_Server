const { client } = require('../config/db');

async function debugDecoratorAgents() {
  try {
    await client.connect();
    const db = client.db('StyleDecorDB');
    
    const decEmail = 'tanvir.ahmed.dec1@styledecor.com';
    const userDoc = await db.collection('users').findOne({ email: decEmail });
    console.log('User Doc:', userDoc?._id, userDoc?.name, userDoc?.role);

    const decDoc = await db.collection('decorators').findOne({ 
      $or: [
        { userId: userDoc?._id },
        { email: decEmail },
        { 'contactInfo.email': decEmail }
      ]
    });
    console.log('Decorator Doc:', decDoc?._id, decDoc?.businessName, 'userId:', decDoc?.userId);

    // Check agents linked to this decoratorId
    if (decDoc) {
      const agents = await db.collection('agents').find({ decoratorId: decDoc._id }).toArray();
      console.log('Agents count with ObjectId decoratorId:', agents.length);
      if (agents.length > 0) {
        console.log('First agent:', agents[0].name, agents[0]._id, 'status:', agents[0].status);
      }
    }
  } finally {
    await client.close();
  }
}
debugDecoratorAgents();
