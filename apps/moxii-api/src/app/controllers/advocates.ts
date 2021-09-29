import {Advocate} from "../../../../../dist/libs/shared/src";

/**
 * Get advocate by ID
 * @param advocateId
 */
export function getAdvocateById(advocateId: string): Advocate{
  return {
    firstName: 'michael',
    lastName: 'gregory',
    id: advocateId,
  } as Advocate;
}
