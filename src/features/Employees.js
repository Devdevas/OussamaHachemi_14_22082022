import { createSlice } from "@reduxjs/toolkit"

const employeesSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        create: {
            prepare: (
                firstName,
                lastName,
                dateOfBirth,
                startDate,
                department,
                street,
                city,
                states,
                zipCode
            ) => ({
                payload: {
                    firstName,
                    lastName,
                    dateOfBirth,
                    startDate,
                    department,
                    street,
                    city,
                    states,
                    zipCode
                }
            }),
            reducer: (draft, action) => {
                draft.push({
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    dateOfBirth: action.payload.dateOfBirth,
                    startDate: action.payload.startDate,
                    department: action.payload.department,
                    street: action.payload.street,
                    city: action.payload.city,
                    states: action.payload.states,
                    zipCode: action.payload.zipCode,
                })
            }
        }
    }
})

export const { create } = employeesSlice.actions
export default employeesSlice.reducer
