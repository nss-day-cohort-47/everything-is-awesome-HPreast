import { useLegos } from './LegoData.js';
import { LegoDetail } from './LegoDetail.js';

export const makeLegoList = (legosArray) => {
  render(legosArray)
};

const render = (legoData) => {
  	const legoDisplay = document.querySelector("#all-legos");
	//What is map?
	//what does map return? An Array.
	//https://www.w3schools.com/jsref/jsref_map.asp
  	let HTMLArray = legoData.map(oneLego => {
    	return LegoDetail(oneLego);
  	})
  	//Since HTMLArray is an array, we can use join to make it a string
  	legoDisplay.innerHTML = HTMLArray.join("");
}

export const searchBar = () => {


	// Place an article element in your HTML with the class below
	const legoId = document.getElementById("all-legos")
	
	document
		.querySelector("#legoSearch")
		.addEventListener("keydown", event => {
			if (event.key === "Enter") {
				/*
					When user presses enter, find the matching business.
					You can use the `.includes()` method strings to
					see if a smaller string is part of a larger string.
					Example:
						business.companyName.includes(keyPressEvent.target.value)
				*/
	
				const filteredId = useLegos().find((LegoDetail)  => 
				LegoDetail.LegoId === event.target.value) // implement .find() method here
				
				legoId.innerHTML = `<section class="block-wrapper" style="background-color:#${filteredId.ColorHex}">
				<h3>Name: ${filteredId.LegoName.toUpperCase()}</h3>
				<div class="block-years">Manufactured ${filteredId.YearFrom} - ${filteredId.YearTo}</div>
				<div class="block-notes">${filteredId.Notes}</div>
				</section>
				`;
			}
		});
	}