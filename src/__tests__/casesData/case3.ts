export const json = {
    "HIS.NAME": "foo",
    "HIS.SIRNAME": "bar",
    "MY.NAME": "foo",
    "MY.UNFLATTEN.JSON.FILE.DESCRIPTION": "bar"
}

export const result = {
    HIS: {
        NAME: 'foo',
        SIRNAME: 'bar'
    },
    MY: {
        NAME: 'foo',
        UNFLATTEN: {
            JSON: {
                FILE: {
                    DESCRIPTION: "bar"
                }
            }
        }
    }
}

export * as case3 from './case3';
