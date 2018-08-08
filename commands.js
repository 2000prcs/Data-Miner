
let companyNames;

// Handle each commands 
const Commands = {
  locate: (companies, arg) => {
    companyNames = companies
      .filter(company => company.state === arg)
      .map(company => company.company_name);
    return companyNames;
  },
  find_before: (companies, arg) => {
    companyNames = companies
      .filter(company => {
        return company.year_founded && company.year_founded <= arg
      })
      .map(company => company.company_name);   
    return companyNames;
  },
  find_after: (companies, arg) => {
    companyNames = companies
      .filter(company => {
        return company.year_founded && company.year_founded >= arg
      })
      .map(company => company.company_name);
    return companyNames;
  },
  find_companies_between_size: (companies, arg) => {
    companyNames = companies
      .filter(company => company.full_time_employees === arg)
      .map(company => company.company_name);
    return companyNames;
  },
  find_type: (companies, arg) => {
    companyNames = companies
      .filter(company => company.company_category === arg)
      .map(company => company.company_name);
    return companyNames;
  }
}

module.exports = {
  Commands,
};