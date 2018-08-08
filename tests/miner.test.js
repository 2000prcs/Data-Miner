process.env.TEST = true;
const { miner, logCompanies } = require('../index');
const { commands } = require('../commands');

// Testing commands
describe('Command handlers', () => {
  test('Should return companies based on the state location', (done) => {
    expect(miner('data.json', 'locate', 'CA')).toHaveLength(74);
    expect(miner('data.json', 'locate', 'MI')).toEqual(['Compendia Bioscience Life Technologies', 'FarmLogs', 'LOVELAND Technologies', 'Munetrix']);
    done();
  });

  test('Should return companies based on the found year (before)', (done) => {
    expect(miner('data.json', 'find_before', '2000')).toHaveLength(121);
    expect(miner('data.json', 'find_before', '1800')).toEqual(['J.P. Morgan Chase']);
    done();
  });

  test('Should return companies based on the found year (after)', (done) => {
    expect(miner('data.json', 'find_after', '1900')).toHaveLength(302);
    expect(miner('data.json', 'find_after', '2014')).toEqual(['48 Factoring Inc.', 'BaleFire Global', 'Compared Care', 'CONNECT-DOT LLC.', 'How\'s My Offer?', 'Kimono Labs']);
    done();
  });

  test('Should return companies based on the company size', (done) => {
    expect(miner('data.json', 'find_companies_between_size', '1-10')).toHaveLength(79);
    expect(miner('data.json', 'find_companies_between_size', '501-1,000')).toEqual(['Accela', 'Avalara', 'CARFAX', 'Charles River Associates', 'College Abacus, an ECMC initiative', 'Consumer Reports', 'Everyday Health', 'Healthgrades', 'Lending Club', 'NERA Economic Consulting']);
    done();
  });

  test('Should return companies based on the company type', (done) => {
    expect(miner('data.json', 'find_type', 'Lifestyle & Consumer')).toHaveLength(14);
    expect(miner('data.json', 'find_type', 'Housing/Real Estate')).toEqual(['Buildingeye', 'BuildZoom', 'Civic Insight', 'Construction Monitor LLC', 'CoreLogic', 'Estately', 'Honest Buildings', 'Housefax', 'LoopNet']);
    done();
  });
});


// Testing miner function




// // Error handling
// describe('Miner CLI Error Handler', (done) => {
//   test('Should handle a case of there is no matching company', () => {

//     done();
//   });

//   test('Should handle a wrong input', (done) => {

//     done();
//   });

// });