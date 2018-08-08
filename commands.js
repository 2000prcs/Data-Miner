
//let companyNames;

// Handle each commands 
const Commands = {
  locate: (companies, arg) => {
    let companyNames = companies
      .filter(company => company.state === arg)
      .map(company => company.company_name);
    return companyNames;
  },
  find_before: (companies, arg) => {
    let companyNames = companies
      .filter(company => {
        return company.year_founded && company.year_founded <= arg
      })
      .map(company => company.company_name);   
    return companyNames;
  },
  find_after: (companies, arg) => {
    let companyNames = companies
      .filter(company => {
        return company.year_founded && company.year_founded >= arg
      })
      .map(company => company.company_name);
    return companyNames;
  },
  find_companies_between_size: (companies, arg) => {
    let companyNames = companies
      .filter(company => company.full_time_employees === arg)
      .map(company => company.company_name);
    return companyNames;
  },
  find_type: (companies, arg) => {
    let companyNames = companies
      .filter(company => company.company_category === arg)
      .map(company => company.company_name);
    return companyNames;
  }
}

module.exports = {
  Commands,
};