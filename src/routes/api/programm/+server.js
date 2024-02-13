import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit'

import { SECRET_SHEETS_KEY } from '$env/static/private'


export async function GET({ url }) {
	// const min = Number(url.searchParams.get('min') ?? '0');
	// const max = Number(url.searchParams.get('max') ?? '1');

	const sheetID = '1CgSyh6fxfbA-8qCIkirC3Q1rdC9JJZk2eSaMZd8NDLk'

	const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/0!A1:Z1001?majorDimension=ROWS&key=${SECRET_SHEETS_KEY}`
	const getResults = await fetch(sheetUrl).then(response => response.json())

	const lowercase = lowercaseKeys(getResults.values)
	const obj = convertToObject(lowercase)


	// const d = max - min;

	// if (isNaN(d) || d < 0) {
	// 	error(400, 'min and max must be numbers, and min must be less than max');
	// }
	//
	// const random = min + Math.random() * d;

	// return getResults

	return json(obj)

}

const lowercaseKeys = ([keys, ...values]) => {
	keys = keys.map(key => key.toLowerCase())
	return [keys, ...values]
}

const convertToObject = ([keys, ...values]) =>
	values.map(vs => Object.fromEntries(vs.map((v, i) => [keys[i], v])))

// const convertImgDrive = function (driveLink) {
//   return 'https://drive.google.com/uc?id={ID}\n'
// }


function missing (errorMsg) {
	// eslint-disable-next-line no-console
	// console.error('Some content is missing in google sheet:', errorMsg)
	return errorMsg
}
