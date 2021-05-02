export const NEW_CASES = "cases";
export const RECOVERED_CASES = "recovered";
export const DEATH_CASES = "deaths";

export const caseTypes = {
    cases: { title: 'New', value: 'cases' },
    recovered: { title: 'Recovered', value: 'recovered' },
    deaths: { title: 'Death', value: 'deaths' }
}

export const BASE_URL = 'https://disease.sh/v3/covid-19/';
export const WORLDWIDEDATA_URL = BASE_URL + "all";
export const COUNTRYSPECIFICDATA_URL = BASE_URL + "countries";

export const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        rgb: "rgb(204, 16, 52)",
        half_op: "rgba(204, 16, 52, 0.5)",
        multiplier: 400,
        name: "Red"
    },
    recovered: {
        hex: "#7dd71d",
        rgb: "rgb(125, 215, 29)",
        half_op: "rgba(125, 215, 29, 0.5)",
        multiplier: 600,
        name: "green"
    },
    deaths: {
        hex: "#808080",
        rgb: "rgb(251, 68, 67)",
        half_op: "rgba(251, 68, 67, 0.5)",
        multiplier: 1000,
        name: "red"
    },
};