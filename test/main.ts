import { EthDate } from "../eth";
import { GDate } from "../greg";


const testall = async () => {
	for await (const i of [0, 1, 2, 3]) {
		const year = 2024 + i;
	
		console.log(`\n\nYEAR: ${year}`);
		console.log('Day of Year, Term, Date String');
		
		for (let day = 1; day <= 366; day++) {
			// if (!showdates.includes(day)) continue;
	
			try {
				const d = GDate.fromDayOfYear(day, year)
				// const d = EthDate.fromDayOfYear(day, year)
				const eth = d.toEth()
				const greg = eth.toGreg();
				// console.log(d.getTerm(), d.dayOfYear(), d.toString())
				console.log(`${d.getTermFromMarkers()}\t (${d.dayOfYear()}) ${d.toDateString()} -- -- (${eth.dayOfYear()}) ${eth.toString()} -- -- (${greg.dayOfYear()}) ${greg.toDateString()}`);
			} catch (e) {
				console.log(e)
				console.log(day, year)
				await waitForEnter();
				continue
			}
		}
	
		// wait for enter key to continue
		await waitForEnter();
		console.clear();
	}

	console.log('All tests completed.');
	console.log('Press Enter to exit.');
	await waitForEnter();
	process.exit(0);
}


function waitForEnter(): Promise<void> {
  return new Promise(resolve => {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.once('data', () => {
      resolve();
    });
  });
}


console.clear();
testall();


// const d = GDate.fromDayOfYear(254, 2027)
// const eth = d.toEth()
// console.log(`${d.getTermFromMarkers()}\t (${d.dayOfYear()}) ${d.toDateString()} -- -- (${eth.dayOfYear()}) ${eth.toString()}`);