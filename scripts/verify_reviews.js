const { client } = require('../config/db');
const reviewController = require('../controllers/reviewController');
const agentController = require('../controllers/agentController');

async function verifyAtlasReviews() {
  try {
    await client.connect();
    const db = client.db('StyleDecorDB');
    
    const collections = await db.listCollections().toArray();
    const colNames = collections.map(c => c.name);
    console.log('Active Collections in Atlas:', colNames);

    const reviewCount = await db.collection('reviews').countDocuments();
    console.log('Total documents in "reviews":', reviewCount);

    const sampleReview = await db.collection('reviews').findOne({});
    console.log('Sample Review Document:\n', JSON.stringify(sampleReview, null, 2));

    const withAgentCount = await db.collection('reviews').countDocuments({
      agentId: { $ne: null },
      agentName: { $ne: null }
    });
    console.log('Reviews with valid agentId and agentName:', withAgentCount, '/', reviewCount);

    // Test controller endpoint GET /reviews/decorator/:decoratorId
    if (sampleReview?.decoratorId) {
      let decRes = {};
      await reviewController.getReviewsByDecorator(
        { params: { decoratorId: sampleReview.decoratorId.toString() } },
        { send: (data) => { decRes = data; } }
      );
      console.log('Decorator reviews for ' + sampleReview.decoratorId + ':', decRes.count);
    }

    // Test controller endpoint GET /reviews/agent/:agentId
    if (sampleReview?.agentId) {
      let agRes = {};
      await reviewController.getReviewsByAgent(
        { params: { agentId: sampleReview.agentId.toString() } },
        { send: (data) => { agRes = data; } }
      );
      console.log('Agent reviews for ' + sampleReview.agentId + ' (' + sampleReview.agentName + '):', agRes.count);
    }
  } finally {
    await client.close();
  }
}
verifyAtlasReviews();
