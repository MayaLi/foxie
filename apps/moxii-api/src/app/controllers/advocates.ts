import {Advocate} from "../../../../../libs/data/src";

/**
 *
 * @param advocateId
 */
export function getAdvocateById(advocateId: string): Advocate{
  return {
    firstName: 'michael',
    lastName: 'gregory',
    id: advocateId,
  } as Advocate;
}
