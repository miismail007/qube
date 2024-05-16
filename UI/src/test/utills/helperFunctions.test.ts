import { downloadStatusCount, generateNumbersArray, getPageCount, searchInAppliances } from "../../utills/helperFunctions"
import mockData from "../mockData.json"

describe("Test suite for HelperFunction",() => {
    test("Test for generateNumbersArray()",() => {
        expect(generateNumbersArray(5)).toEqual([1,2,3,4,5])
    })
    test("Test for getPageCount()", () => {
        expect(getPageCount(100,10)).toEqual([1,2,3,4,5,6,7,8,9,10])
    })
    test("Test for downloadStatusCount()", () => {
        expect(downloadStatusCount(mockData.appliances,"failed")).toEqual(3)
    })
    test("Test for searchInAppliances() if search string is empty", () => {
        expect(searchInAppliances(mockData.appliances, "")).toEqual(mockData.appliances)
    })
    test("Test for searchInAppliances() if search string is not empty", () => {
        expect(searchInAppliances(mockData.appliances, "AC6UVL")).toEqual([mockData.appliances[0]])
    })
})