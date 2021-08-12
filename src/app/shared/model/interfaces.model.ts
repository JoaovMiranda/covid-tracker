export interface AllContinents {
    updated: number,
    cases: number,
    todayCases: number,
    deaths: number,
    todayDeaths: number,
    recovered: number,
    todayRecovered: number,
    active: number,
    critical: number,
    casesPerOneMillion: number,
    deathsPerOneMillion: number,
    tests: number,
    testsPerOneMillion: number,
    population: number,
    continent: string,
    activePerOneMillion: number,
    recoveredPerOneMillion: number,
    criticalPerOneMillion: number,
    countries: string[]
}

export interface CountryInfo {
    flag: string,
    iso2: string,
    iso3: string,
    lat: number,
    long: number,
    _id: number

}
export interface AllContries {
    active: number
    activePerOneMillion: number
    cases: number
    casesPerOneMillion: number
    continent: string
    country: string
    countryInfo: CountryInfo
    critical: number
    criticalPerOneMillion: number
    deaths: number
    deathsPerOneMillion: number
    oneCasePerPeople: number
    oneDeathPerPeople: number
    oneTestPerPeople: number
    population: number
    recovered: number
    recoveredPerOneMillion: number
    tests: number
    testsPerOneMillion: number
    todayCases: number
    todayDeaths: number
    todayRecovered: number
    updated: number
}