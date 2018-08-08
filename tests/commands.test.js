process.env.TEST = true;

const { miner } = require('../index');

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


// Testing command error handling
describe('Miner CLI Error Handler', () => {
  test('Should handle a wrong input for locate command', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('data.json', 'locate', 'San Francisco')).toEqual([]);
    expect(mockConsole).toHaveBeenLastCalledWith('No Companies Found with Your Query');
    mockConsole.mockReset();
    done();
  });

  test('Should handle a wrong input for find_before command', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('data.json', 'find_before', 'ABCDE')).toEqual([]);
    expect(mockConsole).toHaveBeenLastCalledWith('No Companies Found with Your Query');
    mockConsole.mockReset();
    done();
  });

  test('Should handle a wrong input for find_after command', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('data.json', 'find_after', 'ABCDE')).toEqual([]);
    expect(mockConsole).toHaveBeenLastCalledWith('No Companies Found with Your Query');
    mockConsole.mockReset();
    done();
  });

  test('Should handle a wrong input for find_companies_between_size command', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('data.json', 'find_companies_between_size', 99999)).toEqual([]);
    expect(mockConsole).toHaveBeenLastCalledWith('No Companies Found with Your Query');
    mockConsole.mockReset();
    done();
  });

  test('Should handle a wrong input for find_type command', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('data.json', 'find_type', 'Animal')).toEqual([]);
    expect(mockConsole).toHaveBeenLastCalledWith('No Companies Found with Your Query');
    mockConsole.mockReset();
    done();
  });

  test('Should handle a wrong command', (done) => {
    const mockConsole = console.log = jest.fn();
    expect(miner('data.json', 'take my command', 'CA')).toEqual();
    expect(mockConsole).toHaveBeenLastCalledWith('Wrong Command');
    mockConsole.mockReset();
    done();
  });
});