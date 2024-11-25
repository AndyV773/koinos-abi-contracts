import fetch from 'node-fetch';

const contractId = "15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL";
// const test = document.getElementById("test");

async function fetchAbi() {
    try {
        const response = await fetch(`https://koinos-rest.vercel.app/api/contract/${contractId}/abi`);

        if (!response.ok) {
            throw new Error(`Response error: ${response.status}`);
        }

        const data = await response.json();

        // test.innerHTML = JSON.stringify(data.abi.methods);
        console.log("Data: ", data.abi.methods);

    } catch (error) {
        console.error("Catch error: ", error);
        // test.innerHTML = "Error fetching ABI.";
    }
}

fetchAbi();
