const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedPost = require('./postData');

const seedPubAll = require('./seedPubAll');
const seedDataDallas = require('./seedDataDallas');
const seedDataFortWorth = require('./seedDataFortWorth');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedPubAll();
  console.log('\n----- ALL PUB DATA SEEDED -----\n');

  await seedDataDallas();
  console.log('\n----- DALLAS SEEDED -----\n');

  await seedDataFortWorth();
  console.log('\n----- FORTWORTH SEEDED -----\n');

  process.exit(0);
};

seedAll();