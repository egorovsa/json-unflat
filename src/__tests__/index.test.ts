import { JsonUnFlat } from "../index";
import { case1 } from "./casesData/case1";
import { case2 } from "./casesData/case2";
import { case3 } from "./casesData/case3";

describe('JsonUnFlat', () => {
    it("should unFlat json properly case1", () => {
        expect(JsonUnFlat(case1.json)).toEqual(case1.result);
    });

    it("should missed the root value due to additional properties", () => {
        expect(JsonUnFlat(case2.json)).toEqual(case2.result);
    });

    it("should unFlat json properly case3", () => {
        expect(JsonUnFlat(case3.json)).toEqual(case3.result);
    });
});