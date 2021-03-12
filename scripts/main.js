console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	}
	else if (event.target.id === "showGreen") {
		filterLegos("Green")
	}else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const selectElement = document.getElementById("material")
selectElement.addEventListener("change", (select) => {
	if (select.target.id === "material") {
		const material = select.target.value
		materialFilter(material);
		console.log("user wants to see legos made of ", material)
	}
})

const materialFilter = (material) => {
	const materialArray = useLegos().filter(singleLego => {
		if (singleLego.Material === material) {
			return singleLego;
		}
	})
	makeLegoList(materialArray);
}

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();