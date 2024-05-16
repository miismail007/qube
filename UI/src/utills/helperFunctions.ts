import { ArrayOfAppliances } from "./types";

export function searchInAppliances(appliances: ArrayOfAppliances, searchString: string){
    if(searchString === ""){
        return appliances
    }
    const results = appliances.filter(obj =>
        Object.values(obj).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(searchString.toLowerCase())
        )
    );
    return results
}

export function downloadStatusCount(appliances: ArrayOfAppliances, status: string){
    let count = 0
    appliances.forEach((appliance) => {
        if(appliance.downloadStatus.toLowerCase() === status.toLowerCase()){
            count++
        }
    })
    return count
}

export function generateNumbersArray(n: number) {
    const numbers = [];
    for (let i = 1; i <= n; i++) {
      numbers.push(i);
    }
    return numbers;
}

export const getPageCount = (TotalCount: number, countEachPage: number) => {
    return generateNumbersArray(TotalCount/countEachPage)
}