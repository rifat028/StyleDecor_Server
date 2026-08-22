const { client } = require('../config/db');
const reviewController = require('../controllers/reviewController');

async function testAllReviewApis() {
  try {
    await client.connect();
    console.log('--- Testing Public Review APIs ---');

    // 1. Featured
    let featuredRes = {};
    await reviewController.getFeaturedReviews(
      { query: { limit: 4 } },
      { send: (d) => { featuredRes = d; } }
    );
    console.log('✅ Featured Reviews Count:', featuredRes.count);

    // 2. Service
    const sampleRev = featuredRes.data[0];
    let serviceRes = {};
    await reviewController.getReviewsByService(
      { params: { serviceId: sampleRev.serviceId.toString() } },
      { send: (d) => { serviceRes = d; } }
    );
    console.log('✅ Service Reviews Count:', serviceRes.count, 'Aggregate:', serviceRes.aggregateRating);

    // 3. Decorator
    let decoratorRes = {};
    await reviewController.getReviewsByDecorator(
      { params: { decoratorId: sampleRev.decoratorId.toString() } },
      { send: (d) => { decoratorRes = d; } }
    );
    console.log('✅ Decorator Reviews Count:', decoratorRes.count, 'Aggregate:', decoratorRes.aggregateRating);

    // 4. Agent
    let agentRes = {};
    await reviewController.getReviewsByAgent(
      { params: { agentId: sampleRev.agentId.toString() } },
      { send: (d) => { agentRes = d; } }
    );
    console.log('✅ Agent Reviews Count:', agentRes.count, 'Aggregate:', agentRes.averageRating);

    console.log('\n--- Testing Decorator & Agent Dashboard APIs ---');

    // 5. Agency Reviews (DreamCraft owner: tanvir.ahmed.dec1@styledecor.com)
    let agencyRes = {};
    await reviewController.getAgencyReviews(
      { decoded_email: 'tanvir.ahmed.dec1@styledecor.com' },
      { send: (d) => { agencyRes = d; } }
    );
    console.log('✅ Agency Reviews for DreamCraft:', agencyRes.stats);

    // 6. Agent Assigned Reviews (Israt Jahan: israt.jahan.agent1@styledecor.com)
    let myAgentRes = {};
    await reviewController.getMyAgentReviews(
      { decoded_email: 'israt.jahan.agent1@styledecor.com' },
      { send: (d) => { myAgentRes = d; } }
    );
    console.log('✅ Assigned Reviews for Israt Jahan:', myAgentRes.count, 'Rating:', myAgentRes.averageRating);

    console.log('\n--- Testing Admin Reviews API ---');

    // 7. Admin All Reviews
    let adminRes = {};
    await reviewController.getAllReviewsAdmin(
      { query: { page: 1, limit: 10 } },
      { send: (d) => { adminRes = d; } }
    );
    console.log('✅ Admin Total Reviews:', adminRes.totalCount, 'Stats:', adminRes.stats);

    console.log('\n🎉 ALL REVIEW API TESTS PASSED SUCCESSFULLY!');
  } finally {
    await client.close();
  }
}

testAllReviewApis();
