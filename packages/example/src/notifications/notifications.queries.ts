/** Types generated for queries found in "packages/example/src/notifications/notifications.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** Query 'SendNotifications' is invalid, so its result is assigned type 'never' */
export type ISendNotificationsResult = never;

/** Query 'SendNotifications' is invalid, so its parameters are assigned type 'never' */
export type ISendNotificationsParams = never;

const sendNotificationsIR: any = {"name":"SendNotifications","params":[{"name":"notifications","codeRefs":{"defined":{"a":38,"b":50,"line":3,"col":9},"used":[{"a":150,"b":162,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":[{"name":"user_id","required":true},{"name":"payload","required":true},{"name":"type","required":true}]},"required":false}],"usedParamSet":{"notifications":true},"statement":{"body":"INSERT INTO notifications (user_id, payload, type)\nVALUES :notifications RETURNING id as notification_id","loc":{"a":91,"b":194,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO notifications (user_id, payload, type)
 * VALUES :notifications RETURNING id as notification_id
 * ```
 */
export const sendNotifications = new PreparedQuery<ISendNotificationsParams,ISendNotificationsResult>(sendNotificationsIR);


/** Query 'GetNotifications' is invalid, so its result is assigned type 'never' */
export type IGetNotificationsResult = never;

/** Query 'GetNotifications' is invalid, so its parameters are assigned type 'never' */
export type IGetNotificationsParams = never;

const getNotificationsIR: any = {"name":"GetNotifications","params":[{"name":"userId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":275,"b":280,"line":11,"col":18}]}}],"usedParamSet":{"userId":true},"statement":{"body":"SELECT *\n  FROM notifications\n WHERE user_id = :userId","loc":{"a":227,"b":280,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 *   FROM notifications
 *  WHERE user_id = :userId
 * ```
 */
export const getNotifications = new PreparedQuery<IGetNotificationsParams,IGetNotificationsResult>(getNotificationsIR);


/** Query 'ThresholdFrogs' is invalid, so its result is assigned type 'never' */
export type IThresholdFrogsResult = never;

/** Query 'ThresholdFrogs' is invalid, so its parameters are assigned type 'never' */
export type IThresholdFrogsParams = never;

const thresholdFrogsIR: any = {"name":"ThresholdFrogs","params":[{"name":"numFrogs","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":458,"b":466,"line":20,"col":46}]}}],"usedParamSet":{"numFrogs":true},"statement":{"body":"SELECT u.user_name, n.payload, n.type\nFROM notifications n\nINNER JOIN users u on n.user_id = u.id\nWHERE CAST (n.payload->'num_frogs' AS int) > :numFrogs!","loc":{"a":314,"b":466,"line":17,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT u.user_name, n.payload, n.type
 * FROM notifications n
 * INNER JOIN users u on n.user_id = u.id
 * WHERE CAST (n.payload->'num_frogs' AS int) > :numFrogs!
 * ```
 */
export const thresholdFrogs = new PreparedQuery<IThresholdFrogsParams,IThresholdFrogsResult>(thresholdFrogsIR);


