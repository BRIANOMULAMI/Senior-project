
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Participants
 * 
 */
export type Participants = $Result.DefaultSelection<Prisma.$ParticipantsPayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model Judges
 * 
 */
export type Judges = $Result.DefaultSelection<Prisma.$JudgesPayload>
/**
 * Model Marks
 * 
 */
export type Marks = $Result.DefaultSelection<Prisma.$MarksPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Verifications
 * 
 */
export type Verifications = $Result.DefaultSelection<Prisma.$VerificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userRoles: {
  ADMIN: 'ADMIN',
  JUDGE: 'JUDGE',
  SCHOOL: 'SCHOOL'
};

export type userRoles = (typeof userRoles)[keyof typeof userRoles]


export const APPLICATION_STATUS: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DENIED: 'DENIED'
};

export type APPLICATION_STATUS = (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS]


export const COMPETITION_STATUS: {
  UPCOMING: 'UPCOMING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

export type COMPETITION_STATUS = (typeof COMPETITION_STATUS)[keyof typeof COMPETITION_STATUS]

}

export type userRoles = $Enums.userRoles

export const userRoles: typeof $Enums.userRoles

export type APPLICATION_STATUS = $Enums.APPLICATION_STATUS

export const APPLICATION_STATUS: typeof $Enums.APPLICATION_STATUS

export type COMPETITION_STATUS = $Enums.COMPETITION_STATUS

