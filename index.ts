import { map, repeat, delay } from 'rxjs/operators';
import { from } from 'rxjs';

const data$ = from(
    fetch('https://nuri-api-production.up.railway.app/mixed-pairs')
    .then(response => response.json())
);

data$.pipe(
    map((data:any) => data.pairs.filter((pair:any) => pair.symbol == "CL-weETH-WETH-0.1%")[0].price),
    delay(5000),
    repeat()
).subscribe((data:any) => {
    console.log(data);
});