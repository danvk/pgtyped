/** Types generated for queries found in "packages/example/src/books/books.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** Query 'FindBookById' is invalid, so its result is assigned type 'never' */
export type IFindBookByIdResult = never;

/** Query 'FindBookById' is invalid, so its parameters are assigned type 'never' */
export type IFindBookByIdParams = never;

const findBookByIdIR: any = {"name":"FindBookById","params":[{"name":"id","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":57,"b":58,"line":2,"col":32}]}}],"usedParamSet":{"id":true},"statement":{"body":"SELECT * FROM books WHERE id = :id","loc":{"a":25,"b":58,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM books WHERE id = :id
 * ```
 */
export const findBookById = new PreparedQuery<IFindBookByIdParams,IFindBookByIdResult>(findBookByIdIR);


/** Query 'InsertBooks' is invalid, so its result is assigned type 'never' */
export type IInsertBooksResult = never;

/** Query 'InsertBooks' is invalid, so its parameters are assigned type 'never' */
export type IInsertBooksParams = never;

const insertBooksIR: any = {"name":"InsertBooks","params":[{"name":"books","codeRefs":{"defined":{"a":95,"b":99,"line":7,"col":9},"used":[{"a":212,"b":216,"line":10,"col":8}]},"transform":{"type":"pick_array_spread","keys":[{"name":"rank","required":true},{"name":"name","required":true},{"name":"authorId","required":true},{"name":"categories","required":false}]},"required":false}],"usedParamSet":{"books":true},"statement":{"body":"INSERT INTO books (rank, name, author_id, categories)\nVALUES :books RETURNING id as book_id","loc":{"a":150,"b":240,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO books (rank, name, author_id, categories)
 * VALUES :books RETURNING id as book_id
 * ```
 */
export const insertBooks = new PreparedQuery<IInsertBooksParams,IInsertBooksResult>(insertBooksIR);


/** Query 'UpdateBooksCustom' is invalid, so its result is assigned type 'never' */
export type IUpdateBooksCustomResult = never;

/** Query 'UpdateBooksCustom' is invalid, so its parameters are assigned type 'never' */
export type IUpdateBooksCustomParams = never;

const updateBooksCustomIR: any = {"name":"UpdateBooksCustom","params":[{"name":"rank","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":326,"b":329,"line":18,"col":20},{"a":372,"b":375,"line":19,"col":23}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":438,"b":440,"line":23,"col":12}]}}],"usedParamSet":{"rank":true,"id":true},"statement":{"body":"UPDATE books\nSET\n    rank = (\n        CASE WHEN (:rank::int IS NOT NULL)\n                 THEN :rank\n             ELSE rank\n            END\n        )\nWHERE id = :id!","loc":{"a":276,"b":440,"line":15,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE books
 * SET
 *     rank = (
 *         CASE WHEN (:rank::int IS NOT NULL)
 *                  THEN :rank
 *              ELSE rank
 *             END
 *         )
 * WHERE id = :id!
 * ```
 */
export const updateBooksCustom = new PreparedQuery<IUpdateBooksCustomParams,IUpdateBooksCustomResult>(updateBooksCustomIR);


/** Query 'UpdateBooks' is invalid, so its result is assigned type 'never' */
export type IUpdateBooksResult = never;

/** Query 'UpdateBooks' is invalid, so its parameters are assigned type 'never' */
export type IUpdateBooksParams = never;

const updateBooksIR: any = {"name":"UpdateBooks","params":[{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":521,"b":524,"line":31,"col":12}]}},{"name":"rank","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":539,"b":542,"line":32,"col":12}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":556,"b":558,"line":33,"col":12}]}}],"usedParamSet":{"name":true,"rank":true,"id":true},"statement":{"body":"UPDATE books\n                     \nSET\n    name = :name,\n    rank = :rank\nWHERE id = :id!","loc":{"a":470,"b":558,"line":28,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE books
 *                      
 * SET
 *     name = :name,
 *     rank = :rank
 * WHERE id = :id!
 * ```
 */
export const updateBooks = new PreparedQuery<IUpdateBooksParams,IUpdateBooksResult>(updateBooksIR);


/** Query 'UpdateBooksRankNotNull' is invalid, so its result is assigned type 'never' */
export type IUpdateBooksRankNotNullResult = never;

/** Query 'UpdateBooksRankNotNull' is invalid, so its parameters are assigned type 'never' */
export type IUpdateBooksRankNotNullParams = never;

const updateBooksRankNotNullIR: any = {"name":"UpdateBooksRankNotNull","params":[{"name":"rank","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":628,"b":632,"line":40,"col":12}]}},{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":647,"b":650,"line":41,"col":12}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":664,"b":666,"line":42,"col":12}]}}],"usedParamSet":{"rank":true,"name":true,"id":true},"statement":{"body":"UPDATE books\nSET\n    rank = :rank!,\n    name = :name\nWHERE id = :id!","loc":{"a":599,"b":666,"line":38,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE books
 * SET
 *     rank = :rank!,
 *     name = :name
 * WHERE id = :id!
 * ```
 */
export const updateBooksRankNotNull = new PreparedQuery<IUpdateBooksRankNotNullParams,IUpdateBooksRankNotNullResult>(updateBooksRankNotNullIR);


/** Query 'GetBooksByAuthorName' is invalid, so its result is assigned type 'never' */
export type IGetBooksByAuthorNameResult = never;

/** Query 'GetBooksByAuthorName' is invalid, so its parameters are assigned type 'never' */
export type IGetBooksByAuthorNameParams = never;

const getBooksByAuthorNameIR: any = {"name":"GetBooksByAuthorName","params":[{"name":"authorName","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":814,"b":824,"line":47,"col":44}]}}],"usedParamSet":{"authorName":true},"statement":{"body":"SELECT b.* FROM books b\nINNER JOIN authors a ON a.id = b.author_id\nWHERE a.first_name || ' ' || a.last_name = :authorName!","loc":{"a":703,"b":824,"line":45,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT b.* FROM books b
 * INNER JOIN authors a ON a.id = b.author_id
 * WHERE a.first_name || ' ' || a.last_name = :authorName!
 * ```
 */
export const getBooksByAuthorName = new PreparedQuery<IGetBooksByAuthorNameParams,IGetBooksByAuthorNameResult>(getBooksByAuthorNameIR);


/** Query 'AggregateEmailsAndTest' is invalid, so its result is assigned type 'never' */
export type IAggregateEmailsAndTestResult = never;

/** Query 'AggregateEmailsAndTest' is invalid, so its parameters are assigned type 'never' */
export type IAggregateEmailsAndTestParams = never;

const aggregateEmailsAndTestIR: any = {"name":"AggregateEmailsAndTest","params":[{"name":"testAges","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":916,"b":923,"line":50,"col":53}]}}],"usedParamSet":{"testAges":true},"statement":{"body":"SELECT array_agg(email) as emails, array_agg(age) = :testAges as ageTest FROM users","loc":{"a":863,"b":945,"line":50,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT array_agg(email) as emails, array_agg(age) = :testAges as ageTest FROM users
 * ```
 */
export const aggregateEmailsAndTest = new PreparedQuery<IAggregateEmailsAndTestParams,IAggregateEmailsAndTestResult>(aggregateEmailsAndTestIR);