export const COMPETITION_STATUS: typeof $Enums.COMPETITION_STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Participants
 * const participants = await prisma.participants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Participants
   * const participants = await prisma.participants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.participants`: Exposes CRUD operations for the **Participants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participants.findMany()
    * ```
    */
  get participants(): Prisma.ParticipantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.judges`: Exposes CRUD operations for the **Judges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Judges
    * const judges = await prisma.judges.findMany()
    * ```
    */
  get judges(): Prisma.JudgesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marks`: Exposes CRUD operations for the **Marks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.marks.findMany()
    * ```
    */
  get marks(): Prisma.MarksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verifications`: Exposes CRUD operations for the **Verifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verifications.findMany()
    * ```
    */
  get verifications(): Prisma.VerificationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Participants: 'Participants',
    Competition: 'Competition',
    Judges: 'Judges',
    Marks: 'Marks',
    School: 'School',
    Users: 'Users',
    Verifications: 'Verifications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "participants" | "competition" | "judges" | "marks" | "school" | "users" | "verifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Participants: {
        payload: Prisma.$ParticipantsPayload<ExtArgs>
        fields: Prisma.ParticipantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          findFirst: {
            args: Prisma.ParticipantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          findMany: {
            args: Prisma.ParticipantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          create: {
            args: Prisma.ParticipantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          createMany: {
            args: Prisma.ParticipantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          delete: {
            args: Prisma.ParticipantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          update: {
            args: Prisma.ParticipantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantsPayload>
          }
          aggregate: {
            args: Prisma.ParticipantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipants>
          }
          groupBy: {
            args: Prisma.ParticipantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantsCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantsCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      Judges: {
        payload: Prisma.$JudgesPayload<ExtArgs>
        fields: Prisma.JudgesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JudgesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JudgesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>
          }
          findFirst: {
            args: Prisma.JudgesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JudgesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>
          }
          findMany: {
            args: Prisma.JudgesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>[]
          }
          create: {
            args: Prisma.JudgesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>
          }
          createMany: {
            args: Prisma.JudgesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JudgesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>[]
          }
          delete: {
            args: Prisma.JudgesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>
          }
          update: {
            args: Prisma.JudgesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>
          }
          deleteMany: {
            args: Prisma.JudgesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JudgesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JudgesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>[]
          }
          upsert: {
            args: Prisma.JudgesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JudgesPayload>
          }
          aggregate: {
            args: Prisma.JudgesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJudges>
          }
          groupBy: {
            args: Prisma.JudgesGroupByArgs<ExtArgs>
            result: $Utils.Optional<JudgesGroupByOutputType>[]
          }
          count: {
            args: Prisma.JudgesCountArgs<ExtArgs>
            result: $Utils.Optional<JudgesCountAggregateOutputType> | number
          }
        }
      }
      Marks: {
        payload: Prisma.$MarksPayload<ExtArgs>
        fields: Prisma.MarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findFirst: {
            args: Prisma.MarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          findMany: {
            args: Prisma.MarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          create: {
            args: Prisma.MarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          createMany: {
            args: Prisma.MarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          delete: {
            args: Prisma.MarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          update: {
            args: Prisma.MarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          deleteMany: {
            args: Prisma.MarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>[]
          }
          upsert: {
            args: Prisma.MarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarksPayload>
          }
          aggregate: {
            args: Prisma.MarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarks>
          }
          groupBy: {
            args: Prisma.MarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarksCountArgs<ExtArgs>
            result: $Utils.Optional<MarksCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Verifications: {
        payload: Prisma.$VerificationsPayload<ExtArgs>
        fields: Prisma.VerificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>
          }
          findFirst: {
            args: Prisma.VerificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>
          }
          findMany: {
            args: Prisma.VerificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>[]
          }
          create: {
            args: Prisma.VerificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>
          }
          createMany: {
            args: Prisma.VerificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>[]
          }
          delete: {
            args: Prisma.VerificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>
          }
          update: {
            args: Prisma.VerificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>
          }
          deleteMany: {
            args: Prisma.VerificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>[]
          }
          upsert: {
            args: Prisma.VerificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationsPayload>
          }
          aggregate: {
            args: Prisma.VerificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerifications>
          }
          groupBy: {
            args: Prisma.VerificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationsCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    participants?: ParticipantsOmit
    competition?: CompetitionOmit
    judges?: JudgesOmit
    marks?: MarksOmit
    school?: SchoolOmit
    users?: UsersOmit
    verifications?: VerificationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ParticipantsCountOutputType
   */

  export type ParticipantsCountOutputType = {
    marks: number
  }

  export type ParticipantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marks?: boolean | ParticipantsCountOutputTypeCountMarksArgs
  }

  // Custom InputTypes
  /**
   * ParticipantsCountOutputType without action
   */
  export type ParticipantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantsCountOutputType
     */
    select?: ParticipantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantsCountOutputType without action
   */
  export type ParticipantsCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    judges: number
    participants: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judges?: boolean | CompetitionCountOutputTypeCountJudgesArgs
    participants?: boolean | CompetitionCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountJudgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgesWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
  }


  /**
   * Count Type JudgesCountOutputType
   */

  export type JudgesCountOutputType = {
    competitions: number
    marks: number
  }

  export type JudgesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | JudgesCountOutputTypeCountCompetitionsArgs
    marks?: boolean | JudgesCountOutputTypeCountMarksArgs
  }

  // Custom InputTypes
  /**
   * JudgesCountOutputType without action
   */
  export type JudgesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JudgesCountOutputType
     */
    select?: JudgesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JudgesCountOutputType without action
   */
  export type JudgesCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
  }

  /**
   * JudgesCountOutputType without action
   */
  export type JudgesCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    participant: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | SchoolCountOutputTypeCountParticipantArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Participants
   */

  export type AggregateParticipants = {
    _count: ParticipantsCountAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  export type ParticipantsMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    competitionId: string | null
    status: $Enums.APPLICATION_STATUS | null
    createdAt: Date | null
  }

  export type ParticipantsMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    competitionId: string | null
    status: $Enums.APPLICATION_STATUS | null
    createdAt: Date | null
  }

  export type ParticipantsCountAggregateOutputType = {
    id: number
    schoolId: number
    competitionId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ParticipantsMinAggregateInputType = {
    id?: true
    schoolId?: true
    competitionId?: true
    status?: true
    createdAt?: true
  }

  export type ParticipantsMaxAggregateInputType = {
    id?: true
    schoolId?: true
    competitionId?: true
    status?: true
    createdAt?: true
  }

  export type ParticipantsCountAggregateInputType = {
    id?: true
    schoolId?: true
    competitionId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to aggregate.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantsMaxAggregateInputType
  }

  export type GetParticipantsAggregateType<T extends ParticipantsAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipants[P]>
      : GetScalarType<T[P], AggregateParticipants[P]>
  }




  export type ParticipantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithAggregationInput | ParticipantsOrderByWithAggregationInput[]
    by: ParticipantsScalarFieldEnum[] | ParticipantsScalarFieldEnum
    having?: ParticipantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantsCountAggregateInputType | true
    _min?: ParticipantsMinAggregateInputType
    _max?: ParticipantsMaxAggregateInputType
  }

  export type ParticipantsGroupByOutputType = {
    id: string
    schoolId: string
    competitionId: string
    status: $Enums.APPLICATION_STATUS
    createdAt: Date
    _count: ParticipantsCountAggregateOutputType | null
    _min: ParticipantsMinAggregateOutputType | null
    _max: ParticipantsMaxAggregateOutputType | null
  }

  type GetParticipantsGroupByPayload<T extends ParticipantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantsGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    competitionId?: boolean
    status?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    marks?: boolean | Participants$marksArgs<ExtArgs>
    _count?: boolean | ParticipantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    competitionId?: boolean
    status?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    competitionId?: boolean
    status?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participants"]>

  export type ParticipantsSelectScalar = {
    id?: boolean
    schoolId?: boolean
    competitionId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ParticipantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "competitionId" | "status" | "createdAt", ExtArgs["result"]["participants"]>
  export type ParticipantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    marks?: boolean | Participants$marksArgs<ExtArgs>
    _count?: boolean | ParticipantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }
  export type ParticipantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }

  export type $ParticipantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participants"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      competition: Prisma.$CompetitionPayload<ExtArgs>
      marks: Prisma.$MarksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      competitionId: string
      status: $Enums.APPLICATION_STATUS
      createdAt: Date
    }, ExtArgs["result"]["participants"]>
    composites: {}
  }

  type ParticipantsGetPayload<S extends boolean | null | undefined | ParticipantsDefaultArgs> = $Result.GetResult<Prisma.$ParticipantsPayload, S>

  type ParticipantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantsCountAggregateInputType | true
    }

  export interface ParticipantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participants'], meta: { name: 'Participants' } }
    /**
     * Find zero or one Participants that matches the filter.
     * @param {ParticipantsFindUniqueArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantsFindUniqueArgs>(args: SelectSubset<T, ParticipantsFindUniqueArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantsFindUniqueOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindFirstArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantsFindFirstArgs>(args?: SelectSubset<T, ParticipantsFindFirstArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindFirstOrThrowArgs} args - Arguments to find a Participants
     * @example
     * // Get one Participants
     * const participants = await prisma.participants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participants.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantsWithIdOnly = await prisma.participants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantsFindManyArgs>(args?: SelectSubset<T, ParticipantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participants.
     * @param {ParticipantsCreateArgs} args - Arguments to create a Participants.
     * @example
     * // Create one Participants
     * const Participants = await prisma.participants.create({
     *   data: {
     *     // ... data to create a Participants
     *   }
     * })
     * 
     */
    create<T extends ParticipantsCreateArgs>(args: SelectSubset<T, ParticipantsCreateArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantsCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantsCreateManyArgs>(args?: SelectSubset<T, ParticipantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantsCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participants = await prisma.participants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantsWithIdOnly = await prisma.participants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participants.
     * @param {ParticipantsDeleteArgs} args - Arguments to delete one Participants.
     * @example
     * // Delete one Participants
     * const Participants = await prisma.participants.delete({
     *   where: {
     *     // ... filter to delete one Participants
     *   }
     * })
     * 
     */
    delete<T extends ParticipantsDeleteArgs>(args: SelectSubset<T, ParticipantsDeleteArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participants.
     * @param {ParticipantsUpdateArgs} args - Arguments to update one Participants.
     * @example
     * // Update one Participants
     * const participants = await prisma.participants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantsUpdateArgs>(args: SelectSubset<T, ParticipantsUpdateArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantsDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantsDeleteManyArgs>(args?: SelectSubset<T, ParticipantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantsUpdateManyArgs>(args: SelectSubset<T, ParticipantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantsUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participants = await prisma.participants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantsWithIdOnly = await prisma.participants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantsUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participants.
     * @param {ParticipantsUpsertArgs} args - Arguments to update or create a Participants.
     * @example
     * // Update or create a Participants
     * const participants = await prisma.participants.upsert({
     *   create: {
     *     // ... data to create a Participants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participants we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantsUpsertArgs>(args: SelectSubset<T, ParticipantsUpsertArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participants.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantsCountArgs>(
      args?: Subset<T, ParticipantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantsAggregateArgs>(args: Subset<T, ParticipantsAggregateArgs>): Prisma.PrismaPromise<GetParticipantsAggregateType<T>>

    /**
     * Group by Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantsGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participants model
   */
  readonly fields: ParticipantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marks<T extends Participants$marksArgs<ExtArgs> = {}>(args?: Subset<T, Participants$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participants model
   */
  interface ParticipantsFieldRefs {
    readonly id: FieldRef<"Participants", 'String'>
    readonly schoolId: FieldRef<"Participants", 'String'>
    readonly competitionId: FieldRef<"Participants", 'String'>
    readonly status: FieldRef<"Participants", 'APPLICATION_STATUS'>
    readonly createdAt: FieldRef<"Participants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participants findUnique
   */
  export type ParticipantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants findUniqueOrThrow
   */
  export type ParticipantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants findFirst
   */
  export type ParticipantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants findFirstOrThrow
   */
  export type ParticipantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants findMany
   */
  export type ParticipantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Participants create
   */
  export type ParticipantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Participants.
     */
    data: XOR<ParticipantsCreateInput, ParticipantsUncheckedCreateInput>
  }

  /**
   * Participants createMany
   */
  export type ParticipantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantsCreateManyInput | ParticipantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participants createManyAndReturn
   */
  export type ParticipantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantsCreateManyInput | ParticipantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participants update
   */
  export type ParticipantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Participants.
     */
    data: XOR<ParticipantsUpdateInput, ParticipantsUncheckedUpdateInput>
    /**
     * Choose, which Participants to update.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants updateMany
   */
  export type ParticipantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participants updateManyAndReturn
   */
  export type ParticipantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participants upsert
   */
  export type ParticipantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Participants to update in case it exists.
     */
    where: ParticipantsWhereUniqueInput
    /**
     * In case the Participants found by the `where` argument doesn't exist, create a new Participants with this data.
     */
    create: XOR<ParticipantsCreateInput, ParticipantsUncheckedCreateInput>
    /**
     * In case the Participants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantsUpdateInput, ParticipantsUncheckedUpdateInput>
  }

  /**
   * Participants delete
   */
  export type ParticipantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    /**
     * Filter which Participants to delete.
     */
    where: ParticipantsWhereUniqueInput
  }

  /**
   * Participants deleteMany
   */
  export type ParticipantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantsWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participants.marks
   */
  export type Participants$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Participants without action
   */
  export type ParticipantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
  }


  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    maxParticipants: number | null
    totalParticipants: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    maxParticipants: number | null
    totalParticipants: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    schedule: Date | null
    description: string | null
    venue: string | null
    maxParticipants: number | null
    status: $Enums.COMPETITION_STATUS | null
    totalParticipants: number | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    schedule: Date | null
    description: string | null
    venue: string | null
    maxParticipants: number | null
    status: $Enums.COMPETITION_STATUS | null
    totalParticipants: number | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    schedule: number
    description: number
    venue: number
    maxParticipants: number
    status: number
    totalParticipants: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    maxParticipants?: true
    totalParticipants?: true
  }

  export type CompetitionSumAggregateInputType = {
    maxParticipants?: true
    totalParticipants?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    schedule?: true
    description?: true
    venue?: true
    maxParticipants?: true
    status?: true
    totalParticipants?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    schedule?: true
    description?: true
    venue?: true
    maxParticipants?: true
    status?: true
    totalParticipants?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    schedule?: true
    description?: true
    venue?: true
    maxParticipants?: true
    status?: true
    totalParticipants?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: string
    name: string
    schedule: Date
    description: string
    venue: string
    maxParticipants: number
    status: $Enums.COMPETITION_STATUS
    totalParticipants: number
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schedule?: boolean
    description?: boolean
    venue?: boolean
    maxParticipants?: boolean
    status?: boolean
    totalParticipants?: boolean
    judges?: boolean | Competition$judgesArgs<ExtArgs>
    participants?: boolean | Competition$participantsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schedule?: boolean
    description?: boolean
    venue?: boolean
    maxParticipants?: boolean
    status?: boolean
    totalParticipants?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schedule?: boolean
    description?: boolean
    venue?: boolean
    maxParticipants?: boolean
    status?: boolean
    totalParticipants?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    name?: boolean
    schedule?: boolean
    description?: boolean
    venue?: boolean
    maxParticipants?: boolean
    status?: boolean
    totalParticipants?: boolean
  }

  export type CompetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "schedule" | "description" | "venue" | "maxParticipants" | "status" | "totalParticipants", ExtArgs["result"]["competition"]>
  export type CompetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judges?: boolean | Competition$judgesArgs<ExtArgs>
    participants?: boolean | Competition$participantsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {
      judges: Prisma.$JudgesPayload<ExtArgs>[]
      participants: Prisma.$ParticipantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      schedule: Date
      description: string
      venue: string
      maxParticipants: number
      status: $Enums.COMPETITION_STATUS
      totalParticipants: number
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFindUniqueArgs>(args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFindFirstArgs>(args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFindManyArgs>(args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends CompetitionCreateArgs>(args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCreateManyArgs>(args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends CompetitionDeleteArgs>(args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionUpdateArgs>(args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionDeleteManyArgs>(args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionUpdateManyArgs>(args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionUpsertArgs>(args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    judges<T extends Competition$judgesArgs<ExtArgs> = {}>(args?: Subset<T, Competition$judgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Competition$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Competition$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Competition model
   */
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'String'>
    readonly name: FieldRef<"Competition", 'String'>
    readonly schedule: FieldRef<"Competition", 'DateTime'>
    readonly description: FieldRef<"Competition", 'String'>
    readonly venue: FieldRef<"Competition", 'String'>
    readonly maxParticipants: FieldRef<"Competition", 'Int'>
    readonly status: FieldRef<"Competition", 'COMPETITION_STATUS'>
    readonly totalParticipants: FieldRef<"Competition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }

  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition createManyAndReturn
   */
  export type CompetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition updateManyAndReturn
   */
  export type CompetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }

  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competition.judges
   */
  export type Competition$judgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    where?: JudgesWhereInput
    orderBy?: JudgesOrderByWithRelationInput | JudgesOrderByWithRelationInput[]
    cursor?: JudgesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JudgesScalarFieldEnum | JudgesScalarFieldEnum[]
  }

  /**
   * Competition.participants
   */
  export type Competition$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    cursor?: ParticipantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
  }


  /**
   * Model Judges
   */

  export type AggregateJudges = {
    _count: JudgesCountAggregateOutputType | null
    _min: JudgesMinAggregateOutputType | null
    _max: JudgesMaxAggregateOutputType | null
  }

  export type JudgesMinAggregateOutputType = {
    id: string | null
    nationalId: string | null
    userId: string | null
  }

  export type JudgesMaxAggregateOutputType = {
    id: string | null
    nationalId: string | null
    userId: string | null
  }

  export type JudgesCountAggregateOutputType = {
    id: number
    nationalId: number
    userId: number
    _all: number
  }


  export type JudgesMinAggregateInputType = {
    id?: true
    nationalId?: true
    userId?: true
  }

  export type JudgesMaxAggregateInputType = {
    id?: true
    nationalId?: true
    userId?: true
  }

  export type JudgesCountAggregateInputType = {
    id?: true
    nationalId?: true
    userId?: true
    _all?: true
  }

  export type JudgesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Judges to aggregate.
     */
    where?: JudgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgesOrderByWithRelationInput | JudgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JudgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Judges
    **/
    _count?: true | JudgesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JudgesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JudgesMaxAggregateInputType
  }

  export type GetJudgesAggregateType<T extends JudgesAggregateArgs> = {
        [P in keyof T & keyof AggregateJudges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJudges[P]>
      : GetScalarType<T[P], AggregateJudges[P]>
  }




  export type JudgesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgesWhereInput
    orderBy?: JudgesOrderByWithAggregationInput | JudgesOrderByWithAggregationInput[]
    by: JudgesScalarFieldEnum[] | JudgesScalarFieldEnum
    having?: JudgesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JudgesCountAggregateInputType | true
    _min?: JudgesMinAggregateInputType
    _max?: JudgesMaxAggregateInputType
  }

  export type JudgesGroupByOutputType = {
    id: string
    nationalId: string
    userId: string
    _count: JudgesCountAggregateOutputType | null
    _min: JudgesMinAggregateOutputType | null
    _max: JudgesMaxAggregateOutputType | null
  }

  type GetJudgesGroupByPayload<T extends JudgesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JudgesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JudgesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JudgesGroupByOutputType[P]>
            : GetScalarType<T[P], JudgesGroupByOutputType[P]>
        }
      >
    >


  export type JudgesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nationalId?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    competitions?: boolean | Judges$competitionsArgs<ExtArgs>
    marks?: boolean | Judges$marksArgs<ExtArgs>
    _count?: boolean | JudgesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["judges"]>

  export type JudgesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nationalId?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["judges"]>

  export type JudgesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nationalId?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["judges"]>

  export type JudgesSelectScalar = {
    id?: boolean
    nationalId?: boolean
    userId?: boolean
  }

  export type JudgesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nationalId" | "userId", ExtArgs["result"]["judges"]>
  export type JudgesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    competitions?: boolean | Judges$competitionsArgs<ExtArgs>
    marks?: boolean | Judges$marksArgs<ExtArgs>
    _count?: boolean | JudgesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JudgesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type JudgesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $JudgesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Judges"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      competitions: Prisma.$CompetitionPayload<ExtArgs>[]
      marks: Prisma.$MarksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nationalId: string
      userId: string
    }, ExtArgs["result"]["judges"]>
    composites: {}
  }

  type JudgesGetPayload<S extends boolean | null | undefined | JudgesDefaultArgs> = $Result.GetResult<Prisma.$JudgesPayload, S>

  type JudgesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JudgesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JudgesCountAggregateInputType | true
    }

  export interface JudgesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Judges'], meta: { name: 'Judges' } }
    /**
     * Find zero or one Judges that matches the filter.
     * @param {JudgesFindUniqueArgs} args - Arguments to find a Judges
     * @example
     * // Get one Judges
     * const judges = await prisma.judges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JudgesFindUniqueArgs>(args: SelectSubset<T, JudgesFindUniqueArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Judges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JudgesFindUniqueOrThrowArgs} args - Arguments to find a Judges
     * @example
     * // Get one Judges
     * const judges = await prisma.judges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JudgesFindUniqueOrThrowArgs>(args: SelectSubset<T, JudgesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Judges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesFindFirstArgs} args - Arguments to find a Judges
     * @example
     * // Get one Judges
     * const judges = await prisma.judges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JudgesFindFirstArgs>(args?: SelectSubset<T, JudgesFindFirstArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Judges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesFindFirstOrThrowArgs} args - Arguments to find a Judges
     * @example
     * // Get one Judges
     * const judges = await prisma.judges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JudgesFindFirstOrThrowArgs>(args?: SelectSubset<T, JudgesFindFirstOrThrowArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Judges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Judges
     * const judges = await prisma.judges.findMany()
     * 
     * // Get first 10 Judges
     * const judges = await prisma.judges.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const judgesWithIdOnly = await prisma.judges.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JudgesFindManyArgs>(args?: SelectSubset<T, JudgesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Judges.
     * @param {JudgesCreateArgs} args - Arguments to create a Judges.
     * @example
     * // Create one Judges
     * const Judges = await prisma.judges.create({
     *   data: {
     *     // ... data to create a Judges
     *   }
     * })
     * 
     */
    create<T extends JudgesCreateArgs>(args: SelectSubset<T, JudgesCreateArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Judges.
     * @param {JudgesCreateManyArgs} args - Arguments to create many Judges.
     * @example
     * // Create many Judges
     * const judges = await prisma.judges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JudgesCreateManyArgs>(args?: SelectSubset<T, JudgesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Judges and returns the data saved in the database.
     * @param {JudgesCreateManyAndReturnArgs} args - Arguments to create many Judges.
     * @example
     * // Create many Judges
     * const judges = await prisma.judges.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Judges and only return the `id`
     * const judgesWithIdOnly = await prisma.judges.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JudgesCreateManyAndReturnArgs>(args?: SelectSubset<T, JudgesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Judges.
     * @param {JudgesDeleteArgs} args - Arguments to delete one Judges.
     * @example
     * // Delete one Judges
     * const Judges = await prisma.judges.delete({
     *   where: {
     *     // ... filter to delete one Judges
     *   }
     * })
     * 
     */
    delete<T extends JudgesDeleteArgs>(args: SelectSubset<T, JudgesDeleteArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Judges.
     * @param {JudgesUpdateArgs} args - Arguments to update one Judges.
     * @example
     * // Update one Judges
     * const judges = await prisma.judges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JudgesUpdateArgs>(args: SelectSubset<T, JudgesUpdateArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Judges.
     * @param {JudgesDeleteManyArgs} args - Arguments to filter Judges to delete.
     * @example
     * // Delete a few Judges
     * const { count } = await prisma.judges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JudgesDeleteManyArgs>(args?: SelectSubset<T, JudgesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Judges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Judges
     * const judges = await prisma.judges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JudgesUpdateManyArgs>(args: SelectSubset<T, JudgesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Judges and returns the data updated in the database.
     * @param {JudgesUpdateManyAndReturnArgs} args - Arguments to update many Judges.
     * @example
     * // Update many Judges
     * const judges = await prisma.judges.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Judges and only return the `id`
     * const judgesWithIdOnly = await prisma.judges.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JudgesUpdateManyAndReturnArgs>(args: SelectSubset<T, JudgesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Judges.
     * @param {JudgesUpsertArgs} args - Arguments to update or create a Judges.
     * @example
     * // Update or create a Judges
     * const judges = await prisma.judges.upsert({
     *   create: {
     *     // ... data to create a Judges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Judges we want to update
     *   }
     * })
     */
    upsert<T extends JudgesUpsertArgs>(args: SelectSubset<T, JudgesUpsertArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Judges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesCountArgs} args - Arguments to filter Judges to count.
     * @example
     * // Count the number of Judges
     * const count = await prisma.judges.count({
     *   where: {
     *     // ... the filter for the Judges we want to count
     *   }
     * })
    **/
    count<T extends JudgesCountArgs>(
      args?: Subset<T, JudgesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JudgesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Judges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JudgesAggregateArgs>(args: Subset<T, JudgesAggregateArgs>): Prisma.PrismaPromise<GetJudgesAggregateType<T>>

    /**
     * Group by Judges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JudgesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JudgesGroupByArgs['orderBy'] }
        : { orderBy?: JudgesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JudgesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJudgesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Judges model
   */
  readonly fields: JudgesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Judges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JudgesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competitions<T extends Judges$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, Judges$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marks<T extends Judges$marksArgs<ExtArgs> = {}>(args?: Subset<T, Judges$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Judges model
   */
  interface JudgesFieldRefs {
    readonly id: FieldRef<"Judges", 'String'>
    readonly nationalId: FieldRef<"Judges", 'String'>
    readonly userId: FieldRef<"Judges", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Judges findUnique
   */
  export type JudgesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * Filter, which Judges to fetch.
     */
    where: JudgesWhereUniqueInput
  }

  /**
   * Judges findUniqueOrThrow
   */
  export type JudgesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * Filter, which Judges to fetch.
     */
    where: JudgesWhereUniqueInput
  }

  /**
   * Judges findFirst
   */
  export type JudgesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * Filter, which Judges to fetch.
     */
    where?: JudgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgesOrderByWithRelationInput | JudgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Judges.
     */
    cursor?: JudgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Judges.
     */
    distinct?: JudgesScalarFieldEnum | JudgesScalarFieldEnum[]
  }

  /**
   * Judges findFirstOrThrow
   */
  export type JudgesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * Filter, which Judges to fetch.
     */
    where?: JudgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgesOrderByWithRelationInput | JudgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Judges.
     */
    cursor?: JudgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Judges.
     */
    distinct?: JudgesScalarFieldEnum | JudgesScalarFieldEnum[]
  }

  /**
   * Judges findMany
   */
  export type JudgesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * Filter, which Judges to fetch.
     */
    where?: JudgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgesOrderByWithRelationInput | JudgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Judges.
     */
    cursor?: JudgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    distinct?: JudgesScalarFieldEnum | JudgesScalarFieldEnum[]
  }

  /**
   * Judges create
   */
  export type JudgesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * The data needed to create a Judges.
     */
    data: XOR<JudgesCreateInput, JudgesUncheckedCreateInput>
  }

  /**
   * Judges createMany
   */
  export type JudgesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Judges.
     */
    data: JudgesCreateManyInput | JudgesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Judges createManyAndReturn
   */
  export type JudgesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * The data used to create many Judges.
     */
    data: JudgesCreateManyInput | JudgesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Judges update
   */
  export type JudgesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * The data needed to update a Judges.
     */
    data: XOR<JudgesUpdateInput, JudgesUncheckedUpdateInput>
    /**
     * Choose, which Judges to update.
     */
    where: JudgesWhereUniqueInput
  }

  /**
   * Judges updateMany
   */
  export type JudgesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Judges.
     */
    data: XOR<JudgesUpdateManyMutationInput, JudgesUncheckedUpdateManyInput>
    /**
     * Filter which Judges to update
     */
    where?: JudgesWhereInput
    /**
     * Limit how many Judges to update.
     */
    limit?: number
  }

  /**
   * Judges updateManyAndReturn
   */
  export type JudgesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * The data used to update Judges.
     */
    data: XOR<JudgesUpdateManyMutationInput, JudgesUncheckedUpdateManyInput>
    /**
     * Filter which Judges to update
     */
    where?: JudgesWhereInput
    /**
     * Limit how many Judges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Judges upsert
   */
  export type JudgesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * The filter to search for the Judges to update in case it exists.
     */
    where: JudgesWhereUniqueInput
    /**
     * In case the Judges found by the `where` argument doesn't exist, create a new Judges with this data.
     */
    create: XOR<JudgesCreateInput, JudgesUncheckedCreateInput>
    /**
     * In case the Judges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JudgesUpdateInput, JudgesUncheckedUpdateInput>
  }

  /**
   * Judges delete
   */
  export type JudgesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    /**
     * Filter which Judges to delete.
     */
    where: JudgesWhereUniqueInput
  }

  /**
   * Judges deleteMany
   */
  export type JudgesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Judges to delete
     */
    where?: JudgesWhereInput
    /**
     * Limit how many Judges to delete.
     */
    limit?: number
  }

  /**
   * Judges.competitions
   */
  export type Judges$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    cursor?: CompetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Judges.marks
   */
  export type Judges$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    cursor?: MarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Judges without action
   */
  export type JudgesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
  }


  /**
   * Model Marks
   */

  export type AggregateMarks = {
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  export type MarksAvgAggregateOutputType = {
    score: number | null
  }

  export type MarksSumAggregateOutputType = {
    score: number | null
  }

  export type MarksMinAggregateOutputType = {
    id: string | null
    score: number | null
    comments: string | null
    createdAt: Date | null
    judgeId: string | null
    participantId: string | null
  }

  export type MarksMaxAggregateOutputType = {
    id: string | null
    score: number | null
    comments: string | null
    createdAt: Date | null
    judgeId: string | null
    participantId: string | null
  }

  export type MarksCountAggregateOutputType = {
    id: number
    score: number
    comments: number
    createdAt: number
    judgeId: number
    participantId: number
    _all: number
  }


  export type MarksAvgAggregateInputType = {
    score?: true
  }

  export type MarksSumAggregateInputType = {
    score?: true
  }

  export type MarksMinAggregateInputType = {
    id?: true
    score?: true
    comments?: true
    createdAt?: true
    judgeId?: true
    participantId?: true
  }

  export type MarksMaxAggregateInputType = {
    id?: true
    score?: true
    comments?: true
    createdAt?: true
    judgeId?: true
    participantId?: true
  }

  export type MarksCountAggregateInputType = {
    id?: true
    score?: true
    comments?: true
    createdAt?: true
    judgeId?: true
    participantId?: true
    _all?: true
  }

  export type MarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to aggregate.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarksMaxAggregateInputType
  }

  export type GetMarksAggregateType<T extends MarksAggregateArgs> = {
        [P in keyof T & keyof AggregateMarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarks[P]>
      : GetScalarType<T[P], AggregateMarks[P]>
  }




  export type MarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksWhereInput
    orderBy?: MarksOrderByWithAggregationInput | MarksOrderByWithAggregationInput[]
    by: MarksScalarFieldEnum[] | MarksScalarFieldEnum
    having?: MarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarksCountAggregateInputType | true
    _avg?: MarksAvgAggregateInputType
    _sum?: MarksSumAggregateInputType
    _min?: MarksMinAggregateInputType
    _max?: MarksMaxAggregateInputType
  }

  export type MarksGroupByOutputType = {
    id: string
    score: number
    comments: string
    createdAt: Date
    judgeId: string
    participantId: string
    _count: MarksCountAggregateOutputType | null
    _avg: MarksAvgAggregateOutputType | null
    _sum: MarksSumAggregateOutputType | null
    _min: MarksMinAggregateOutputType | null
    _max: MarksMaxAggregateOutputType | null
  }

  type GetMarksGroupByPayload<T extends MarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarksGroupByOutputType[P]>
            : GetScalarType<T[P], MarksGroupByOutputType[P]>
        }
      >
    >


  export type MarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    comments?: boolean
    createdAt?: boolean
    judgeId?: boolean
    participantId?: boolean
    judge?: boolean | JudgesDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    comments?: boolean
    createdAt?: boolean
    judgeId?: boolean
    participantId?: boolean
    judge?: boolean | JudgesDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    comments?: boolean
    createdAt?: boolean
    judgeId?: boolean
    participantId?: boolean
    judge?: boolean | JudgesDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marks"]>

  export type MarksSelectScalar = {
    id?: boolean
    score?: boolean
    comments?: boolean
    createdAt?: boolean
    judgeId?: boolean
    participantId?: boolean
  }

  export type MarksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "comments" | "createdAt" | "judgeId" | "participantId", ExtArgs["result"]["marks"]>
  export type MarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judge?: boolean | JudgesDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }
  export type MarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judge?: boolean | JudgesDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }
  export type MarksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judge?: boolean | JudgesDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantsDefaultArgs<ExtArgs>
  }

  export type $MarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marks"
    objects: {
      judge: Prisma.$JudgesPayload<ExtArgs>
      participant: Prisma.$ParticipantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
      comments: string
      createdAt: Date
      judgeId: string
      participantId: string
    }, ExtArgs["result"]["marks"]>
    composites: {}
  }

  type MarksGetPayload<S extends boolean | null | undefined | MarksDefaultArgs> = $Result.GetResult<Prisma.$MarksPayload, S>

  type MarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarksCountAggregateInputType | true
    }

  export interface MarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marks'], meta: { name: 'Marks' } }
    /**
     * Find zero or one Marks that matches the filter.
     * @param {MarksFindUniqueArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarksFindUniqueArgs>(args: SelectSubset<T, MarksFindUniqueArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarksFindUniqueOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarksFindUniqueOrThrowArgs>(args: SelectSubset<T, MarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarksFindFirstArgs>(args?: SelectSubset<T, MarksFindFirstArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindFirstOrThrowArgs} args - Arguments to find a Marks
     * @example
     * // Get one Marks
     * const marks = await prisma.marks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarksFindFirstOrThrowArgs>(args?: SelectSubset<T, MarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.marks.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.marks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marksWithIdOnly = await prisma.marks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarksFindManyArgs>(args?: SelectSubset<T, MarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marks.
     * @param {MarksCreateArgs} args - Arguments to create a Marks.
     * @example
     * // Create one Marks
     * const Marks = await prisma.marks.create({
     *   data: {
     *     // ... data to create a Marks
     *   }
     * })
     * 
     */
    create<T extends MarksCreateArgs>(args: SelectSubset<T, MarksCreateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarksCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarksCreateManyArgs>(args?: SelectSubset<T, MarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarksCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const marks = await prisma.marks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarksCreateManyAndReturnArgs>(args?: SelectSubset<T, MarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marks.
     * @param {MarksDeleteArgs} args - Arguments to delete one Marks.
     * @example
     * // Delete one Marks
     * const Marks = await prisma.marks.delete({
     *   where: {
     *     // ... filter to delete one Marks
     *   }
     * })
     * 
     */
    delete<T extends MarksDeleteArgs>(args: SelectSubset<T, MarksDeleteArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marks.
     * @param {MarksUpdateArgs} args - Arguments to update one Marks.
     * @example
     * // Update one Marks
     * const marks = await prisma.marks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarksUpdateArgs>(args: SelectSubset<T, MarksUpdateArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarksDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.marks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarksDeleteManyArgs>(args?: SelectSubset<T, MarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarksUpdateManyArgs>(args: SelectSubset<T, MarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks and returns the data updated in the database.
     * @param {MarksUpdateManyAndReturnArgs} args - Arguments to update many Marks.
     * @example
     * // Update many Marks
     * const marks = await prisma.marks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marks and only return the `id`
     * const marksWithIdOnly = await prisma.marks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarksUpdateManyAndReturnArgs>(args: SelectSubset<T, MarksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marks.
     * @param {MarksUpsertArgs} args - Arguments to update or create a Marks.
     * @example
     * // Update or create a Marks
     * const marks = await prisma.marks.upsert({
     *   create: {
     *     // ... data to create a Marks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marks we want to update
     *   }
     * })
     */
    upsert<T extends MarksUpsertArgs>(args: SelectSubset<T, MarksUpsertArgs<ExtArgs>>): Prisma__MarksClient<$Result.GetResult<Prisma.$MarksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.marks.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarksCountArgs>(
      args?: Subset<T, MarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarksAggregateArgs>(args: Subset<T, MarksAggregateArgs>): Prisma.PrismaPromise<GetMarksAggregateType<T>>

    /**
     * Group by Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarksGroupByArgs['orderBy'] }
        : { orderBy?: MarksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marks model
   */
  readonly fields: MarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    judge<T extends JudgesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JudgesDefaultArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantsDefaultArgs<ExtArgs>>): Prisma__ParticipantsClient<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Marks model
   */
  interface MarksFieldRefs {
    readonly id: FieldRef<"Marks", 'String'>
    readonly score: FieldRef<"Marks", 'Int'>
    readonly comments: FieldRef<"Marks", 'String'>
    readonly createdAt: FieldRef<"Marks", 'DateTime'>
    readonly judgeId: FieldRef<"Marks", 'String'>
    readonly participantId: FieldRef<"Marks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Marks findUnique
   */
  export type MarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findUniqueOrThrow
   */
  export type MarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks findFirst
   */
  export type MarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findFirstOrThrow
   */
  export type MarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks findMany
   */
  export type MarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarksOrderByWithRelationInput | MarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarksScalarFieldEnum | MarksScalarFieldEnum[]
  }

  /**
   * Marks create
   */
  export type MarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Marks.
     */
    data: XOR<MarksCreateInput, MarksUncheckedCreateInput>
  }

  /**
   * Marks createMany
   */
  export type MarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marks createManyAndReturn
   */
  export type MarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarksCreateManyInput | MarksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks update
   */
  export type MarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Marks.
     */
    data: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
    /**
     * Choose, which Marks to update.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks updateMany
   */
  export type MarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Marks updateManyAndReturn
   */
  export type MarksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * The data used to update Marks.
     */
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marks upsert
   */
  export type MarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Marks to update in case it exists.
     */
    where: MarksWhereUniqueInput
    /**
     * In case the Marks found by the `where` argument doesn't exist, create a new Marks with this data.
     */
    create: XOR<MarksCreateInput, MarksUncheckedCreateInput>
    /**
     * In case the Marks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarksUpdateInput, MarksUncheckedUpdateInput>
  }

  /**
   * Marks delete
   */
  export type MarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
    /**
     * Filter which Marks to delete.
     */
    where: MarksWhereUniqueInput
  }

  /**
   * Marks deleteMany
   */
  export type MarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarksWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Marks without action
   */
  export type MarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marks
     */
    select?: MarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marks
     */
    omit?: MarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarksInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    county: string | null
    userId: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    county: string | null
    userId: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    county: number
    userId: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    county?: true
    userId?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    county?: true
    userId?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    county?: true
    userId?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    county: string
    userId: string
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    county?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    participant?: boolean | School$participantArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    county?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    county?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    county?: boolean
    userId?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "county" | "userId", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    participant?: boolean | School$participantArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      participant: Prisma.$ParticipantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      county: string
      userId: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends School$participantArgs<ExtArgs> = {}>(args?: Subset<T, School$participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly county: FieldRef<"School", 'String'>
    readonly userId: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.participant
   */
  export type School$participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participants
     */
    select?: ParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participants
     */
    omit?: ParticipantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantsInclude<ExtArgs> | null
    where?: ParticipantsWhereInput
    orderBy?: ParticipantsOrderByWithRelationInput | ParticipantsOrderByWithRelationInput[]
    cursor?: ParticipantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantsScalarFieldEnum | ParticipantsScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.userRoles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.userRoles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.userRoles
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | Users$schoolArgs<ExtArgs>
    judge?: boolean | Users$judgeArgs<ExtArgs>
    verification?: boolean | Users$verificationArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Users$schoolArgs<ExtArgs>
    judge?: boolean | Users$judgeArgs<ExtArgs>
    verification?: boolean | Users$verificationArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs> | null
      judge: Prisma.$JudgesPayload<ExtArgs> | null
      verification: Prisma.$VerificationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.userRoles
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends Users$schoolArgs<ExtArgs> = {}>(args?: Subset<T, Users$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    judge<T extends Users$judgeArgs<ExtArgs> = {}>(args?: Subset<T, Users$judgeArgs<ExtArgs>>): Prisma__JudgesClient<$Result.GetResult<Prisma.$JudgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verification<T extends Users$verificationArgs<ExtArgs> = {}>(args?: Subset<T, Users$verificationArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'userRoles'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.school
   */
  export type Users$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * Users.judge
   */
  export type Users$judgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judges
     */
    select?: JudgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Judges
     */
    omit?: JudgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JudgesInclude<ExtArgs> | null
    where?: JudgesWhereInput
  }

  /**
   * Users.verification
   */
  export type Users$verificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    where?: VerificationsWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Verifications
   */

  export type AggregateVerifications = {
    _count: VerificationsCountAggregateOutputType | null
    _min: VerificationsMinAggregateOutputType | null
    _max: VerificationsMaxAggregateOutputType | null
  }

  export type VerificationsMinAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type VerificationsMaxAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type VerificationsCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    createdAt: number
    _all: number
  }


  export type VerificationsMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
  }

  export type VerificationsMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
  }

  export type VerificationsCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to aggregate.
     */
    where?: VerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationsOrderByWithRelationInput | VerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationsMaxAggregateInputType
  }

  export type GetVerificationsAggregateType<T extends VerificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateVerifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerifications[P]>
      : GetScalarType<T[P], AggregateVerifications[P]>
  }




  export type VerificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationsWhereInput
    orderBy?: VerificationsOrderByWithAggregationInput | VerificationsOrderByWithAggregationInput[]
    by: VerificationsScalarFieldEnum[] | VerificationsScalarFieldEnum
    having?: VerificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationsCountAggregateInputType | true
    _min?: VerificationsMinAggregateInputType
    _max?: VerificationsMaxAggregateInputType
  }

  export type VerificationsGroupByOutputType = {
    id: string
    code: string
    userId: string
    createdAt: Date
    _count: VerificationsCountAggregateOutputType | null
    _min: VerificationsMinAggregateOutputType | null
    _max: VerificationsMaxAggregateOutputType | null
  }

  type GetVerificationsGroupByPayload<T extends VerificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationsGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationsGroupByOutputType[P]>
        }
      >
    >


  export type VerificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verifications"]>

  export type VerificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verifications"]>

  export type VerificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verifications"]>

  export type VerificationsSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type VerificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "userId" | "createdAt", ExtArgs["result"]["verifications"]>
  export type VerificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VerificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VerificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $VerificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verifications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["verifications"]>
    composites: {}
  }

  type VerificationsGetPayload<S extends boolean | null | undefined | VerificationsDefaultArgs> = $Result.GetResult<Prisma.$VerificationsPayload, S>

  type VerificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationsCountAggregateInputType | true
    }

  export interface VerificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verifications'], meta: { name: 'Verifications' } }
    /**
     * Find zero or one Verifications that matches the filter.
     * @param {VerificationsFindUniqueArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationsFindUniqueArgs>(args: SelectSubset<T, VerificationsFindUniqueArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationsFindUniqueOrThrowArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsFindFirstArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationsFindFirstArgs>(args?: SelectSubset<T, VerificationsFindFirstArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsFindFirstOrThrowArgs} args - Arguments to find a Verifications
     * @example
     * // Get one Verifications
     * const verifications = await prisma.verifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verifications.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationsWithIdOnly = await prisma.verifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationsFindManyArgs>(args?: SelectSubset<T, VerificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verifications.
     * @param {VerificationsCreateArgs} args - Arguments to create a Verifications.
     * @example
     * // Create one Verifications
     * const Verifications = await prisma.verifications.create({
     *   data: {
     *     // ... data to create a Verifications
     *   }
     * })
     * 
     */
    create<T extends VerificationsCreateArgs>(args: SelectSubset<T, VerificationsCreateArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationsCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verifications = await prisma.verifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationsCreateManyArgs>(args?: SelectSubset<T, VerificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationsCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verifications = await prisma.verifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationsWithIdOnly = await prisma.verifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verifications.
     * @param {VerificationsDeleteArgs} args - Arguments to delete one Verifications.
     * @example
     * // Delete one Verifications
     * const Verifications = await prisma.verifications.delete({
     *   where: {
     *     // ... filter to delete one Verifications
     *   }
     * })
     * 
     */
    delete<T extends VerificationsDeleteArgs>(args: SelectSubset<T, VerificationsDeleteArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verifications.
     * @param {VerificationsUpdateArgs} args - Arguments to update one Verifications.
     * @example
     * // Update one Verifications
     * const verifications = await prisma.verifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationsUpdateArgs>(args: SelectSubset<T, VerificationsUpdateArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationsDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationsDeleteManyArgs>(args?: SelectSubset<T, VerificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verifications = await prisma.verifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationsUpdateManyArgs>(args: SelectSubset<T, VerificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationsUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verifications = await prisma.verifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationsWithIdOnly = await prisma.verifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verifications.
     * @param {VerificationsUpsertArgs} args - Arguments to update or create a Verifications.
     * @example
     * // Update or create a Verifications
     * const verifications = await prisma.verifications.upsert({
     *   create: {
     *     // ... data to create a Verifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verifications we want to update
     *   }
     * })
     */
    upsert<T extends VerificationsUpsertArgs>(args: SelectSubset<T, VerificationsUpsertArgs<ExtArgs>>): Prisma__VerificationsClient<$Result.GetResult<Prisma.$VerificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verifications.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationsCountArgs>(
      args?: Subset<T, VerificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationsAggregateArgs>(args: Subset<T, VerificationsAggregateArgs>): Prisma.PrismaPromise<GetVerificationsAggregateType<T>>

    /**
     * Group by Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationsGroupByArgs['orderBy'] }
        : { orderBy?: VerificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verifications model
   */
  readonly fields: VerificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verifications model
   */
  interface VerificationsFieldRefs {
    readonly id: FieldRef<"Verifications", 'String'>
    readonly code: FieldRef<"Verifications", 'String'>
    readonly userId: FieldRef<"Verifications", 'String'>
    readonly createdAt: FieldRef<"Verifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verifications findUnique
   */
  export type VerificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where: VerificationsWhereUniqueInput
  }

  /**
   * Verifications findUniqueOrThrow
   */
  export type VerificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where: VerificationsWhereUniqueInput
  }

  /**
   * Verifications findFirst
   */
  export type VerificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationsOrderByWithRelationInput | VerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationsScalarFieldEnum | VerificationsScalarFieldEnum[]
  }

  /**
   * Verifications findFirstOrThrow
   */
  export type VerificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationsOrderByWithRelationInput | VerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationsScalarFieldEnum | VerificationsScalarFieldEnum[]
  }

  /**
   * Verifications findMany
   */
  export type VerificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationsOrderByWithRelationInput | VerificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationsScalarFieldEnum | VerificationsScalarFieldEnum[]
  }

  /**
   * Verifications create
   */
  export type VerificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Verifications.
     */
    data: XOR<VerificationsCreateInput, VerificationsUncheckedCreateInput>
  }

  /**
   * Verifications createMany
   */
  export type VerificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationsCreateManyInput | VerificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verifications createManyAndReturn
   */
  export type VerificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationsCreateManyInput | VerificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verifications update
   */
  export type VerificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Verifications.
     */
    data: XOR<VerificationsUpdateInput, VerificationsUncheckedUpdateInput>
    /**
     * Choose, which Verifications to update.
     */
    where: VerificationsWhereUniqueInput
  }

  /**
   * Verifications updateMany
   */
  export type VerificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationsUpdateManyMutationInput, VerificationsUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationsWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verifications updateManyAndReturn
   */
  export type VerificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationsUpdateManyMutationInput, VerificationsUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationsWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verifications upsert
   */
  export type VerificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Verifications to update in case it exists.
     */
    where: VerificationsWhereUniqueInput
    /**
     * In case the Verifications found by the `where` argument doesn't exist, create a new Verifications with this data.
     */
    create: XOR<VerificationsCreateInput, VerificationsUncheckedCreateInput>
    /**
     * In case the Verifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationsUpdateInput, VerificationsUncheckedUpdateInput>
  }

  /**
   * Verifications delete
   */
  export type VerificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
    /**
     * Filter which Verifications to delete.
     */
    where: VerificationsWhereUniqueInput
  }

  /**
   * Verifications deleteMany
   */
  export type VerificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationsWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verifications without action
   */
  export type VerificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verifications
     */
    select?: VerificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verifications
     */
    omit?: VerificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ParticipantsScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    competitionId: 'competitionId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ParticipantsScalarFieldEnum = (typeof ParticipantsScalarFieldEnum)[keyof typeof ParticipantsScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    schedule: 'schedule',
    description: 'description',
    venue: 'venue',
    maxParticipants: 'maxParticipants',
    status: 'status',
    totalParticipants: 'totalParticipants'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const JudgesScalarFieldEnum: {
    id: 'id',
    nationalId: 'nationalId',
    userId: 'userId'
  };

  export type JudgesScalarFieldEnum = (typeof JudgesScalarFieldEnum)[keyof typeof JudgesScalarFieldEnum]


  export const MarksScalarFieldEnum: {
    id: 'id',
    score: 'score',
    comments: 'comments',
    createdAt: 'createdAt',
    judgeId: 'judgeId',
    participantId: 'participantId'
  };

  export type MarksScalarFieldEnum = (typeof MarksScalarFieldEnum)[keyof typeof MarksScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    county: 'county',
    userId: 'userId'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VerificationsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type VerificationsScalarFieldEnum = (typeof VerificationsScalarFieldEnum)[keyof typeof VerificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'APPLICATION_STATUS'
   */
  export type EnumAPPLICATION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'APPLICATION_STATUS'>
    


  /**
   * Reference to a field of type 'APPLICATION_STATUS[]'
   */
  export type ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'APPLICATION_STATUS[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'COMPETITION_STATUS'
   */
  export type EnumCOMPETITION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'COMPETITION_STATUS'>
    


  /**
   * Reference to a field of type 'COMPETITION_STATUS[]'
   */
  export type ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'COMPETITION_STATUS[]'>
    


  /**
   * Reference to a field of type 'userRoles'
   */
  export type EnumuserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRoles'>
    


  /**
   * Reference to a field of type 'userRoles[]'
   */
  export type ListEnumuserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRoles[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ParticipantsWhereInput = {
    AND?: ParticipantsWhereInput | ParticipantsWhereInput[]
    OR?: ParticipantsWhereInput[]
    NOT?: ParticipantsWhereInput | ParticipantsWhereInput[]
    id?: StringFilter<"Participants"> | string
    schoolId?: StringFilter<"Participants"> | string
    competitionId?: StringFilter<"Participants"> | string
    status?: EnumAPPLICATION_STATUSFilter<"Participants"> | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFilter<"Participants"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    marks?: MarksListRelationFilter
  }

  export type ParticipantsOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    competitionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    competition?: CompetitionOrderByWithRelationInput
    marks?: MarksOrderByRelationAggregateInput
  }

  export type ParticipantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    competitionId?: string
    AND?: ParticipantsWhereInput | ParticipantsWhereInput[]
    OR?: ParticipantsWhereInput[]
    NOT?: ParticipantsWhereInput | ParticipantsWhereInput[]
    schoolId?: StringFilter<"Participants"> | string
    status?: EnumAPPLICATION_STATUSFilter<"Participants"> | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFilter<"Participants"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    marks?: MarksListRelationFilter
  }, "id" | "competitionId">

  export type ParticipantsOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    competitionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ParticipantsCountOrderByAggregateInput
    _max?: ParticipantsMaxOrderByAggregateInput
    _min?: ParticipantsMinOrderByAggregateInput
  }

  export type ParticipantsScalarWhereWithAggregatesInput = {
    AND?: ParticipantsScalarWhereWithAggregatesInput | ParticipantsScalarWhereWithAggregatesInput[]
    OR?: ParticipantsScalarWhereWithAggregatesInput[]
    NOT?: ParticipantsScalarWhereWithAggregatesInput | ParticipantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participants"> | string
    schoolId?: StringWithAggregatesFilter<"Participants"> | string
    competitionId?: StringWithAggregatesFilter<"Participants"> | string
    status?: EnumAPPLICATION_STATUSWithAggregatesFilter<"Participants"> | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeWithAggregatesFilter<"Participants"> | Date | string
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: StringFilter<"Competition"> | string
    name?: StringFilter<"Competition"> | string
    schedule?: DateTimeFilter<"Competition"> | Date | string
    description?: StringFilter<"Competition"> | string
    venue?: StringFilter<"Competition"> | string
    maxParticipants?: IntFilter<"Competition"> | number
    status?: EnumCOMPETITION_STATUSFilter<"Competition"> | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFilter<"Competition"> | number
    judges?: JudgesListRelationFilter
    participants?: ParticipantsListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    venue?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    totalParticipants?: SortOrder
    judges?: JudgesOrderByRelationAggregateInput
    participants?: ParticipantsOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    name?: StringFilter<"Competition"> | string
    schedule?: DateTimeFilter<"Competition"> | Date | string
    description?: StringFilter<"Competition"> | string
    venue?: StringFilter<"Competition"> | string
    maxParticipants?: IntFilter<"Competition"> | number
    status?: EnumCOMPETITION_STATUSFilter<"Competition"> | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFilter<"Competition"> | number
    judges?: JudgesListRelationFilter
    participants?: ParticipantsListRelationFilter
  }, "id">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    venue?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    totalParticipants?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _avg?: CompetitionAvgOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
    _sum?: CompetitionSumOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competition"> | string
    name?: StringWithAggregatesFilter<"Competition"> | string
    schedule?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    description?: StringWithAggregatesFilter<"Competition"> | string
    venue?: StringWithAggregatesFilter<"Competition"> | string
    maxParticipants?: IntWithAggregatesFilter<"Competition"> | number
    status?: EnumCOMPETITION_STATUSWithAggregatesFilter<"Competition"> | $Enums.COMPETITION_STATUS
    totalParticipants?: IntWithAggregatesFilter<"Competition"> | number
  }

  export type JudgesWhereInput = {
    AND?: JudgesWhereInput | JudgesWhereInput[]
    OR?: JudgesWhereInput[]
    NOT?: JudgesWhereInput | JudgesWhereInput[]
    id?: StringFilter<"Judges"> | string
    nationalId?: StringFilter<"Judges"> | string
    userId?: StringFilter<"Judges"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    competitions?: CompetitionListRelationFilter
    marks?: MarksListRelationFilter
  }

  export type JudgesOrderByWithRelationInput = {
    id?: SortOrder
    nationalId?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    competitions?: CompetitionOrderByRelationAggregateInput
    marks?: MarksOrderByRelationAggregateInput
  }

  export type JudgesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nationalId?: string
    userId?: string
    AND?: JudgesWhereInput | JudgesWhereInput[]
    OR?: JudgesWhereInput[]
    NOT?: JudgesWhereInput | JudgesWhereInput[]
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    competitions?: CompetitionListRelationFilter
    marks?: MarksListRelationFilter
  }, "id" | "nationalId" | "userId">

  export type JudgesOrderByWithAggregationInput = {
    id?: SortOrder
    nationalId?: SortOrder
    userId?: SortOrder
    _count?: JudgesCountOrderByAggregateInput
    _max?: JudgesMaxOrderByAggregateInput
    _min?: JudgesMinOrderByAggregateInput
  }

  export type JudgesScalarWhereWithAggregatesInput = {
    AND?: JudgesScalarWhereWithAggregatesInput | JudgesScalarWhereWithAggregatesInput[]
    OR?: JudgesScalarWhereWithAggregatesInput[]
    NOT?: JudgesScalarWhereWithAggregatesInput | JudgesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Judges"> | string
    nationalId?: StringWithAggregatesFilter<"Judges"> | string
    userId?: StringWithAggregatesFilter<"Judges"> | string
  }

  export type MarksWhereInput = {
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    id?: StringFilter<"Marks"> | string
    score?: IntFilter<"Marks"> | number
    comments?: StringFilter<"Marks"> | string
    createdAt?: DateTimeFilter<"Marks"> | Date | string
    judgeId?: StringFilter<"Marks"> | string
    participantId?: StringFilter<"Marks"> | string
    judge?: XOR<JudgesScalarRelationFilter, JudgesWhereInput>
    participant?: XOR<ParticipantsScalarRelationFilter, ParticipantsWhereInput>
  }

  export type MarksOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    judgeId?: SortOrder
    participantId?: SortOrder
    judge?: JudgesOrderByWithRelationInput
    participant?: ParticipantsOrderByWithRelationInput
  }

  export type MarksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarksWhereInput | MarksWhereInput[]
    OR?: MarksWhereInput[]
    NOT?: MarksWhereInput | MarksWhereInput[]
    score?: IntFilter<"Marks"> | number
    comments?: StringFilter<"Marks"> | string
    createdAt?: DateTimeFilter<"Marks"> | Date | string
    judgeId?: StringFilter<"Marks"> | string
    participantId?: StringFilter<"Marks"> | string
    judge?: XOR<JudgesScalarRelationFilter, JudgesWhereInput>
    participant?: XOR<ParticipantsScalarRelationFilter, ParticipantsWhereInput>
  }, "id">

  export type MarksOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    judgeId?: SortOrder
    participantId?: SortOrder
    _count?: MarksCountOrderByAggregateInput
    _avg?: MarksAvgOrderByAggregateInput
    _max?: MarksMaxOrderByAggregateInput
    _min?: MarksMinOrderByAggregateInput
    _sum?: MarksSumOrderByAggregateInput
  }

  export type MarksScalarWhereWithAggregatesInput = {
    AND?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    OR?: MarksScalarWhereWithAggregatesInput[]
    NOT?: MarksScalarWhereWithAggregatesInput | MarksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marks"> | string
    score?: IntWithAggregatesFilter<"Marks"> | number
    comments?: StringWithAggregatesFilter<"Marks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Marks"> | Date | string
    judgeId?: StringWithAggregatesFilter<"Marks"> | string
    participantId?: StringWithAggregatesFilter<"Marks"> | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    county?: StringFilter<"School"> | string
    userId?: StringFilter<"School"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    participant?: ParticipantsListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    county?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    participant?: ParticipantsOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    county?: StringFilter<"School"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    participant?: ParticipantsListRelationFilter
  }, "id" | "userId">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    county?: SortOrder
    userId?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    county?: StringWithAggregatesFilter<"School"> | string
    userId?: StringWithAggregatesFilter<"School"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumuserRolesFilter<"Users"> | $Enums.userRoles
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    judge?: XOR<JudgesNullableScalarRelationFilter, JudgesWhereInput> | null
    verification?: XOR<VerificationsNullableScalarRelationFilter, VerificationsWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    judge?: JudgesOrderByWithRelationInput
    verification?: VerificationsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumuserRolesFilter<"Users"> | $Enums.userRoles
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    judge?: XOR<JudgesNullableScalarRelationFilter, JudgesWhereInput> | null
    verification?: XOR<VerificationsNullableScalarRelationFilter, VerificationsWhereInput> | null
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumuserRolesWithAggregatesFilter<"Users"> | $Enums.userRoles
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type VerificationsWhereInput = {
    AND?: VerificationsWhereInput | VerificationsWhereInput[]
    OR?: VerificationsWhereInput[]
    NOT?: VerificationsWhereInput | VerificationsWhereInput[]
    id?: StringFilter<"Verifications"> | string
    code?: StringFilter<"Verifications"> | string
    userId?: StringFilter<"Verifications"> | string
    createdAt?: DateTimeFilter<"Verifications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type VerificationsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type VerificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VerificationsWhereInput | VerificationsWhereInput[]
    OR?: VerificationsWhereInput[]
    NOT?: VerificationsWhereInput | VerificationsWhereInput[]
    code?: StringFilter<"Verifications"> | string
    createdAt?: DateTimeFilter<"Verifications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type VerificationsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationsCountOrderByAggregateInput
    _max?: VerificationsMaxOrderByAggregateInput
    _min?: VerificationsMinOrderByAggregateInput
  }

  export type VerificationsScalarWhereWithAggregatesInput = {
    AND?: VerificationsScalarWhereWithAggregatesInput | VerificationsScalarWhereWithAggregatesInput[]
    OR?: VerificationsScalarWhereWithAggregatesInput[]
    NOT?: VerificationsScalarWhereWithAggregatesInput | VerificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verifications"> | string
    code?: StringWithAggregatesFilter<"Verifications"> | string
    userId?: StringWithAggregatesFilter<"Verifications"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Verifications"> | Date | string
  }

  export type ParticipantsCreateInput = {
    id?: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutParticipantInput
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
    marks?: MarksCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUncheckedCreateInput = {
    id?: string
    schoolId: string
    competitionId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    marks?: MarksUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutParticipantNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
    marks?: MarksUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marks?: MarksUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsCreateManyInput = {
    id?: string
    schoolId: string
    competitionId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
  }

  export type ParticipantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
    judges?: JudgesCreateNestedManyWithoutCompetitionsInput
    participants?: ParticipantsCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
    judges?: JudgesUncheckedCreateNestedManyWithoutCompetitionsInput
    participants?: ParticipantsUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
    judges?: JudgesUpdateManyWithoutCompetitionsNestedInput
    participants?: ParticipantsUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
    judges?: JudgesUncheckedUpdateManyWithoutCompetitionsNestedInput
    participants?: ParticipantsUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type JudgesCreateInput = {
    id?: string
    nationalId: string
    user: UsersCreateNestedOneWithoutJudgeInput
    competitions?: CompetitionCreateNestedManyWithoutJudgesInput
    marks?: MarksCreateNestedManyWithoutJudgeInput
  }

  export type JudgesUncheckedCreateInput = {
    id?: string
    nationalId: string
    userId: string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutJudgesInput
    marks?: MarksUncheckedCreateNestedManyWithoutJudgeInput
  }

  export type JudgesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutJudgeNestedInput
    competitions?: CompetitionUpdateManyWithoutJudgesNestedInput
    marks?: MarksUpdateManyWithoutJudgeNestedInput
  }

  export type JudgesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    competitions?: CompetitionUncheckedUpdateManyWithoutJudgesNestedInput
    marks?: MarksUncheckedUpdateManyWithoutJudgeNestedInput
  }

  export type JudgesCreateManyInput = {
    id?: string
    nationalId: string
    userId: string
  }

  export type JudgesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MarksCreateInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    judge: JudgesCreateNestedOneWithoutMarksInput
    participant: ParticipantsCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    judgeId: string
    participantId: string
  }

  export type MarksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judge?: JudgesUpdateOneRequiredWithoutMarksNestedInput
    participant?: ParticipantsUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judgeId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type MarksCreateManyInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    judgeId: string
    participantId: string
  }

  export type MarksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judgeId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolCreateInput = {
    id?: string
    county: string
    user: UsersCreateNestedOneWithoutSchoolInput
    participant?: ParticipantsCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    county: string
    userId: string
    participant?: ParticipantsUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutSchoolNestedInput
    participant?: ParticipantsUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    participant?: ParticipantsUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    county: string
    userId: string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUserInput
    judge?: JudgesCreateNestedOneWithoutUserInput
    verification?: VerificationsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolUncheckedCreateNestedOneWithoutUserInput
    judge?: JudgesUncheckedCreateNestedOneWithoutUserInput
    verification?: VerificationsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUserNestedInput
    judge?: JudgesUpdateOneWithoutUserNestedInput
    verification?: VerificationsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUncheckedUpdateOneWithoutUserNestedInput
    judge?: JudgesUncheckedUpdateOneWithoutUserNestedInput
    verification?: VerificationsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationsCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutVerificationInput
  }

  export type VerificationsUncheckedCreateInput = {
    id?: string
    code: string
    userId: string
    createdAt?: Date | string
  }

  export type VerificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutVerificationNestedInput
  }

  export type VerificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationsCreateManyInput = {
    id?: string
    code: string
    userId: string
    createdAt?: Date | string
  }

  export type VerificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAPPLICATION_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_STATUS | EnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPLICATION_STATUSFilter<$PrismaModel> | $Enums.APPLICATION_STATUS
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type CompetitionScalarRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type MarksListRelationFilter = {
    every?: MarksWhereInput
    some?: MarksWhereInput
    none?: MarksWhereInput
  }

  export type MarksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantsCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    competitionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantsMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    competitionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantsMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    competitionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAPPLICATION_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_STATUS | EnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPLICATION_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.APPLICATION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAPPLICATION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumAPPLICATION_STATUSFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCOMPETITION_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.COMPETITION_STATUS | EnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCOMPETITION_STATUSFilter<$PrismaModel> | $Enums.COMPETITION_STATUS
  }

  export type JudgesListRelationFilter = {
    every?: JudgesWhereInput
    some?: JudgesWhereInput
    none?: JudgesWhereInput
  }

  export type ParticipantsListRelationFilter = {
    every?: ParticipantsWhereInput
    some?: ParticipantsWhereInput
    none?: ParticipantsWhereInput
  }

  export type JudgesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    venue?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    totalParticipants?: SortOrder
  }

  export type CompetitionAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    venue?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    totalParticipants?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    venue?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    totalParticipants?: SortOrder
  }

  export type CompetitionSumOrderByAggregateInput = {
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCOMPETITION_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.COMPETITION_STATUS | EnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCOMPETITION_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.COMPETITION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCOMPETITION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumCOMPETITION_STATUSFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CompetitionListRelationFilter = {
    every?: CompetitionWhereInput
    some?: CompetitionWhereInput
    none?: CompetitionWhereInput
  }

  export type CompetitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JudgesCountOrderByAggregateInput = {
    id?: SortOrder
    nationalId?: SortOrder
    userId?: SortOrder
  }

  export type JudgesMaxOrderByAggregateInput = {
    id?: SortOrder
    nationalId?: SortOrder
    userId?: SortOrder
  }

  export type JudgesMinOrderByAggregateInput = {
    id?: SortOrder
    nationalId?: SortOrder
    userId?: SortOrder
  }

  export type JudgesScalarRelationFilter = {
    is?: JudgesWhereInput
    isNot?: JudgesWhereInput
  }

  export type ParticipantsScalarRelationFilter = {
    is?: ParticipantsWhereInput
    isNot?: ParticipantsWhereInput
  }

  export type MarksCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    judgeId?: SortOrder
    participantId?: SortOrder
  }

  export type MarksAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type MarksMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    judgeId?: SortOrder
    participantId?: SortOrder
  }

  export type MarksMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    judgeId?: SortOrder
    participantId?: SortOrder
  }

  export type MarksSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    county?: SortOrder
    userId?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    county?: SortOrder
    userId?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    county?: SortOrder
    userId?: SortOrder
  }

  export type EnumuserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoles | EnumuserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRolesFilter<$PrismaModel> | $Enums.userRoles
  }

  export type SchoolNullableScalarRelationFilter = {
    is?: SchoolWhereInput | null
    isNot?: SchoolWhereInput | null
  }

  export type JudgesNullableScalarRelationFilter = {
    is?: JudgesWhereInput | null
    isNot?: JudgesWhereInput | null
  }

  export type VerificationsNullableScalarRelationFilter = {
    is?: VerificationsWhereInput | null
    isNot?: VerificationsWhereInput | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumuserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoles | EnumuserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRolesWithAggregatesFilter<$PrismaModel> | $Enums.userRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRolesFilter<$PrismaModel>
    _max?: NestedEnumuserRolesFilter<$PrismaModel>
  }

  export type VerificationsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolCreateNestedOneWithoutParticipantInput = {
    create?: XOR<SchoolCreateWithoutParticipantInput, SchoolUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutParticipantInput
    connect?: SchoolWhereUniqueInput
  }

  export type CompetitionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput
    connect?: CompetitionWhereUniqueInput
  }

  export type MarksCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MarksCreateWithoutParticipantInput, MarksUncheckedCreateWithoutParticipantInput> | MarksCreateWithoutParticipantInput[] | MarksUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutParticipantInput | MarksCreateOrConnectWithoutParticipantInput[]
    createMany?: MarksCreateManyParticipantInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MarksCreateWithoutParticipantInput, MarksUncheckedCreateWithoutParticipantInput> | MarksCreateWithoutParticipantInput[] | MarksUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutParticipantInput | MarksCreateOrConnectWithoutParticipantInput[]
    createMany?: MarksCreateManyParticipantInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAPPLICATION_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.APPLICATION_STATUS
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SchoolUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<SchoolCreateWithoutParticipantInput, SchoolUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutParticipantInput
    upsert?: SchoolUpsertWithoutParticipantInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutParticipantInput, SchoolUpdateWithoutParticipantInput>, SchoolUncheckedUpdateWithoutParticipantInput>
  }

  export type CompetitionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput
    upsert?: CompetitionUpsertWithoutParticipantsInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutParticipantsInput, CompetitionUpdateWithoutParticipantsInput>, CompetitionUncheckedUpdateWithoutParticipantsInput>
  }

  export type MarksUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MarksCreateWithoutParticipantInput, MarksUncheckedCreateWithoutParticipantInput> | MarksCreateWithoutParticipantInput[] | MarksUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutParticipantInput | MarksCreateOrConnectWithoutParticipantInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutParticipantInput | MarksUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MarksCreateManyParticipantInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutParticipantInput | MarksUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutParticipantInput | MarksUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MarksCreateWithoutParticipantInput, MarksUncheckedCreateWithoutParticipantInput> | MarksCreateWithoutParticipantInput[] | MarksUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutParticipantInput | MarksCreateOrConnectWithoutParticipantInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutParticipantInput | MarksUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MarksCreateManyParticipantInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutParticipantInput | MarksUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutParticipantInput | MarksUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type JudgesCreateNestedManyWithoutCompetitionsInput = {
    create?: XOR<JudgesCreateWithoutCompetitionsInput, JudgesUncheckedCreateWithoutCompetitionsInput> | JudgesCreateWithoutCompetitionsInput[] | JudgesUncheckedCreateWithoutCompetitionsInput[]
    connectOrCreate?: JudgesCreateOrConnectWithoutCompetitionsInput | JudgesCreateOrConnectWithoutCompetitionsInput[]
    connect?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
  }

  export type ParticipantsCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<ParticipantsCreateWithoutCompetitionInput, ParticipantsUncheckedCreateWithoutCompetitionInput> | ParticipantsCreateWithoutCompetitionInput[] | ParticipantsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutCompetitionInput | ParticipantsCreateOrConnectWithoutCompetitionInput[]
    createMany?: ParticipantsCreateManyCompetitionInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type JudgesUncheckedCreateNestedManyWithoutCompetitionsInput = {
    create?: XOR<JudgesCreateWithoutCompetitionsInput, JudgesUncheckedCreateWithoutCompetitionsInput> | JudgesCreateWithoutCompetitionsInput[] | JudgesUncheckedCreateWithoutCompetitionsInput[]
    connectOrCreate?: JudgesCreateOrConnectWithoutCompetitionsInput | JudgesCreateOrConnectWithoutCompetitionsInput[]
    connect?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
  }

  export type ParticipantsUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<ParticipantsCreateWithoutCompetitionInput, ParticipantsUncheckedCreateWithoutCompetitionInput> | ParticipantsCreateWithoutCompetitionInput[] | ParticipantsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutCompetitionInput | ParticipantsCreateOrConnectWithoutCompetitionInput[]
    createMany?: ParticipantsCreateManyCompetitionInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCOMPETITION_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.COMPETITION_STATUS
  }

  export type JudgesUpdateManyWithoutCompetitionsNestedInput = {
    create?: XOR<JudgesCreateWithoutCompetitionsInput, JudgesUncheckedCreateWithoutCompetitionsInput> | JudgesCreateWithoutCompetitionsInput[] | JudgesUncheckedCreateWithoutCompetitionsInput[]
    connectOrCreate?: JudgesCreateOrConnectWithoutCompetitionsInput | JudgesCreateOrConnectWithoutCompetitionsInput[]
    upsert?: JudgesUpsertWithWhereUniqueWithoutCompetitionsInput | JudgesUpsertWithWhereUniqueWithoutCompetitionsInput[]
    set?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    disconnect?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    delete?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    connect?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    update?: JudgesUpdateWithWhereUniqueWithoutCompetitionsInput | JudgesUpdateWithWhereUniqueWithoutCompetitionsInput[]
    updateMany?: JudgesUpdateManyWithWhereWithoutCompetitionsInput | JudgesUpdateManyWithWhereWithoutCompetitionsInput[]
    deleteMany?: JudgesScalarWhereInput | JudgesScalarWhereInput[]
  }

  export type ParticipantsUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<ParticipantsCreateWithoutCompetitionInput, ParticipantsUncheckedCreateWithoutCompetitionInput> | ParticipantsCreateWithoutCompetitionInput[] | ParticipantsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutCompetitionInput | ParticipantsCreateOrConnectWithoutCompetitionInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutCompetitionInput | ParticipantsUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: ParticipantsCreateManyCompetitionInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutCompetitionInput | ParticipantsUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutCompetitionInput | ParticipantsUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type JudgesUncheckedUpdateManyWithoutCompetitionsNestedInput = {
    create?: XOR<JudgesCreateWithoutCompetitionsInput, JudgesUncheckedCreateWithoutCompetitionsInput> | JudgesCreateWithoutCompetitionsInput[] | JudgesUncheckedCreateWithoutCompetitionsInput[]
    connectOrCreate?: JudgesCreateOrConnectWithoutCompetitionsInput | JudgesCreateOrConnectWithoutCompetitionsInput[]
    upsert?: JudgesUpsertWithWhereUniqueWithoutCompetitionsInput | JudgesUpsertWithWhereUniqueWithoutCompetitionsInput[]
    set?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    disconnect?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    delete?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    connect?: JudgesWhereUniqueInput | JudgesWhereUniqueInput[]
    update?: JudgesUpdateWithWhereUniqueWithoutCompetitionsInput | JudgesUpdateWithWhereUniqueWithoutCompetitionsInput[]
    updateMany?: JudgesUpdateManyWithWhereWithoutCompetitionsInput | JudgesUpdateManyWithWhereWithoutCompetitionsInput[]
    deleteMany?: JudgesScalarWhereInput | JudgesScalarWhereInput[]
  }

  export type ParticipantsUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<ParticipantsCreateWithoutCompetitionInput, ParticipantsUncheckedCreateWithoutCompetitionInput> | ParticipantsCreateWithoutCompetitionInput[] | ParticipantsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutCompetitionInput | ParticipantsCreateOrConnectWithoutCompetitionInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutCompetitionInput | ParticipantsUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: ParticipantsCreateManyCompetitionInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutCompetitionInput | ParticipantsUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutCompetitionInput | ParticipantsUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutJudgeInput = {
    create?: XOR<UsersCreateWithoutJudgeInput, UsersUncheckedCreateWithoutJudgeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutJudgeInput
    connect?: UsersWhereUniqueInput
  }

  export type CompetitionCreateNestedManyWithoutJudgesInput = {
    create?: XOR<CompetitionCreateWithoutJudgesInput, CompetitionUncheckedCreateWithoutJudgesInput> | CompetitionCreateWithoutJudgesInput[] | CompetitionUncheckedCreateWithoutJudgesInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutJudgesInput | CompetitionCreateOrConnectWithoutJudgesInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type MarksCreateNestedManyWithoutJudgeInput = {
    create?: XOR<MarksCreateWithoutJudgeInput, MarksUncheckedCreateWithoutJudgeInput> | MarksCreateWithoutJudgeInput[] | MarksUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutJudgeInput | MarksCreateOrConnectWithoutJudgeInput[]
    createMany?: MarksCreateManyJudgeInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type CompetitionUncheckedCreateNestedManyWithoutJudgesInput = {
    create?: XOR<CompetitionCreateWithoutJudgesInput, CompetitionUncheckedCreateWithoutJudgesInput> | CompetitionCreateWithoutJudgesInput[] | CompetitionUncheckedCreateWithoutJudgesInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutJudgesInput | CompetitionCreateOrConnectWithoutJudgesInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type MarksUncheckedCreateNestedManyWithoutJudgeInput = {
    create?: XOR<MarksCreateWithoutJudgeInput, MarksUncheckedCreateWithoutJudgeInput> | MarksCreateWithoutJudgeInput[] | MarksUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutJudgeInput | MarksCreateOrConnectWithoutJudgeInput[]
    createMany?: MarksCreateManyJudgeInputEnvelope
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutJudgeNestedInput = {
    create?: XOR<UsersCreateWithoutJudgeInput, UsersUncheckedCreateWithoutJudgeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutJudgeInput
    upsert?: UsersUpsertWithoutJudgeInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutJudgeInput, UsersUpdateWithoutJudgeInput>, UsersUncheckedUpdateWithoutJudgeInput>
  }

  export type CompetitionUpdateManyWithoutJudgesNestedInput = {
    create?: XOR<CompetitionCreateWithoutJudgesInput, CompetitionUncheckedCreateWithoutJudgesInput> | CompetitionCreateWithoutJudgesInput[] | CompetitionUncheckedCreateWithoutJudgesInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutJudgesInput | CompetitionCreateOrConnectWithoutJudgesInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutJudgesInput | CompetitionUpsertWithWhereUniqueWithoutJudgesInput[]
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutJudgesInput | CompetitionUpdateWithWhereUniqueWithoutJudgesInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutJudgesInput | CompetitionUpdateManyWithWhereWithoutJudgesInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type MarksUpdateManyWithoutJudgeNestedInput = {
    create?: XOR<MarksCreateWithoutJudgeInput, MarksUncheckedCreateWithoutJudgeInput> | MarksCreateWithoutJudgeInput[] | MarksUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutJudgeInput | MarksCreateOrConnectWithoutJudgeInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutJudgeInput | MarksUpsertWithWhereUniqueWithoutJudgeInput[]
    createMany?: MarksCreateManyJudgeInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutJudgeInput | MarksUpdateWithWhereUniqueWithoutJudgeInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutJudgeInput | MarksUpdateManyWithWhereWithoutJudgeInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type CompetitionUncheckedUpdateManyWithoutJudgesNestedInput = {
    create?: XOR<CompetitionCreateWithoutJudgesInput, CompetitionUncheckedCreateWithoutJudgesInput> | CompetitionCreateWithoutJudgesInput[] | CompetitionUncheckedCreateWithoutJudgesInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutJudgesInput | CompetitionCreateOrConnectWithoutJudgesInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutJudgesInput | CompetitionUpsertWithWhereUniqueWithoutJudgesInput[]
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutJudgesInput | CompetitionUpdateWithWhereUniqueWithoutJudgesInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutJudgesInput | CompetitionUpdateManyWithWhereWithoutJudgesInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type MarksUncheckedUpdateManyWithoutJudgeNestedInput = {
    create?: XOR<MarksCreateWithoutJudgeInput, MarksUncheckedCreateWithoutJudgeInput> | MarksCreateWithoutJudgeInput[] | MarksUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: MarksCreateOrConnectWithoutJudgeInput | MarksCreateOrConnectWithoutJudgeInput[]
    upsert?: MarksUpsertWithWhereUniqueWithoutJudgeInput | MarksUpsertWithWhereUniqueWithoutJudgeInput[]
    createMany?: MarksCreateManyJudgeInputEnvelope
    set?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    disconnect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    delete?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    connect?: MarksWhereUniqueInput | MarksWhereUniqueInput[]
    update?: MarksUpdateWithWhereUniqueWithoutJudgeInput | MarksUpdateWithWhereUniqueWithoutJudgeInput[]
    updateMany?: MarksUpdateManyWithWhereWithoutJudgeInput | MarksUpdateManyWithWhereWithoutJudgeInput[]
    deleteMany?: MarksScalarWhereInput | MarksScalarWhereInput[]
  }

  export type JudgesCreateNestedOneWithoutMarksInput = {
    create?: XOR<JudgesCreateWithoutMarksInput, JudgesUncheckedCreateWithoutMarksInput>
    connectOrCreate?: JudgesCreateOrConnectWithoutMarksInput
    connect?: JudgesWhereUniqueInput
  }

  export type ParticipantsCreateNestedOneWithoutMarksInput = {
    create?: XOR<ParticipantsCreateWithoutMarksInput, ParticipantsUncheckedCreateWithoutMarksInput>
    connectOrCreate?: ParticipantsCreateOrConnectWithoutMarksInput
    connect?: ParticipantsWhereUniqueInput
  }

  export type JudgesUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<JudgesCreateWithoutMarksInput, JudgesUncheckedCreateWithoutMarksInput>
    connectOrCreate?: JudgesCreateOrConnectWithoutMarksInput
    upsert?: JudgesUpsertWithoutMarksInput
    connect?: JudgesWhereUniqueInput
    update?: XOR<XOR<JudgesUpdateToOneWithWhereWithoutMarksInput, JudgesUpdateWithoutMarksInput>, JudgesUncheckedUpdateWithoutMarksInput>
  }

  export type ParticipantsUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<ParticipantsCreateWithoutMarksInput, ParticipantsUncheckedCreateWithoutMarksInput>
    connectOrCreate?: ParticipantsCreateOrConnectWithoutMarksInput
    upsert?: ParticipantsUpsertWithoutMarksInput
    connect?: ParticipantsWhereUniqueInput
    update?: XOR<XOR<ParticipantsUpdateToOneWithWhereWithoutMarksInput, ParticipantsUpdateWithoutMarksInput>, ParticipantsUncheckedUpdateWithoutMarksInput>
  }

  export type UsersCreateNestedOneWithoutSchoolInput = {
    create?: XOR<UsersCreateWithoutSchoolInput, UsersUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSchoolInput
    connect?: UsersWhereUniqueInput
  }

  export type ParticipantsCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ParticipantsCreateWithoutSchoolInput, ParticipantsUncheckedCreateWithoutSchoolInput> | ParticipantsCreateWithoutSchoolInput[] | ParticipantsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutSchoolInput | ParticipantsCreateOrConnectWithoutSchoolInput[]
    createMany?: ParticipantsCreateManySchoolInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type ParticipantsUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ParticipantsCreateWithoutSchoolInput, ParticipantsUncheckedCreateWithoutSchoolInput> | ParticipantsCreateWithoutSchoolInput[] | ParticipantsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutSchoolInput | ParticipantsCreateOrConnectWithoutSchoolInput[]
    createMany?: ParticipantsCreateManySchoolInputEnvelope
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<UsersCreateWithoutSchoolInput, UsersUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSchoolInput
    upsert?: UsersUpsertWithoutSchoolInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSchoolInput, UsersUpdateWithoutSchoolInput>, UsersUncheckedUpdateWithoutSchoolInput>
  }

  export type ParticipantsUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ParticipantsCreateWithoutSchoolInput, ParticipantsUncheckedCreateWithoutSchoolInput> | ParticipantsCreateWithoutSchoolInput[] | ParticipantsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutSchoolInput | ParticipantsCreateOrConnectWithoutSchoolInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutSchoolInput | ParticipantsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ParticipantsCreateManySchoolInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutSchoolInput | ParticipantsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutSchoolInput | ParticipantsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type ParticipantsUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ParticipantsCreateWithoutSchoolInput, ParticipantsUncheckedCreateWithoutSchoolInput> | ParticipantsCreateWithoutSchoolInput[] | ParticipantsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ParticipantsCreateOrConnectWithoutSchoolInput | ParticipantsCreateOrConnectWithoutSchoolInput[]
    upsert?: ParticipantsUpsertWithWhereUniqueWithoutSchoolInput | ParticipantsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ParticipantsCreateManySchoolInputEnvelope
    set?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    disconnect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    delete?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    connect?: ParticipantsWhereUniqueInput | ParticipantsWhereUniqueInput[]
    update?: ParticipantsUpdateWithWhereUniqueWithoutSchoolInput | ParticipantsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ParticipantsUpdateManyWithWhereWithoutSchoolInput | ParticipantsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput
    connect?: SchoolWhereUniqueInput
  }

  export type JudgesCreateNestedOneWithoutUserInput = {
    create?: XOR<JudgesCreateWithoutUserInput, JudgesUncheckedCreateWithoutUserInput>
    connectOrCreate?: JudgesCreateOrConnectWithoutUserInput
    connect?: JudgesWhereUniqueInput
  }

  export type VerificationsCreateNestedOneWithoutUserInput = {
    create?: XOR<VerificationsCreateWithoutUserInput, VerificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationsCreateOrConnectWithoutUserInput
    connect?: VerificationsWhereUniqueInput
  }

  export type SchoolUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput
    connect?: SchoolWhereUniqueInput
  }

  export type JudgesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<JudgesCreateWithoutUserInput, JudgesUncheckedCreateWithoutUserInput>
    connectOrCreate?: JudgesCreateOrConnectWithoutUserInput
    connect?: JudgesWhereUniqueInput
  }

  export type VerificationsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VerificationsCreateWithoutUserInput, VerificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationsCreateOrConnectWithoutUserInput
    connect?: VerificationsWhereUniqueInput
  }

  export type EnumuserRolesFieldUpdateOperationsInput = {
    set?: $Enums.userRoles
  }

  export type SchoolUpdateOneWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput
    upsert?: SchoolUpsertWithoutUserInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUserInput, SchoolUpdateWithoutUserInput>, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type JudgesUpdateOneWithoutUserNestedInput = {
    create?: XOR<JudgesCreateWithoutUserInput, JudgesUncheckedCreateWithoutUserInput>
    connectOrCreate?: JudgesCreateOrConnectWithoutUserInput
    upsert?: JudgesUpsertWithoutUserInput
    disconnect?: JudgesWhereInput | boolean
    delete?: JudgesWhereInput | boolean
    connect?: JudgesWhereUniqueInput
    update?: XOR<XOR<JudgesUpdateToOneWithWhereWithoutUserInput, JudgesUpdateWithoutUserInput>, JudgesUncheckedUpdateWithoutUserInput>
  }

  export type VerificationsUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerificationsCreateWithoutUserInput, VerificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationsCreateOrConnectWithoutUserInput
    upsert?: VerificationsUpsertWithoutUserInput
    disconnect?: VerificationsWhereInput | boolean
    delete?: VerificationsWhereInput | boolean
    connect?: VerificationsWhereUniqueInput
    update?: XOR<XOR<VerificationsUpdateToOneWithWhereWithoutUserInput, VerificationsUpdateWithoutUserInput>, VerificationsUncheckedUpdateWithoutUserInput>
  }

  export type SchoolUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput
    upsert?: SchoolUpsertWithoutUserInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUserInput, SchoolUpdateWithoutUserInput>, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type JudgesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<JudgesCreateWithoutUserInput, JudgesUncheckedCreateWithoutUserInput>
    connectOrCreate?: JudgesCreateOrConnectWithoutUserInput
    upsert?: JudgesUpsertWithoutUserInput
    disconnect?: JudgesWhereInput | boolean
    delete?: JudgesWhereInput | boolean
    connect?: JudgesWhereUniqueInput
    update?: XOR<XOR<JudgesUpdateToOneWithWhereWithoutUserInput, JudgesUpdateWithoutUserInput>, JudgesUncheckedUpdateWithoutUserInput>
  }

  export type VerificationsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerificationsCreateWithoutUserInput, VerificationsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationsCreateOrConnectWithoutUserInput
    upsert?: VerificationsUpsertWithoutUserInput
    disconnect?: VerificationsWhereInput | boolean
    delete?: VerificationsWhereInput | boolean
    connect?: VerificationsWhereUniqueInput
    update?: XOR<XOR<VerificationsUpdateToOneWithWhereWithoutUserInput, VerificationsUpdateWithoutUserInput>, VerificationsUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedOneWithoutVerificationInput = {
    create?: XOR<UsersCreateWithoutVerificationInput, UsersUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerificationInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutVerificationNestedInput = {
    create?: XOR<UsersCreateWithoutVerificationInput, UsersUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerificationInput
    upsert?: UsersUpsertWithoutVerificationInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVerificationInput, UsersUpdateWithoutVerificationInput>, UsersUncheckedUpdateWithoutVerificationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAPPLICATION_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_STATUS | EnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPLICATION_STATUSFilter<$PrismaModel> | $Enums.APPLICATION_STATUS
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAPPLICATION_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.APPLICATION_STATUS | EnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.APPLICATION_STATUS[] | ListEnumAPPLICATION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumAPPLICATION_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.APPLICATION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAPPLICATION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumAPPLICATION_STATUSFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCOMPETITION_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.COMPETITION_STATUS | EnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCOMPETITION_STATUSFilter<$PrismaModel> | $Enums.COMPETITION_STATUS
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCOMPETITION_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.COMPETITION_STATUS | EnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.COMPETITION_STATUS[] | ListEnumCOMPETITION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumCOMPETITION_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.COMPETITION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCOMPETITION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumCOMPETITION_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumuserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoles | EnumuserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRolesFilter<$PrismaModel> | $Enums.userRoles
  }

  export type NestedEnumuserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoles | EnumuserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoles[] | ListEnumuserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRolesWithAggregatesFilter<$PrismaModel> | $Enums.userRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRolesFilter<$PrismaModel>
    _max?: NestedEnumuserRolesFilter<$PrismaModel>
  }

  export type SchoolCreateWithoutParticipantInput = {
    id?: string
    county: string
    user: UsersCreateNestedOneWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutParticipantInput = {
    id?: string
    county: string
    userId: string
  }

  export type SchoolCreateOrConnectWithoutParticipantInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutParticipantInput, SchoolUncheckedCreateWithoutParticipantInput>
  }

  export type CompetitionCreateWithoutParticipantsInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
    judges?: JudgesCreateNestedManyWithoutCompetitionsInput
  }

  export type CompetitionUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
    judges?: JudgesUncheckedCreateNestedManyWithoutCompetitionsInput
  }

  export type CompetitionCreateOrConnectWithoutParticipantsInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
  }

  export type MarksCreateWithoutParticipantInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    judge: JudgesCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutParticipantInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    judgeId: string
  }

  export type MarksCreateOrConnectWithoutParticipantInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutParticipantInput, MarksUncheckedCreateWithoutParticipantInput>
  }

  export type MarksCreateManyParticipantInputEnvelope = {
    data: MarksCreateManyParticipantInput | MarksCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutParticipantInput = {
    update: XOR<SchoolUpdateWithoutParticipantInput, SchoolUncheckedUpdateWithoutParticipantInput>
    create: XOR<SchoolCreateWithoutParticipantInput, SchoolUncheckedCreateWithoutParticipantInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutParticipantInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutParticipantInput, SchoolUncheckedUpdateWithoutParticipantInput>
  }

  export type SchoolUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompetitionUpsertWithoutParticipantsInput = {
    update: XOR<CompetitionUpdateWithoutParticipantsInput, CompetitionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutParticipantsInput, CompetitionUncheckedUpdateWithoutParticipantsInput>
  }

  export type CompetitionUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
    judges?: JudgesUpdateManyWithoutCompetitionsNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
    judges?: JudgesUncheckedUpdateManyWithoutCompetitionsNestedInput
  }

  export type MarksUpsertWithWhereUniqueWithoutParticipantInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutParticipantInput, MarksUncheckedUpdateWithoutParticipantInput>
    create: XOR<MarksCreateWithoutParticipantInput, MarksUncheckedCreateWithoutParticipantInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutParticipantInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutParticipantInput, MarksUncheckedUpdateWithoutParticipantInput>
  }

  export type MarksUpdateManyWithWhereWithoutParticipantInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutParticipantInput>
  }

  export type MarksScalarWhereInput = {
    AND?: MarksScalarWhereInput | MarksScalarWhereInput[]
    OR?: MarksScalarWhereInput[]
    NOT?: MarksScalarWhereInput | MarksScalarWhereInput[]
    id?: StringFilter<"Marks"> | string
    score?: IntFilter<"Marks"> | number
    comments?: StringFilter<"Marks"> | string
    createdAt?: DateTimeFilter<"Marks"> | Date | string
    judgeId?: StringFilter<"Marks"> | string
    participantId?: StringFilter<"Marks"> | string
  }

  export type JudgesCreateWithoutCompetitionsInput = {
    id?: string
    nationalId: string
    user: UsersCreateNestedOneWithoutJudgeInput
    marks?: MarksCreateNestedManyWithoutJudgeInput
  }

  export type JudgesUncheckedCreateWithoutCompetitionsInput = {
    id?: string
    nationalId: string
    userId: string
    marks?: MarksUncheckedCreateNestedManyWithoutJudgeInput
  }

  export type JudgesCreateOrConnectWithoutCompetitionsInput = {
    where: JudgesWhereUniqueInput
    create: XOR<JudgesCreateWithoutCompetitionsInput, JudgesUncheckedCreateWithoutCompetitionsInput>
  }

  export type ParticipantsCreateWithoutCompetitionInput = {
    id?: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutParticipantInput
    marks?: MarksCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUncheckedCreateWithoutCompetitionInput = {
    id?: string
    schoolId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    marks?: MarksUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsCreateOrConnectWithoutCompetitionInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutCompetitionInput, ParticipantsUncheckedCreateWithoutCompetitionInput>
  }

  export type ParticipantsCreateManyCompetitionInputEnvelope = {
    data: ParticipantsCreateManyCompetitionInput | ParticipantsCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type JudgesUpsertWithWhereUniqueWithoutCompetitionsInput = {
    where: JudgesWhereUniqueInput
    update: XOR<JudgesUpdateWithoutCompetitionsInput, JudgesUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<JudgesCreateWithoutCompetitionsInput, JudgesUncheckedCreateWithoutCompetitionsInput>
  }

  export type JudgesUpdateWithWhereUniqueWithoutCompetitionsInput = {
    where: JudgesWhereUniqueInput
    data: XOR<JudgesUpdateWithoutCompetitionsInput, JudgesUncheckedUpdateWithoutCompetitionsInput>
  }

  export type JudgesUpdateManyWithWhereWithoutCompetitionsInput = {
    where: JudgesScalarWhereInput
    data: XOR<JudgesUpdateManyMutationInput, JudgesUncheckedUpdateManyWithoutCompetitionsInput>
  }

  export type JudgesScalarWhereInput = {
    AND?: JudgesScalarWhereInput | JudgesScalarWhereInput[]
    OR?: JudgesScalarWhereInput[]
    NOT?: JudgesScalarWhereInput | JudgesScalarWhereInput[]
    id?: StringFilter<"Judges"> | string
    nationalId?: StringFilter<"Judges"> | string
    userId?: StringFilter<"Judges"> | string
  }

  export type ParticipantsUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: ParticipantsWhereUniqueInput
    update: XOR<ParticipantsUpdateWithoutCompetitionInput, ParticipantsUncheckedUpdateWithoutCompetitionInput>
    create: XOR<ParticipantsCreateWithoutCompetitionInput, ParticipantsUncheckedCreateWithoutCompetitionInput>
  }

  export type ParticipantsUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: ParticipantsWhereUniqueInput
    data: XOR<ParticipantsUpdateWithoutCompetitionInput, ParticipantsUncheckedUpdateWithoutCompetitionInput>
  }

  export type ParticipantsUpdateManyWithWhereWithoutCompetitionInput = {
    where: ParticipantsScalarWhereInput
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type ParticipantsScalarWhereInput = {
    AND?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
    OR?: ParticipantsScalarWhereInput[]
    NOT?: ParticipantsScalarWhereInput | ParticipantsScalarWhereInput[]
    id?: StringFilter<"Participants"> | string
    schoolId?: StringFilter<"Participants"> | string
    competitionId?: StringFilter<"Participants"> | string
    status?: EnumAPPLICATION_STATUSFilter<"Participants"> | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFilter<"Participants"> | Date | string
  }

  export type UsersCreateWithoutJudgeInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUserInput
    verification?: VerificationsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutJudgeInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolUncheckedCreateNestedOneWithoutUserInput
    verification?: VerificationsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutJudgeInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutJudgeInput, UsersUncheckedCreateWithoutJudgeInput>
  }

  export type CompetitionCreateWithoutJudgesInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
    participants?: ParticipantsCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutJudgesInput = {
    id?: string
    name: string
    schedule: Date | string
    description: string
    venue: string
    maxParticipants?: number
    status?: $Enums.COMPETITION_STATUS
    totalParticipants?: number
    participants?: ParticipantsUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutJudgesInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutJudgesInput, CompetitionUncheckedCreateWithoutJudgesInput>
  }

  export type MarksCreateWithoutJudgeInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    participant: ParticipantsCreateNestedOneWithoutMarksInput
  }

  export type MarksUncheckedCreateWithoutJudgeInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    participantId: string
  }

  export type MarksCreateOrConnectWithoutJudgeInput = {
    where: MarksWhereUniqueInput
    create: XOR<MarksCreateWithoutJudgeInput, MarksUncheckedCreateWithoutJudgeInput>
  }

  export type MarksCreateManyJudgeInputEnvelope = {
    data: MarksCreateManyJudgeInput | MarksCreateManyJudgeInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutJudgeInput = {
    update: XOR<UsersUpdateWithoutJudgeInput, UsersUncheckedUpdateWithoutJudgeInput>
    create: XOR<UsersCreateWithoutJudgeInput, UsersUncheckedCreateWithoutJudgeInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutJudgeInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutJudgeInput, UsersUncheckedUpdateWithoutJudgeInput>
  }

  export type UsersUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUserNestedInput
    verification?: VerificationsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUncheckedUpdateOneWithoutUserNestedInput
    verification?: VerificationsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CompetitionUpsertWithWhereUniqueWithoutJudgesInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutJudgesInput, CompetitionUncheckedUpdateWithoutJudgesInput>
    create: XOR<CompetitionCreateWithoutJudgesInput, CompetitionUncheckedCreateWithoutJudgesInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutJudgesInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutJudgesInput, CompetitionUncheckedUpdateWithoutJudgesInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutJudgesInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutJudgesInput>
  }

  export type CompetitionScalarWhereInput = {
    AND?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
    OR?: CompetitionScalarWhereInput[]
    NOT?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
    id?: StringFilter<"Competition"> | string
    name?: StringFilter<"Competition"> | string
    schedule?: DateTimeFilter<"Competition"> | Date | string
    description?: StringFilter<"Competition"> | string
    venue?: StringFilter<"Competition"> | string
    maxParticipants?: IntFilter<"Competition"> | number
    status?: EnumCOMPETITION_STATUSFilter<"Competition"> | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFilter<"Competition"> | number
  }

  export type MarksUpsertWithWhereUniqueWithoutJudgeInput = {
    where: MarksWhereUniqueInput
    update: XOR<MarksUpdateWithoutJudgeInput, MarksUncheckedUpdateWithoutJudgeInput>
    create: XOR<MarksCreateWithoutJudgeInput, MarksUncheckedCreateWithoutJudgeInput>
  }

  export type MarksUpdateWithWhereUniqueWithoutJudgeInput = {
    where: MarksWhereUniqueInput
    data: XOR<MarksUpdateWithoutJudgeInput, MarksUncheckedUpdateWithoutJudgeInput>
  }

  export type MarksUpdateManyWithWhereWithoutJudgeInput = {
    where: MarksScalarWhereInput
    data: XOR<MarksUpdateManyMutationInput, MarksUncheckedUpdateManyWithoutJudgeInput>
  }

  export type JudgesCreateWithoutMarksInput = {
    id?: string
    nationalId: string
    user: UsersCreateNestedOneWithoutJudgeInput
    competitions?: CompetitionCreateNestedManyWithoutJudgesInput
  }

  export type JudgesUncheckedCreateWithoutMarksInput = {
    id?: string
    nationalId: string
    userId: string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutJudgesInput
  }

  export type JudgesCreateOrConnectWithoutMarksInput = {
    where: JudgesWhereUniqueInput
    create: XOR<JudgesCreateWithoutMarksInput, JudgesUncheckedCreateWithoutMarksInput>
  }

  export type ParticipantsCreateWithoutMarksInput = {
    id?: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutParticipantInput
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantsUncheckedCreateWithoutMarksInput = {
    id?: string
    schoolId: string
    competitionId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
  }

  export type ParticipantsCreateOrConnectWithoutMarksInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutMarksInput, ParticipantsUncheckedCreateWithoutMarksInput>
  }

  export type JudgesUpsertWithoutMarksInput = {
    update: XOR<JudgesUpdateWithoutMarksInput, JudgesUncheckedUpdateWithoutMarksInput>
    create: XOR<JudgesCreateWithoutMarksInput, JudgesUncheckedCreateWithoutMarksInput>
    where?: JudgesWhereInput
  }

  export type JudgesUpdateToOneWithWhereWithoutMarksInput = {
    where?: JudgesWhereInput
    data: XOR<JudgesUpdateWithoutMarksInput, JudgesUncheckedUpdateWithoutMarksInput>
  }

  export type JudgesUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutJudgeNestedInput
    competitions?: CompetitionUpdateManyWithoutJudgesNestedInput
  }

  export type JudgesUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    competitions?: CompetitionUncheckedUpdateManyWithoutJudgesNestedInput
  }

  export type ParticipantsUpsertWithoutMarksInput = {
    update: XOR<ParticipantsUpdateWithoutMarksInput, ParticipantsUncheckedUpdateWithoutMarksInput>
    create: XOR<ParticipantsCreateWithoutMarksInput, ParticipantsUncheckedCreateWithoutMarksInput>
    where?: ParticipantsWhereInput
  }

  export type ParticipantsUpdateToOneWithWhereWithoutMarksInput = {
    where?: ParticipantsWhereInput
    data: XOR<ParticipantsUpdateWithoutMarksInput, ParticipantsUncheckedUpdateWithoutMarksInput>
  }

  export type ParticipantsUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutParticipantNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutSchoolInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    judge?: JudgesCreateNestedOneWithoutUserInput
    verification?: VerificationsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    judge?: JudgesUncheckedCreateNestedOneWithoutUserInput
    verification?: VerificationsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSchoolInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSchoolInput, UsersUncheckedCreateWithoutSchoolInput>
  }

  export type ParticipantsCreateWithoutSchoolInput = {
    id?: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
    marks?: MarksCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsUncheckedCreateWithoutSchoolInput = {
    id?: string
    competitionId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
    marks?: MarksUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantsCreateOrConnectWithoutSchoolInput = {
    where: ParticipantsWhereUniqueInput
    create: XOR<ParticipantsCreateWithoutSchoolInput, ParticipantsUncheckedCreateWithoutSchoolInput>
  }

  export type ParticipantsCreateManySchoolInputEnvelope = {
    data: ParticipantsCreateManySchoolInput | ParticipantsCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutSchoolInput = {
    update: XOR<UsersUpdateWithoutSchoolInput, UsersUncheckedUpdateWithoutSchoolInput>
    create: XOR<UsersCreateWithoutSchoolInput, UsersUncheckedCreateWithoutSchoolInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSchoolInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSchoolInput, UsersUncheckedUpdateWithoutSchoolInput>
  }

  export type UsersUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judge?: JudgesUpdateOneWithoutUserNestedInput
    verification?: VerificationsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judge?: JudgesUncheckedUpdateOneWithoutUserNestedInput
    verification?: VerificationsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ParticipantsUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ParticipantsWhereUniqueInput
    update: XOR<ParticipantsUpdateWithoutSchoolInput, ParticipantsUncheckedUpdateWithoutSchoolInput>
    create: XOR<ParticipantsCreateWithoutSchoolInput, ParticipantsUncheckedCreateWithoutSchoolInput>
  }

  export type ParticipantsUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ParticipantsWhereUniqueInput
    data: XOR<ParticipantsUpdateWithoutSchoolInput, ParticipantsUncheckedUpdateWithoutSchoolInput>
  }

  export type ParticipantsUpdateManyWithWhereWithoutSchoolInput = {
    where: ParticipantsScalarWhereInput
    data: XOR<ParticipantsUpdateManyMutationInput, ParticipantsUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolCreateWithoutUserInput = {
    id?: string
    county: string
    participant?: ParticipantsCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUserInput = {
    id?: string
    county: string
    participant?: ParticipantsUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUserInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
  }

  export type JudgesCreateWithoutUserInput = {
    id?: string
    nationalId: string
    competitions?: CompetitionCreateNestedManyWithoutJudgesInput
    marks?: MarksCreateNestedManyWithoutJudgeInput
  }

  export type JudgesUncheckedCreateWithoutUserInput = {
    id?: string
    nationalId: string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutJudgesInput
    marks?: MarksUncheckedCreateNestedManyWithoutJudgeInput
  }

  export type JudgesCreateOrConnectWithoutUserInput = {
    where: JudgesWhereUniqueInput
    create: XOR<JudgesCreateWithoutUserInput, JudgesUncheckedCreateWithoutUserInput>
  }

  export type VerificationsCreateWithoutUserInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type VerificationsUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type VerificationsCreateOrConnectWithoutUserInput = {
    where: VerificationsWhereUniqueInput
    create: XOR<VerificationsCreateWithoutUserInput, VerificationsUncheckedCreateWithoutUserInput>
  }

  export type SchoolUpsertWithoutUserInput = {
    update: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutUserInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type SchoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    participant?: ParticipantsUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    participant?: ParticipantsUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type JudgesUpsertWithoutUserInput = {
    update: XOR<JudgesUpdateWithoutUserInput, JudgesUncheckedUpdateWithoutUserInput>
    create: XOR<JudgesCreateWithoutUserInput, JudgesUncheckedCreateWithoutUserInput>
    where?: JudgesWhereInput
  }

  export type JudgesUpdateToOneWithWhereWithoutUserInput = {
    where?: JudgesWhereInput
    data: XOR<JudgesUpdateWithoutUserInput, JudgesUncheckedUpdateWithoutUserInput>
  }

  export type JudgesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    competitions?: CompetitionUpdateManyWithoutJudgesNestedInput
    marks?: MarksUpdateManyWithoutJudgeNestedInput
  }

  export type JudgesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    competitions?: CompetitionUncheckedUpdateManyWithoutJudgesNestedInput
    marks?: MarksUncheckedUpdateManyWithoutJudgeNestedInput
  }

  export type VerificationsUpsertWithoutUserInput = {
    update: XOR<VerificationsUpdateWithoutUserInput, VerificationsUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationsCreateWithoutUserInput, VerificationsUncheckedCreateWithoutUserInput>
    where?: VerificationsWhereInput
  }

  export type VerificationsUpdateToOneWithWhereWithoutUserInput = {
    where?: VerificationsWhereInput
    data: XOR<VerificationsUpdateWithoutUserInput, VerificationsUncheckedUpdateWithoutUserInput>
  }

  export type VerificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutVerificationInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedOneWithoutUserInput
    judge?: JudgesCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutVerificationInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.userRoles
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolUncheckedCreateNestedOneWithoutUserInput
    judge?: JudgesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutVerificationInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVerificationInput, UsersUncheckedCreateWithoutVerificationInput>
  }

  export type UsersUpsertWithoutVerificationInput = {
    update: XOR<UsersUpdateWithoutVerificationInput, UsersUncheckedUpdateWithoutVerificationInput>
    create: XOR<UsersCreateWithoutVerificationInput, UsersUncheckedCreateWithoutVerificationInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVerificationInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVerificationInput, UsersUncheckedUpdateWithoutVerificationInput>
  }

  export type UsersUpdateWithoutVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutUserNestedInput
    judge?: JudgesUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumuserRolesFieldUpdateOperationsInput | $Enums.userRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUncheckedUpdateOneWithoutUserNestedInput
    judge?: JudgesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MarksCreateManyParticipantInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    judgeId: string
  }

  export type MarksUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judge?: JudgesUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type MarksUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantsCreateManyCompetitionInput = {
    id?: string
    schoolId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
  }

  export type JudgesUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutJudgeNestedInput
    marks?: MarksUpdateManyWithoutJudgeNestedInput
  }

  export type JudgesUncheckedUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marks?: MarksUncheckedUpdateManyWithoutJudgeNestedInput
  }

  export type JudgesUncheckedUpdateManyWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantsUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutParticipantNestedInput
    marks?: MarksUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marks?: MarksUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarksCreateManyJudgeInput = {
    id?: string
    score: number
    comments: string
    createdAt?: Date | string
    participantId: string
  }

  export type CompetitionUpdateWithoutJudgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantsUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutJudgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantsUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutJudgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schedule?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumCOMPETITION_STATUSFieldUpdateOperationsInput | $Enums.COMPETITION_STATUS
    totalParticipants?: IntFieldUpdateOperationsInput | number
  }

  export type MarksUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantsUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarksUncheckedUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type MarksUncheckedUpdateManyWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comments?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantsCreateManySchoolInput = {
    id?: string
    competitionId: string
    status?: $Enums.APPLICATION_STATUS
    createdAt?: Date | string
  }

  export type ParticipantsUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
    marks?: MarksUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marks?: MarksUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantsUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumAPPLICATION_STATUSFieldUpdateOperationsInput | $Enums.APPLICATION_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}