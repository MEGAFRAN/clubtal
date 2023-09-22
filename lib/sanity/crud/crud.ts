import { Category, Company } from "../../../app/constants/interfaces/content_models/interfaces"
import client from "../client"

// Creating a company
const createCompany = async (company: Company): Promise<void> => {
  await client.create(company)
}

// Creating a category
const createCategory = async (category: Category): Promise<void> => {
  await client.create(category)
}

// Delete a company
const deleteDocument = async (_id: string): Promise<void> => {
  await client.delete(_id)
}

// Setting a field only if not already present
const setNewFieldIfNotPresent = async (
  _id: string,
  field: Record<string, unknown>,
): Promise<void> => {
  await client.patch(_id).setIfMissing(field).commit()
}

// Removing/unsetting fields
const removeField = async (_id: string, field: string[]): Promise<void> => {
  await client.patch(_id).setIfMissing(field).commit()
}

// Incrementing numbers
const incrementNumber = async (_id: string, field: Record<string, number>): Promise<void> => {
  await client.patch(_id).inc(field).commit()
}

// Decrementing numbers
const decrementNumber = async (_id: string, field: Record<string, number>): Promise<void> => {
  await client.patch(_id).dec(field).commit()
}

// Appending/prepending elements to an array
const addToArray = async (_id: string, fieldName: string, fieldValue: unknown[]): Promise<void> => {
  await client
    .patch(_id)
    .setIfMissing({ [fieldName]: [] })
    .append(fieldName, [fieldValue])
    .commit({ autoGenerateArrayKeys: true })
}

// Deleting an element from an array
const deleteFromArray = async (
  _id: string,
  fieldName: string,
  fieldValue: string,
): Promise<void> => {
  const fieldsToRemove = [`${fieldName}[_key==${fieldValue}`]
  await client.patch(_id).unset(fieldsToRemove).commit()
}

const cmsCrud = {
  createCompany,
  createCategory,
  deleteDocument,
  setNewFieldIfNotPresent,
  removeField,
  incrementNumber,
  decrementNumber,
  addToArray,
  deleteFromArray,
}

export default cmsCrud
